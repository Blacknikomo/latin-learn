/** Guarded localStorage access: private windows, blocked site data and quota errors never throw. */
export const lsGet = (k: string): string | null => { try { return localStorage.getItem(k); } catch { return null; } };
export const lsSet = (k: string, v: string): void => { try { localStorage.setItem(k, v); } catch { /* ignore */ } };
export const lsDel = (k: string): void => { try { localStorage.removeItem(k); } catch { /* ignore */ } };
export function lsJson<T>(k: string, fallback: T): T {
  try { const v = JSON.parse(lsGet(k) ?? 'null'); return (v ?? fallback) as T; } catch { return fallback; }
}
