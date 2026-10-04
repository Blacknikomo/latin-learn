import { useState } from 'react';
import { useT } from '../i18n';
import { useProgress } from '../progress';

/** ☁ badge in the top bar — the React counterpart of CTO-ed's sync.js badge + panel. */
export function SyncBadge() {
  const { ui } = useT();
  const { status, user, login, logout } = useProgress();
  const [open, setOpen] = useState(false);
  const n = status.queued;
  const label =
    status.state === 'local' ? ui('syncLocal')
    : status.state === 'signin' ? ui('syncSignIn')
    : status.state === 'err' ? `⚠ ${n ? `${n} ${ui('syncQueued')}` : ui('syncErr')}`
    : status.state === 'queued' ? `${n} ${ui('syncQueued')}`
    : ui('syncOk');
  return (
    <div className="sync">
      <button className={`sync__badge sync__badge--${status.state}`} title={status.detail ?? ''} onClick={() => setOpen(o => !o)}>
        ☁ {label}
      </button>
      {open && (
        <div className="sync__panel" role="dialog" aria-label={ui('syncTitle')}>
          <h4>☁ {ui('syncTitle')}</h4>
          {status.state === 'local' ? (
            <p className="small">{ui('syncLocalBody')}</p>
          ) : !user ? (
            <>
              <p className="small">{ui('syncSignInBody')}{n ? <> <b>{n}</b> {ui('syncPending')}.</> : null}</p>
              <button className="btn" onClick={login}>{ui('signInGoogle')}</button>
            </>
          ) : (
            <>
              <p className="small">
                {ui('signedInAs')} <b>{user.email || user.name}</b>.<br />
                {n ? `${n} ${ui('waiting')}.` : ui('allSynced')}
                {status.detail && <><br /><span className="muted">{status.detail}</span></>}
              </p>
              <button className="btn btn--ghost" onClick={logout}>{ui('signOut')}</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
