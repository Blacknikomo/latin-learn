/**
 * SyncTransport — cross-device progress transport. TypeScript port of CTO-ed's `sync.js`
 * (same contract, same backend handler), one instance per cloud store.
 *
 * Design — event deltas, not state blobs:
 * - every answer / fact becomes a small event with a client-minted `eventId`, queued in
 *   localStorage under a per-account key and POSTed in debounced batches (`POST /events`);
 *   the backend applies counters with atomic ADDs and snapshots last-write-wins, and applies
 *   an `eventId` at most once — so retries never double-count and a stale device never wipes
 *   progress made elsewhere;
 * - on sign-in / load: flush the queue, then `GET /state` and adopt it via the model's merge;
 *   empty server + local history → one guarded `POST /bootstrap` (asked once);
 * - reset epochs: `POST /reset` bumps the store's generation; a device behind it hard-clears
 *   itself and discards its pre-reset queue on the next `/events` or `/state`;
 * - local keys are namespaced by account (`anon` when signed out); answers made signed out
 *   are claimed by whoever signs in next ("queue locally, flush after login");
 * - fail-soft everywhere: unconfigured, signed out or offline, the app works exactly as
 *   before and the badge shows the queue.
 */
import type { AuthLike } from './auth';
import { SYNC_CFG } from './config';
import { lsDel, lsGet, lsJson, lsSet } from './storage';

export interface SyncEvent { type: string; eventId?: string; [k: string]: unknown }

export interface StoreBinding<D> {
  getStore: () => D;
  setStore: (remote: D) => void;   // adopt server state (model merges unflushed local state)
  clearStore: () => void;          // hard reset to the empty shape (remote reset epoch)
  hasHistory: () => boolean;       // anything worth bootstrapping?
  onRemoteUpdate: () => void;      // re-render
}

export type SyncState = 'local' | 'signin' | 'ok' | 'queued' | 'err';
export interface SyncStatus { state: SyncState; queued: number; detail?: string }

const FLUSH_DEBOUNCE_MS = 400;
const FETCH_TIMEOUT_MS = 8000;
const MAX_BATCH = 200;
const MAX_QUEUE = 2000;
const PREFIX = 'll_sync_';

export const newEventId = () => {
  try { if (crypto?.randomUUID) return crypto.randomUUID(); } catch { /* ignore */ }
  return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
};

export class SyncTransport<D> {
  private binding: StoreBinding<D> | null = null;
  private flushTimer: ReturnType<typeof setTimeout> | undefined;
  private flushing = false;
  private lastError = '';
  private listeners: ((s: SyncStatus) => void)[] = [];
  private readonly store: string;
  private readonly auth: AuthLike;
  private readonly askBootstrap: () => boolean;

  constructor(store: string, auth: AuthLike, askBootstrap: () => boolean) {
    this.store = store;
    this.auth = auth;
    this.askBootstrap = askBootstrap;
  }

  // ---------- keys (per account) ----------
  private who() { return this.auth.user()?.sub ?? 'anon'; }
  private qKey(sub = this.who()) { return `${PREFIX}queue_${this.store}_${sub}`; }
  private genKey(sub = this.who()) { return `${PREFIX}gen_${this.store}_${sub}`; }
  private loadQ(): SyncEvent[] { return lsJson<SyncEvent[]>(this.qKey(), []); }
  private saveQ(q: SyncEvent[]) { lsSet(this.qKey(), JSON.stringify(q)); }
  private loadGen() { const n = parseInt(lsGet(this.genKey()) ?? '0', 10); return Number.isFinite(n) ? n : 0; }
  private saveGen(n: number) { lsSet(this.genKey(), String(n | 0)); }
  private live() { return this.auth.available() && this.auth.signedIn(); }

  // ---------- status ----------
  status(): SyncStatus {
    const queued = this.loadQ().length;
    if (!this.auth.available()) return { state: 'local', queued };
    if (!this.auth.signedIn()) return { state: 'signin', queued };
    if (this.lastError) return { state: 'err', queued, detail: this.lastError };
    return { state: queued ? 'queued' : 'ok', queued };
  }
  subscribe(fn: (s: SyncStatus) => void) {
    this.listeners.push(fn);
    return () => { this.listeners = this.listeners.filter(x => x !== fn); };
  }
  private emit() { const s = this.status(); this.listeners.forEach(fn => fn(s)); }

  // ---------- http ----------
  private async api<R>(method: string, path: string, body?: unknown): Promise<R> {
    if (!this.live()) throw new Error('not signed in');
    const token = await this.auth.token();
    if (!token) throw new Error('session expired');
    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), FETCH_TIMEOUT_MS);
    try {
      const r = await fetch(SYNC_CFG.apiBase + path, {
        method,
        headers: { 'content-type': 'application/json', authorization: 'Bearer ' + token },
        body: body ? JSON.stringify(body) : undefined,
        signal: ac.signal,
      });
      // 401 with a live local session: keep the queue, it flushes after the next sign-in
      if (!r.ok) throw new Error('HTTP ' + r.status + (r.status === 401 ? ' (sign in again)' : ''));
      return (await r.json()) as R;
    } finally { clearTimeout(t); }
  }

  // ---------- queue ----------
  /** Queue an event. `coalesce` returns true for a queued event this one REPLACES
   *  (same session date / same fact key): the replacement gets a FRESH eventId, because its
   *  content changed and reusing the id would let the backend skip it as a duplicate. */
  enqueue(ev: SyncEvent, coalesce?: (queued: SyncEvent) => boolean) {
    const q = this.loadQ();
    const i = coalesce ? q.findIndex(coalesce) : -1;
    ev.eventId = newEventId();
    if (i >= 0) q[i] = ev; else q.push(ev);
    if (q.length > MAX_QUEUE) q.splice(0, q.length - MAX_QUEUE);
    this.saveQ(q);
    this.emit();
    this.scheduleFlush();
  }

  private scheduleFlush() {
    if (!this.live()) return;
    clearTimeout(this.flushTimer);
    this.flushTimer = setTimeout(() => { void this.flush(); }, FLUSH_DEBOUNCE_MS);
  }

  async flush(): Promise<void> {
    if (this.flushing || !this.live() || !this.binding) return;
    const q = this.loadQ();
    if (!q.length) { this.emit(); return; }
    this.flushing = true;
    const batch = q.slice(0, MAX_BATCH);
    try {
      const r = await this.api<{ resetGen?: number }>('POST', '/events', { store: this.store, gen: this.loadGen(), events: batch });
      if (typeof r?.resetGen === 'number' && r.resetGen > this.loadGen()) { this.forceClear(r.resetGen); return; }
      const rest = this.loadQ().slice(batch.length); // keep events queued during the await
      this.saveQ(rest);
      this.lastError = '';
      this.emit();
      if (rest.length) setTimeout(() => { void this.flush(); }, 50);
    } catch (e) {
      this.lastError = (e as Error).message; // queue kept; retried on next event / online / load
      this.emit();
    } finally { this.flushing = false; }
  }

  // ---------- pull / bootstrap / reset ----------
  private forceClear(serverGen: number) {
    this.saveQ([]);            // pre-reset events are void
    this.saveGen(serverGen);
    this.binding?.clearStore();
    this.binding?.onRemoteUpdate();
    this.emit();
  }

  async pull(): Promise<void> {
    if (!this.live() || !this.binding) return;
    try {
      const remote = await this.api<D & { _meta?: { resetGen?: number; bootstrapped?: boolean; items?: number } }>('GET', '/state?store=' + encodeURIComponent(this.store));
      const meta = remote._meta ?? {};
      this.lastError = '';
      if ((meta.resetGen ?? 0) > this.loadGen()) { this.forceClear(meta.resetGen ?? 0); return; }
      if (meta.bootstrapped || (meta.items ?? 0) > 0) {
        delete remote._meta;
        this.binding.setStore(remote);
        this.binding.onRemoteUpdate();
      } else if (this.binding.hasHistory() && this.askBootstrap()) {
        const r = await this.api<{ bootstrapped?: boolean }>('POST', '/bootstrap', { store: this.store, data: this.binding.getStore() });
        if (!r?.bootstrapped) this.lastError = 'bootstrap raced';
      }
      this.emit();
    } catch (e) {
      this.lastError = (e as Error).message;
      this.emit();
    }
  }

  async resetEverywhere(): Promise<{ ok: boolean; gen?: number; reason?: string }> {
    if (!this.binding) return { ok: false, reason: 'no-context' };
    if (!this.live()) return { ok: false, reason: 'not-signed-in' };
    const r = await this.api<{ gen?: number }>('POST', '/reset', { store: this.store });
    const gen = typeof r?.gen === 'number' ? r.gen : this.loadGen() + 1;
    this.forceClear(gen);
    return { ok: true, gen };
  }

  isLive() { return this.live(); }

  /** Answers made before signing in belong to whoever then signs in. */
  private claimAnonQueue() {
    if (this.who() === 'anon') return;
    const pending = lsJson<SyncEvent[]>(this.qKey('anon'), []);
    if (!pending.length) return;
    this.saveQ([...this.loadQ(), ...pending]);
    lsDel(this.qKey('anon'));
    lsDel(this.genKey('anon')); // epochs are per account
  }

  bind(binding: StoreBinding<D>) {
    this.binding = binding;
    window.addEventListener('online', () => { void this.flush(); });
    const sync = () => {
      this.emit();
      if (this.live()) { this.claimAnonQueue(); void this.flush().then(() => this.pull()); }
    };
    if (!this.auth.available()) { this.emit(); return; }
    this.auth.ready().then(sync, sync);
    this.auth.onChange(sync); // sign-in, sign-out, silent renew
  }
}
