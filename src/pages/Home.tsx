import { LESSONS } from '../lessons';
import { formatDate, useT } from '../i18n';
import { useProgress } from '../progress';
import { Rich } from '../components/Rich';
import { lessonPercent, romanDate, todayISO, toRoman } from './util';

export function Home() {
  const { tr, ui, lang } = useT();
  const { lesson, exportData, resetLocal, resetEverywhere, status } = useProgress();
  const today = todayISO();
  const nextId = LESSONS.find(l => l.date >= today)?.id;

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(exportData(), null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `latin-learn-progress-${today}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const statusOf = (l: (typeof LESSONS)[number], pct: number) =>
    pct === 100 ? 'completed' : l.date === today ? 'today' : l.date < today ? 'past' : 'upcoming';
  const featured = LESSONS.find(l => l.id === nextId) ?? LESSONS[LESSONS.length - 1];
  const featuredPct = lessonPercent(featured, lesson(featured.id));

  return (
    <div className="home">
      <header className="hero">
        <div className="hero__intro">
          <h1>{ui('appTitle')}</h1>
          <p>{ui('tagline')}</p>
        </div>
        <a className="next" href={`#/lesson/${featured.id}`}>
          <span className="eyebrow">{ui(nextId ? 'nextUp' : 'lastSession')} · {formatDate(featured.date, lang)}</span>
          <span className="next__row">
            <span className="next__num" aria-hidden="true">{toRoman(featured.id)}</span>
            <span className="next__title"><Rich text={tr(featured.title)} inlineOnly /></span>
          </span>
          <span className="next__foot">
            <span className="bar"><span style={{ width: `${featuredPct}%` }} /></span>
            <span className="btn">{ui('openSession')} →</span>
          </span>
        </a>
      </header>

      <ol className="fasti">
        {LESSONS.map(l => {
          const pct = lessonPercent(l, lesson(l.id));
          const status = statusOf(l, pct);
          return (
            <li key={l.id} className={`fasti__item is-${status}` + (l.id === nextId ? ' is-next' : '')}>
              <a href={`#/lesson/${l.id}`}>
                <span className="fasti__num" aria-label={`${ui('session')} ${l.id}`}>{toRoman(l.id)}</span>
                <span className="fasti__date">
                  <span>{formatDate(l.date, lang)}</span>
                  <span className="fasti__roman" lang="la" title={ui('romanDate')}>{romanDate(l.date)}</span>
                </span>
                <span className="fasti__body">
                  <span className="fasti__title"><Rich text={tr(l.title)} inlineOnly /></span>
                  <span className="fasti__goal"><Rich text={tr(l.goal)} inlineOnly /></span>
                </span>
                <span className="fasti__state">
                  <span className={`pill pill--${status}`}>{ui(status as 'today')}</span>
                  {pct > 0 && pct < 100 && <span className="fasti__pct">{pct}%</span>}
                </span>
              </a>
            </li>
          );
        })}
      </ol>

      <footer className="home__foot">
        <button className="btn btn--ghost" onClick={exportJson}>{ui('exportData')}</button>
        <button className="btn btn--ghost" onClick={() => { if (confirm(ui('confirmReset'))) resetLocal(); }}>{ui('resetAll')}</button>
        {status.state !== 'local' && status.state !== 'signin' && (
          <button
            className="btn btn--ghost"
            onClick={async () => {
              if (!confirm(ui('confirmResetAll'))) return;
              const r = await resetEverywhere().catch(e => ({ ok: false, reason: String(e?.message ?? e) }));
              if (!r.ok) alert(`${ui('resetFailed')}: ${r.reason ?? ''}`);
            }}
          >
            {ui('resetEverywhere')}
          </button>
        )}
      </footer>
    </div>
  );
}
