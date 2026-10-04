/**
 * Sync configuration. Values come from Vite env (`.env.local`, git-ignored; see `.env.example`).
 * None of them is a secret (a public SPA client id, an issuer URL, an API origin), but resource
 * names and ids are documented in the owner's vault, not in this repo — so they are injected at
 * build time instead of committed. Missing values → the app runs local-only, exactly as before.
 */
const env = import.meta.env;

export const SYNC_CFG = {
  authority: (env.VITE_AUTH_AUTHORITY as string | undefined) ?? '',   // https://cognito-idp.<region>.amazonaws.com/<poolId>
  clientId: (env.VITE_AUTH_CLIENT_ID as string | undefined) ?? '',    // public app client (no secret)
  domain: (env.VITE_AUTH_DOMAIN as string | undefined) ?? '',         // https://<prefix>.auth.<region>.amazoncognito.com
  apiBase: ((env.VITE_API_BASE as string | undefined) ?? '').replace(/\/$/, ''), // progress API origin
};

export const syncConfigured = () => !!(SYNC_CFG.authority && SYNC_CFG.clientId && SYNC_CFG.domain && SYNC_CFG.apiBase);

/** Cloud store names — must exist in the backend's store map (see AGENTS.md §6). */
export const STORES = {
  answers: 'latin',        // kind "quiz":  per-item answers, mastery, sessions (QuizHistory shape)
  state: 'latin-state',    // kind "facts": per-lesson key → {v, at}, last-write-wins (LessonFacts shape)
} as const;
