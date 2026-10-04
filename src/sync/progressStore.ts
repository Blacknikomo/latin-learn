/**
 * ProgressStore — ONE persisted, cloud-synced progress object per store. Port of CTO-ed's
 * `progress-store.js`. It owns exactly four things:
 *   1. localStorage read/write (guarded)
 *   2. defensive migration: top-level keys missing from an old save are filled from defaults()
 *   3. sync wiring: hands the object to a SyncTransport and adopts what the server returns
 *   4. the two resets: this device only, or every device (cloud reset epoch)
 * It knows nothing about lessons or quizzes; the domain models sit on top of it
 * (quizHistory.ts, lessonFacts.ts).
 */
import { lsGet, lsSet } from './storage';
import type { SyncEvent, SyncTransport } from './transport';

export interface ProgressStoreOpts<D extends object> {
  key: string;                                   // localStorage key
  defaults: () => D;                             // empty shape (also drives migration)
  transport: SyncTransport<D> | null;            // null → local only
  hasHistory?: (d: D) => boolean;
  mergeRemote?: (local: D, remote: D) => D;      // default: remote wins
  onChange?: () => void;                         // after a remote pull or a reset
}

export interface ProgressStore<D extends object> {
  data: D;                                       // STABLE identity: contents replaced in place
  save(): void;
  push(ev: SyncEvent, coalesce?: (q: SyncEvent) => boolean): void;
  resetLocal(): void;
  resetEverywhere(): Promise<{ ok: boolean; gen?: number; reason?: string }>;
  isSynced(): boolean;
}

function replaceInPlace<D extends object>(target: D, source: D): D {
  for (const k of Object.keys(target)) delete (target as Record<string, unknown>)[k];
  return Object.assign(target, source);
}

export function openProgressStore<D extends object>(o: ProgressStoreOpts<D>): ProgressStore<D> {
  const onChange = o.onChange ?? (() => {});
  const mergeRemote = o.mergeRemote ?? ((_l: D, r: D) => Object.assign(o.defaults(), r));
  const hasHistory = o.hasHistory ?? ((d: D) => Object.values(d).some(v =>
    Array.isArray(v) ? v.length > 0 : v && typeof v === 'object' ? Object.keys(v).length > 0 : !!v));

  const load = (): D => {
    const d = o.defaults() as Record<string, unknown>;
    try {
      const saved = JSON.parse(lsGet(o.key) ?? 'null');
      if (saved && typeof saved === 'object') for (const k of Object.keys(saved)) d[k] = saved[k];
    } catch { /* corrupt save → defaults */ }
    return d as D;
  };
  const data = load();
  const save = () => lsSet(o.key, JSON.stringify(data));
  save(); // persist the migrated shape immediately

  const t = o.transport;
  t?.bind({
    getStore: () => data,
    hasHistory: () => hasHistory(data),
    setStore: remote => { replaceInPlace(data, mergeRemote(data, remote)); save(); },
    clearStore: () => { replaceInPlace(data, o.defaults()); save(); },
    onRemoteUpdate: onChange,
  });

  return {
    data,
    save,
    push: (ev, coalesce) => { t?.enqueue(ev, coalesce); },
    resetLocal() { replaceInPlace(data, o.defaults()); save(); onChange(); },
    async resetEverywhere() { return t ? t.resetEverywhere() : { ok: false, reason: 'local only' }; },
    isSynced: () => !!t?.isLive(),
  };
}
