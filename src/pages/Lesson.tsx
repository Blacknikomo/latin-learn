import { useEffect, useMemo, useState } from 'react';
import type { Lesson } from '../types';
import { formatDate, useT } from '../i18n';
import { LessonIdCtx, useProgress } from '../progress';
import { BlockView } from '../components/Blocks';
import { Rich } from '../components/Rich';
import { lessonPercent } from './util';

function useSessionTimer(lessonId: number) {
  const key = `latin-learn:timer:${lessonId}`;
  const [start, setStart] = useState<number | null>(() => {
    try { const v = sessionStorage.getItem(key); return v ? Number(v) : null; } catch { return null; }
  });
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    if (start === null) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [start]);
  const begin = () => { const s = Date.now(); setStart(s); try { sessionStorage.setItem(key, String(s)); } catch { /* ignore */ } };
  const stop = () => { setStart(null); try { sessionStorage.removeItem(key); } catch { /* ignore */ } };
  return { elapsedMin: start === null ? null : (now - start) / 60000, begin, stop };
}

export function LessonPage({ lesson, prev, next }: { lesson: Lesson; prev?: Lesson; next?: Lesson }) {
  const { tr, ui, lang } = useT();
  const { lesson: getP, setFact } = useProgress();
  const p = getP(lesson.id);
  const timer = useSessionTimer(lesson.id);

  useEffect(() => {
    if (!p.opened) setFact(lesson.id, 'open', true);
    window.scrollTo(0, 0);
  }, [lesson.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const bounds = useMemo(() => {
    let acc = 0;
    return lesson.sections.map(s => { const from = acc; acc += s.minutes; return { from, to: acc }; });
  }, [lesson]);
  const current = timer.elapsedMin === null ? -1 : bounds.findIndex(b => timer.elapsedMin! < b.to);
  const pct = lessonPercent(lesson, p);

  const fmt = (m: number) => `${Math.floor(m)}:${String(Math.floor((m % 1) * 60)).padStart(2, '0')}`;

  return (
    <LessonIdCtx.Provider value={lesson.id}>
      <div className="lesson">
        <aside className="agenda">
          <a href="#/" className="agenda__back">{ui('back')}</a>
          <div className="agenda__title eyebrow">{ui('agenda')}</div>
          <ol>
            {lesson.sections.map((s, i) => (
              <li key={i} className={(p.sections[i] ? 'is-done ' : '') + (current === i ? 'is-now' : '')}>
                <a href={`#/lesson/${lesson.id}`} onClick={e => { e.preventDefault(); document.getElementById(`s${i}`)?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <span className="agenda__min">{s.minutes ? `${s.minutes}′` : '+'}</span>
                  <span><Rich text={tr(s.title)} inlineOnly /></span>
                </a>
              </li>
            ))}
          </ol>
          <div className="timer">
            {timer.elapsedMin === null ? (
              <button className="btn" onClick={timer.begin}>{ui('startTimer')}</button>
            ) : (
              <>
                <span className="timer__clock">{fmt(timer.elapsedMin)}</span>
                <button className="btn btn--ghost" onClick={timer.stop}>{ui('stopTimer')}</button>
              </>
            )}
          </div>
          <div className="bar"><span style={{ width: `${pct}%` }} /></div>
          <div className="small muted">{ui('progress')}: {pct}%</div>
        </aside>

        <article className="lesson__main">
          <header className="lesson__head">
            <div className="eyebrow">
              {ui('session')} {lesson.id}/9 · {formatDate(lesson.date, lang)} · 60 {ui('min')}
            </div>
            <h1><Rich text={tr(lesson.title)} inlineOnly /></h1>
            <div className="goal"><strong>{ui('goal')}.</strong> <Rich text={tr(lesson.goal)} inlineOnly /></div>
          </header>

          {lesson.sections.map((s, i) => (
            <section key={i} id={`s${i}`} className={'sec' + (current === i ? ' is-now' : '')}>
              <h2>
                {s.minutes > 0 && <span className="sec__min">{s.minutes}′</span>}
                <Rich text={tr(s.title)} inlineOnly />
                {current === i && <span className="now">{ui('nowOn')}</span>}
              </h2>
              {s.blocks.map((b, bi) => <BlockView key={bi} b={b} />)}
              <label className="sec__done">
                <input type="checkbox" checked={!!p.sections[i]} onChange={e => setFact(lesson.id, `sec:${i}`, e.target.checked)} />
                {ui('markDone')}
              </label>
            </section>
          ))}

          <section className="sec sec--wrap">
            <h2>{ui('materials')}</h2>
            <ul className="links">
              {lesson.materials.map((m, i) => (
                <li key={i}>
                  {m.url ? <a href={m.url} target="_blank" rel="noreferrer">{m.label}</a> : <strong>{m.label}</strong>}
                  <span className="muted"> — <Rich text={tr(m.note)} inlineOnly /></span>
                </li>
              ))}
            </ul>

            <h2>{ui('homework')}</h2>
            <ul className="checks">
              {lesson.homework.map((h, i) => (
                <li key={i}>
                  <label>
                    <input type="checkbox" checked={!!p.checks[`hw${i}`]} onChange={e => setFact(lesson.id, `chk:hw${i}`, e.target.checked)} />
                    <span><Rich text={tr(h)} inlineOnly /></span>
                  </label>
                </li>
              ))}
            </ul>

            <h2>{ui('doneWhen')}</h2>
            <ul className="checks checks--done">
              {lesson.doneWhen.map((h, i) => (
                <li key={i}>
                  <label>
                    <input type="checkbox" checked={!!p.checks[`dw${i}`]} onChange={e => setFact(lesson.id, `chk:dw${i}`, e.target.checked)} />
                    <span><Rich text={tr(h)} inlineOnly /></span>
                  </label>
                </li>
              ))}
            </ul>
          </section>

          <nav className="pager">
            {prev ? <a className="btn btn--ghost" href={`#/lesson/${prev.id}`}>{ui('prev')}</a> : <span />}
            {next ? <a className="btn" href={`#/lesson/${next.id}`}>{ui('next')}</a> : <span />}
          </nav>
        </article>
      </div>
    </LessonIdCtx.Provider>
  );
}
