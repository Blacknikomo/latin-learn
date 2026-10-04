import type { ReactNode } from 'react';
import { La } from './Latin';

/** Inline markup: **bold**, *italic*, [[Latin]]. */
function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|\[\[[^\]]+\]\])/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    const k = `${keyBase}-${i++}`;
    if (tok.startsWith('**')) out.push(<strong key={k}>{inline(tok.slice(2, -2), k)}</strong>);
    else if (tok.startsWith('[[')) out.push(<La key={k}>{tok.slice(2, -2)}</La>);
    else out.push(<em key={k}>{inline(tok.slice(1, -1), k)}</em>);
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** Block markup: blank line = paragraph, lines starting with "- " = list. Single newline = line break. */
export function Rich({ text, inlineOnly }: { text: string; inlineOnly?: boolean }) {
  if (inlineOnly) return <>{inline(text, 'r')}</>;
  const paras = text.trim().split(/\n\s*\n/);
  return (
    <>
      {paras.map((p, pi) => {
        const lines = p.split('\n');
        if (lines.every(l => l.trim().startsWith('- '))) {
          return (
            <ul key={pi}>
              {lines.map((l, li) => <li key={li}>{inline(l.trim().slice(2), `${pi}-${li}`)}</li>)}
            </ul>
          );
        }
        return (
          <p key={pi}>
            {lines.map((l, li) => (
              <span key={li}>
                {li > 0 && <br />}
                {inline(l, `${pi}-${li}`)}
              </span>
            ))}
          </p>
        );
      })}
    </>
  );
}
