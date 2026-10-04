import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { canSpeak, speak, type Mode } from '../speech';
import { useT } from '../i18n';

interface ModeCtxT { mode: Mode; setMode: (m: Mode) => void }
const ModeCtx = createContext<ModeCtxT>({ mode: 'classical', setMode: () => {} });

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(() => {
    try { return (localStorage.getItem('latin-learn:mode') as Mode) || 'classical'; } catch { return 'classical'; }
  });
  useEffect(() => { try { localStorage.setItem('latin-learn:mode', mode); } catch { /* ignore */ } }, [mode]);
  return <ModeCtx.Provider value={{ mode, setMode }}>{children}</ModeCtx.Provider>;
}

export const useMode = () => useContext(ModeCtx);

export function SpeakButton({ text, small }: { text: string; small?: boolean }) {
  const { mode } = useMode();
  const { ui } = useT();
  if (!canSpeak()) return null;
  return (
    <button
      type="button"
      className={'speak' + (small ? ' speak--sm' : '')}
      title={ui('listen')}
      aria-label={`${ui('listen')}: ${text}`}
      onClick={e => { e.stopPropagation(); speak(text, mode); }}
    >
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
        <path d="M16 8.5a4.5 4.5 0 0 1 0 7M18.5 6a8 8 0 0 1 0 12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </svg>
    </button>
  );
}

/** Inline Latin: styled, clickable to hear. */
export function La({ children, speakable = true }: { children: string; speakable?: boolean }) {
  const { mode } = useMode();
  return (
    <span
      className={'la' + (speakable && canSpeak() ? ' la--speak' : '')}
      lang="la"
      onClick={speakable ? () => speak(children, mode) : undefined}
    >
      {children}
    </span>
  );
}
