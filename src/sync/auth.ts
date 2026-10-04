/**
 * Auth — Google sign-in through the shared Cognito user pool (same pool and app client as
 * CTO-ed; see the vault ADR). Thin wrapper over oidc-client-ts; NOTHING else in the app may
 * import oidc-client-ts, so a library swap stays one file.
 *
 *   auth.available()   false when sync isn't configured or on file:// — app runs local-only
 *   auth.ready()       resolves once a ?code= redirect is settled
 *   auth.user()        {sub, email, name} | null
 *   auth.token()       ID token (not the access token — the API needs email/name), renewed near expiry
 *   auth.login() / auth.logout() / auth.onChange(fn)
 */
import { UserManager, WebStorageStateStore, type User } from 'oidc-client-ts';
import { SYNC_CFG, syncConfigured } from './config';

export interface AuthUser { sub: string; email: string; name: string }

type Listener = (u: AuthUser | null) => void;

const isHttp = typeof location !== 'undefined' && (location.protocol === 'http:' || location.protocol === 'https:');
const redirectUri = () => location.origin + '/';

let mgr: UserManager | null = null;
let current: User | null = null;
let readyP: Promise<AuthUser | null> | null = null;
const listeners: Listener[] = [];

function manager(): UserManager | null {
  if (mgr) return mgr;
  if (!isHttp || !syncConfigured()) return null;
  mgr = new UserManager({
    authority: SYNC_CFG.authority,
    client_id: SYNC_CFG.clientId,
    redirect_uri: redirectUri(),
    response_type: 'code',
    scope: 'email openid profile',
    // localStorage: the refresh token lives 90 days; sync should survive a browser restart.
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    automaticSilentRenew: true,
    monitorSession: false, // Cognito has no check_session_iframe
  });
  mgr.events.addUserLoaded(u => { current = u; fire(); });
  mgr.events.addUserUnloaded(() => { current = null; fire(); });
  return mgr;
}

function toUser(u: User | null): AuthUser | null {
  if (!u) return null;
  const p = u.profile ?? {};
  return { sub: String(p.sub), email: String(p.email ?? '').toLowerCase(), name: String(p.name ?? p.email ?? '') };
}

function fire() {
  const u = toUser(current);
  listeners.forEach(fn => { try { fn(u); } catch { /* ignore */ } });
}

async function boot(): Promise<AuthUser | null> {
  const m = manager();
  if (!m) return null;
  const qs = new URLSearchParams(location.search);
  if (qs.has('code') && qs.has('state')) {
    try {
      const u = await m.signinRedirectCallback();
      current = u;
      // Back to the lesson that started the sign-in: the app routes on the hash, which the
      // OAuth round trip loses, so it rides in the OIDC state.
      const back = (u.state as { returnTo?: string } | undefined)?.returnTo;
      let hash = location.hash;
      try { if (back) hash = new URL(back).hash; } catch { /* ignore */ }
      history.replaceState({}, document.title, location.pathname + hash);
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } catch (e) {
      // stale or replayed ?code — continue signed out instead of trapping the page
      console.warn('[auth] sign-in callback failed:', (e as Error)?.message);
      history.replaceState({}, document.title, location.pathname + location.hash);
    }
  } else {
    current = await m.getUser().catch(() => null);
  }
  fire();
  return toUser(current);
}

export const auth = {
  available: () => isHttp && syncConfigured(),
  ready: () => (readyP ??= boot()),
  signedIn: () => !!current,
  user: () => toUser(current),
  async token(): Promise<string | null> {
    const m = manager();
    if (!m) return null;
    const u = await m.getUser().catch(() => null);
    if (!u) return null;
    if (u.expires_in != null && u.expires_in > 60) return u.id_token ?? null;
    try { const n = await m.signinSilent(); current = n; return n?.id_token ?? null; } catch { return null; }
  },
  async login() {
    const m = manager();
    if (!m) return;
    await m.signinRedirect({ state: { returnTo: location.href } }).catch(e => console.warn('[auth] login failed:', e?.message));
  },
  async logout() {
    const m = manager();
    const done = () => {
      location.href = `${SYNC_CFG.domain}/logout?client_id=${encodeURIComponent(SYNC_CFG.clientId)}&logout_uri=${encodeURIComponent(redirectUri())}`;
    };
    if (!m) return done();
    try { await m.removeUser(); current = null; fire(); } finally { done(); }
  },
  onChange(fn: Listener) { listeners.push(fn); return () => { const i = listeners.indexOf(fn); if (i >= 0) listeners.splice(i, 1); }; },
};

/** Test seam: lets the e2e harness and unit tests drive the transport without Cognito. */
export interface AuthLike {
  available(): boolean;
  ready(): Promise<AuthUser | null>;
  signedIn(): boolean;
  user(): AuthUser | null;
  token(): Promise<string | null>;
  onChange(fn: Listener): () => void;
  login?(): Promise<void>;
  logout?(): Promise<void>;
}
