import { useMemo, useState } from 'react';
import type { Block, Tag } from '../types';
import { useT } from '../i18n';
import { useLessonState } from '../progress';
import { Rich } from './Rich';
import { La, SpeakButton, useMode } from './Latin';
import { canSpeak, guide, speak } from '../speech';

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

function shuffle<X>(arr: X[]): X[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Score({ score, total }: { score: number; total: number }) {
  const { ui } = useT();
  const pct = total ? Math.round((score / total) * 100) : 0;
  return (
    <div className={'score' + (pct === 100 ? ' score--full' : '')}>
      {ui('score')}: {score}/{total}
    </div>
  );
}

function ExHeader({ title, id }: { title?: string; id?: string }) {
  const { p } = useLessonState();
  const r = id ? p.exercises[id] : undefined;
  if (!title && !r) return null;
  return (
    <div className="ex__head">
      {title && <h4><Rich text={title} inlineOnly /></h4>}
      {r && <span className="ex__badge">{r.score}/{r.total}</span>}
    </div>
  );
}

/* ---------- static blocks ---------- */

function TextBlock({ b }: { b: Extract<Block, { kind: 'text' }> }) {
  const { tr } = useT();
  return <div className="prose"><Rich text={tr(b.body)} /></div>;
}

function CalloutBlock({ b }: { b: Extract<Block, { kind: 'callout' }> }) {
  const { tr } = useT();
  return (
    <aside className={`callout callout--${b.tone}`}>
      {b.title && <div className="callout__title"><Rich text={tr(b.title)} inlineOnly /></div>}
      <div className="prose"><Rich text={tr(b.body)} /></div>
    </aside>
  );
}

function TableBlock({ b }: { b: Extract<Block, { kind: 'table' }> }) {
  const { tr } = useT();
  const latin = new Set(b.latinCols ?? []);
  return (
    <div className="table-wrap">
      <table>
        {b.caption && <caption><Rich text={tr(b.caption)} inlineOnly /></caption>}
        <thead><tr>{b.head.map((h, i) => <th key={i}><Rich text={tr(h)} inlineOnly /></th>)}</tr></thead>
        <tbody>
          {b.rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((c, ci) => (
                <td key={ci}>
                  {latin.has(ci) && typeof c === 'string' && c ? <La>{c}</La> : <Rich text={tr(c)} inlineOnly />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LinksBlock({ b }: { b: Extract<Block, { kind: 'links' }> }) {
  const { tr } = useT();
  return (
    <div className="ex">
      {b.title && <ExHeader title={tr(b.title)} />}
      <ul className="links">
        {b.items.map(it => (
          <li key={it.url}>
            <a href={it.url} target="_blank" rel="noreferrer">{it.label}</a>
            <span className="muted"> — <Rich text={tr(it.note)} inlineOnly /></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- phrases ---------- */

function PhrasesBlock({ b }: { b: Extract<Block, { kind: 'phrases' }> }) {
  const { tr, ui } = useT();
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const all = b.items.every((_, i) => open[i]);
  return (
    <div className="ex">
      <div className="ex__head">
        {b.title && <h4><Rich text={tr(b.title)} inlineOnly /></h4>}
        <button className="btn btn--ghost" onClick={() => setOpen(all ? {} : Object.fromEntries(b.items.map((_, i) => [i, true])))}>
          {all ? ui('hideAll') : ui('revealAll')}
        </button>
      </div>
      <ul className="phrases">
        {b.items.map((it, i) => (
          <li key={i} className={open[i] ? 'is-open' : ''} onClick={() => setOpen(o => ({ ...o, [i]: !o[i] }))}>
            <div className="phrases__la"><span className="la">{it.la}</span><SpeakButton text={it.la} small /></div>
            <div className="phrases__tr">
              {open[i] ? (
                <>
                  <Rich text={tr(it.lit)} inlineOnly />
                  {it.note && <div className="muted small"><Rich text={tr(it.note)} inlineOnly /></div>}
                </>
              ) : <span className="muted">{ui('reveal')}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- flashcards ---------- */

export function Flashcard({ la, back }: { la: string; back: string }) {
  const [flipped, setFlipped] = useState(false);
  const { ui } = useT();
  return (
    <button type="button" className={'card' + (flipped ? ' is-flipped' : '')} onClick={() => setFlipped(f => !f)}>
      <span className="card__inner">
        <span className="card__face card__front">
          <span className="la la--big">{la}</span>
          <span className="muted small">{ui('flip')}</span>
        </span>
        <span className="card__face card__back"><Rich text={back} inlineOnly /></span>
      </span>
    </button>
  );
}

function FlashcardsBlock({ b }: { b: Extract<Block, { kind: 'flashcards' }> }) {
  const { tr } = useT();
  return (
    <div className="ex">
      <ExHeader title={b.title ? tr(b.title) : undefined} />
      <div className="cards">
        {b.cards.map(c => <Flashcard key={c.la} la={c.la} back={tr(c.back)} />)}
      </div>
    </div>
  );
}

/* ---------- quiz ---------- */

function QuizBlock({ b }: { b: Extract<Block, { kind: 'quiz' }> }) {
  const { tr, ui } = useT();
  const { setResult, answer, newRun } = useLessonState();
  const [picked, setPicked] = useState<Record<number, number>>({});
  const answered = Object.keys(picked).length;
  const score = b.questions.reduce((s, q, i) => s + (picked[i] === q.answer ? 1 : 0), 0);

  const pick = (qi: number, oi: number) => {
    if (picked[qi] !== undefined) return;
    const next = { ...picked, [qi]: oi };
    setPicked(next);
    const q = b.questions[qi];
    answer(b.id, qi, `${q.prompt.en}${q.la ? ' ' + q.la : ''}`, oi === q.answer);
    if (Object.keys(next).length === b.questions.length) {
      const s = b.questions.reduce((acc, q, i) => acc + (next[i] === q.answer ? 1 : 0), 0);
      setResult(b.id, { score: s, total: b.questions.length });
    }
  };

  return (
    <div className="ex">
      <ExHeader title={b.title ? tr(b.title) : undefined} id={b.id} />
      <ol className="quiz">
        {b.questions.map((q, qi) => {
          const p = picked[qi];
          return (
            <li key={qi}>
              <div className="quiz__prompt">
                <Rich text={tr(q.prompt)} inlineOnly />
                {q.la && <div className="quiz__la"><span className="la la--big">{q.la}</span><SpeakButton text={q.la} small /></div>}
              </div>
              <div className="opts">
                {q.options.map((o, oi) => {
                  let cls = 'opt';
                  if (p !== undefined) {
                    if (oi === q.answer) cls += ' is-right';
                    else if (oi === p) cls += ' is-wrong';
                    else cls += ' is-dim';
                  }
                  return (
                    <button key={oi} className={cls} onClick={() => pick(qi, oi)} disabled={p !== undefined}>
                      <Rich text={tr(o)} inlineOnly />
                    </button>
                  );
                })}
              </div>
              {p !== undefined && (
                <div className={'feedback ' + (p === q.answer ? 'feedback--ok' : 'feedback--bad')}>
                  <strong>{p === q.answer ? ui('correct') : ui('wrong')}.</strong>{' '}
                  {q.explain && <Rich text={tr(q.explain)} inlineOnly />}
                </div>
              )}
            </li>
          );
        })}
      </ol>
      <div className="ex__foot">
        {answered === b.questions.length && <Score score={score} total={b.questions.length} />}
        <button className="btn btn--ghost" onClick={() => { setPicked({}); newRun(b.id); }}>{ui('reset')}</button>
      </div>
    </div>
  );
}

/* ---------- match ---------- */

function MatchBlock({ b }: { b: Extract<Block, { kind: 'match' }> }) {
  const { tr, ui } = useT();
  const { setResult, answer, newRun } = useLessonState();
  const [seed, setSeed] = useState(0);
  const right = useMemo(() => shuffle(b.pairs.map((p, i) => ({ i, text: tr(p.right) }))), [b.pairs, seed, tr]);
  const [sel, setSel] = useState<number | null>(null);
  const [done, setDone] = useState<Record<number, boolean>>({});
  const [miss, setMiss] = useState<Record<number, boolean>>({});
  const [flash, setFlash] = useState<number | null>(null);

  const tryPair = (ri: number) => {
    if (sel === null || done[ri]) return;
    if (sel === ri) {
      answer(b.id, ri, b.pairs[ri].left, !miss[ri]);
      const nd = { ...done, [ri]: true };
      setDone(nd);
      setSel(null);
      if (Object.keys(nd).length === b.pairs.length) {
        const s = b.pairs.length - Object.keys(miss).length;
        setResult(b.id, { score: s, total: b.pairs.length });
      }
    } else {
      setMiss(m => ({ ...m, [sel]: true }));
      setFlash(ri);
      setTimeout(() => setFlash(null), 450);
    }
  };

  const finished = Object.keys(done).length === b.pairs.length;
  return (
    <div className="ex">
      <ExHeader title={tr(b.prompt)} id={b.id} />
      <div className="match">
        <div className="match__col">
          {b.pairs.map((p, i) => (
            <button key={i} className={'opt' + (done[i] ? ' is-right' : sel === i ? ' is-sel' : '')} disabled={done[i]} onClick={() => setSel(i)}>
              <span className="la">{p.left}</span>
            </button>
          ))}
        </div>
        <div className="match__col">
          {right.map(r => (
            <button key={r.i} className={'opt' + (done[r.i] ? ' is-right' : flash === r.i ? ' is-wrong' : '')} disabled={done[r.i]} onClick={() => tryPair(r.i)}>
              <Rich text={r.text} inlineOnly />
            </button>
          ))}
        </div>
      </div>
      <div className="ex__foot">
        {finished && <Score score={b.pairs.length - Object.keys(miss).length} total={b.pairs.length} />}
        <button className="btn btn--ghost" onClick={() => { setDone({}); setMiss({}); setSel(null); setSeed(s => s + 1); newRun(b.id); }}>{ui('reset')}</button>
      </div>
    </div>
  );
}

/* ---------- stress ---------- */

function StressBlock({ b }: { b: Extract<Block, { kind: 'stress' }> }) {
  const { tr, ui } = useT();
  const { setResult, answer, newRun } = useLessonState();
  const [picked, setPicked] = useState<Record<number, number>>({});
  const score = b.words.reduce((s, w, i) => s + (picked[i] === w.stress ? 1 : 0), 0);
  const pick = (wi: number, si: number) => {
    if (picked[wi] !== undefined) return;
    const next = { ...picked, [wi]: si };
    setPicked(next);
    answer(b.id, wi, b.words[wi].syll.join(''), si === b.words[wi].stress);
    if (Object.keys(next).length === b.words.length) {
      setResult(b.id, { score: b.words.reduce((s, w, i) => s + (next[i] === w.stress ? 1 : 0), 0), total: b.words.length });
    }
  };
  return (
    <div className="ex">
      <ExHeader title={b.prompt ? tr(b.prompt) : undefined} id={b.id} />
      <div className="stress">
        {b.words.map((w, wi) => {
          const p = picked[wi];
          return (
            <div key={wi} className="stress__word">
              <div className="stress__syll">
                {w.syll.map((s, si) => {
                  let cls = 'syll';
                  if (p !== undefined) {
                    if (si === w.stress) cls += ' is-right';
                    else if (si === p) cls += ' is-wrong';
                  }
                  return <button key={si} className={cls} onClick={() => pick(wi, si)}>{s}</button>;
                })}
                <SpeakButton text={w.syll.join('')} small />
              </div>
              {w.gloss && <div className="muted small"><Rich text={tr(w.gloss)} inlineOnly /></div>}
            </div>
          );
        })}
      </div>
      <div className="ex__foot">
        {Object.keys(picked).length === b.words.length && <Score score={score} total={b.words.length} />}
        <button className="btn btn--ghost" onClick={() => { setPicked({}); newRun(b.id); }}>{ui('reset')}</button>
      </div>
    </div>
  );
}

/* ---------- fill endings ---------- */

function FillBlock({ b }: { b: Extract<Block, { kind: 'fill' }> }) {
  const { tr, ui } = useT();
  const { setResult, answer, newRun } = useLessonState();
  const [vals, setVals] = useState<string[]>(() => b.rows.map(() => ''));
  const [checked, setChecked] = useState(false);
  const ok = (i: number) => norm(vals[i]) === norm(b.rows[i].ending);
  const check = () => {
    if (checked) return; // already recorded this attempt
    setChecked(true);
    b.rows.forEach((r, i) => answer(b.id, i, r.stem + r.ending, ok(i)));
    setResult(b.id, { score: b.rows.filter((_, i) => ok(i)).length, total: b.rows.length });
  };
  return (
    <div className="ex">
      <ExHeader title={tr(b.prompt)} id={b.id} />
      {b.title && <div className="fill__title la">{b.title}</div>}
      <div className="fill">
        {b.rows.map((r, i) => (
          <label key={i} className={'fill__row' + (checked ? (ok(i) ? ' is-right' : ' is-wrong') : '')}>
            <span className="fill__label"><Rich text={tr(r.label)} inlineOnly /></span>
            <span className="fill__word">
              <span className="la">{r.stem}</span>
              <input
                value={vals[i]}
                onChange={e => { const v = vals.slice(); v[i] = e.target.value; setVals(v); setChecked(false); }}
                onKeyDown={e => { if (e.key === 'Enter') check(); }}
                autoCapitalize="off" autoCorrect="off" spellCheck={false}
                aria-label={`${tr(r.label)}: ${r.stem}…`}
              />
              {checked && !ok(i) && <span className="fill__answer la">{r.stem}{r.ending}</span>}
            </span>
          </label>
        ))}
      </div>
      <div className="ex__foot">
        {checked && <Score score={b.rows.filter((_, i) => ok(i)).length} total={b.rows.length} />}
        <button className="btn" onClick={check}>{ui('check')}</button>
        <button className="btn btn--ghost" onClick={() => { setVals(b.rows.map(() => '')); setChecked(false); newRun(b.id); }}>{ui('reset')}</button>
      </div>
    </div>
  );
}

/* ---------- parse ---------- */

function ParseBlock({ b }: { b: Extract<Block, { kind: 'parse' }> }) {
  const { tr, ui, tag } = useT();
  const { setResult, answer, newRun } = useLessonState();
  const [vals, setVals] = useState<Record<string, Tag | ''>>({});
  const [checked, setChecked] = useState(false);
  const [showTr, setShowTr] = useState<Record<number, boolean>>({});
  const all = b.sentences.flatMap((s, si) => s.words.map((w, wi) => ({ k: `${si}-${wi}`, w })));
  const score = all.filter(x => vals[x.k] === x.w.answer).length;
  const check = () => {
    if (checked) return; // already recorded this attempt
    setChecked(true);
    all.forEach(x => answer(b.id, x.k, x.w.w, vals[x.k] === x.w.answer));
    setResult(b.id, { score, total: all.length });
  };

  return (
    <div className="ex">
      <ExHeader title={tr(b.prompt)} id={b.id} />
      {b.sentences.map((s, si) => (
        <div key={si} className="parse">
          <div className="parse__words">
            {s.words.map((w, wi) => {
              const k = `${si}-${wi}`;
              const state = checked ? (vals[k] === w.answer ? ' is-right' : ' is-wrong') : '';
              return (
                <div key={wi} className={'parse__w' + state}>
                  <La>{w.w}</La>
                  <select value={vals[k] ?? ''} onChange={e => { setVals(v => ({ ...v, [k]: e.target.value as Tag })); setChecked(false); }}>
                    <option value="">—</option>
                    {w.options.map(o => <option key={o} value={o}>{tag(o)}</option>)}
                  </select>
                  {checked && vals[k] !== w.answer && <div className="small">→ {tag(w.answer)}</div>}
                  {checked && w.explain && <div className="muted small"><Rich text={tr(w.explain)} inlineOnly /></div>}
                </div>
              );
            })}
          </div>
          <button className="btn btn--link" onClick={() => setShowTr(t => ({ ...t, [si]: !t[si] }))}>{ui('showTranslation')}</button>
          {showTr[si] && <div className="parse__tr"><Rich text={tr(s.translation)} inlineOnly /></div>}
        </div>
      ))}
      <div className="ex__foot">
        {checked && <Score score={score} total={all.length} />}
        <button className="btn" onClick={check}>{ui('check')}</button>
        <button className="btn btn--ghost" onClick={() => { setVals({}); setChecked(false); newRun(b.id); }}>{ui('reset')}</button>
      </div>
    </div>
  );
}

/* ---------- interlinear ---------- */

function InterlinearBlock({ b }: { b: Extract<Block, { kind: 'interlinear' }> }) {
  const { tr, ui } = useT();
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [gloss, setGloss] = useState<string | null>(null);
  const all = b.lines.every((_, i) => open[i]);
  return (
    <div className="ex">
      <div className="ex__head">
        {b.title && <h4><Rich text={tr(b.title)} inlineOnly /></h4>}
        <button className="btn btn--ghost" onClick={() => setOpen(all ? {} : Object.fromEntries(b.lines.map((_, i) => [i, true])))}>
          {all ? ui('hideAll') : ui('revealAll')}
        </button>
      </div>
      <ol className="inter">
        {b.lines.map((l, li) => (
          <li key={li}>
            <div className="inter__la">
              {l.words ? (
                l.words.map((w, wi) => {
                  const k = `${li}-${wi}`;
                  return (
                    <span key={wi} className={'inter__w' + (gloss === k ? ' is-on' : '')} onClick={() => setGloss(g => (g === k ? null : k))}>
                      <span className="la">{w.w}</span>
                      {gloss === k && <span className="inter__g"><Rich text={tr(w.g)} inlineOnly /></span>}
                    </span>
                  );
                })
              ) : <span className="la">{l.la}</span>}
              <SpeakButton text={l.la} small />
            </div>
            <button className="btn btn--link" onClick={() => setOpen(o => ({ ...o, [li]: !o[li] }))}>{open[li] ? '−' : '+'} {ui('showTranslation')}</button>
            {open[li] && (
              <div className="inter__tr">
                <Rich text={tr(l.tr)} inlineOnly />
                {l.note && <div className="muted small"><Rich text={tr(l.note)} inlineOnly /></div>}
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- pronunciation converter ---------- */

function PronounceBlock({ b }: { b: Extract<Block, { kind: 'pronounce' }> }) {
  const { ui } = useT();
  const { setMode } = useMode();
  const [text, setText] = useState(b.samples[0] ?? '');
  return (
    <div className="ex pron">
      <label className="pron__input">
        <span className="small muted">{ui('typeLatin')}</span>
        <input value={text} onChange={e => setText(e.target.value)} lang="la" spellCheck={false} />
      </label>
      <div className="pron__samples">
        {b.samples.map(s => <button key={s} className="chip" onClick={() => setText(s)}>{s}</button>)}
      </div>
      <div className="pron__out">
        {(['classical', 'ecclesiastical'] as const).map(m => (
          <div key={m} className="pron__col">
            <div className="small muted">{ui(m)}</div>
            <div className="pron__guide">{guide(text, m)}</div>
            {canSpeak() && (
              <button className="btn btn--ghost" onClick={() => { setMode(m); speak(text, m); }}>▶ {ui('listen')}</button>
            )}
          </div>
        ))}
      </div>
      <p className="small muted">{ui('ttsNote')}</p>
    </div>
  );
}

/* ---------- word builder ---------- */

function BuilderBlock({ b }: { b: Extract<Block, { kind: 'builder' }> }) {
  const { tr, ui } = useT();
  const { setResult, p } = useLessonState();
  const [pre, setPre] = useState<string | null>(null);
  const [root, setRoot] = useState<string | null>(null);
  const [found, setFound] = useState<string[]>(() => (p.values[b.id] as string[]) ?? []);
  const [msg, setMsg] = useState<string>('');
  const { setValue } = useLessonState();

  const build = () => {
    const t = b.targets.find(x => x.prefix === pre && x.root === root);
    if (!t) { setMsg(ui('noMatch')); return; }
    setMsg('');
    if (!found.includes(t.word)) {
      const nf = [...found, t.word];
      setFound(nf);
      setValue(b.id, nf);
      setResult(b.id, { score: nf.length, total: b.targets.length });
    }
  };
  return (
    <div className="ex">
      <ExHeader title={tr(b.prompt)} id={b.id} />
      <div className="builder">
        <div>
          <div className="small muted">{ui('prefix')}</div>
          <div className="chips">
            {b.prefixes.map(x => (
              <button key={x.p} className={'chip' + (pre === x.p ? ' is-sel' : '')} onClick={() => setPre(x.p)} title={tr(x.m)}>
                <span className="la">{x.p}-</span> <span className="muted small">{tr(x.m)}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="small muted">{ui('root')}</div>
          <div className="chips">
            {b.roots.map(x => (
              <button key={x.r} className={'chip' + (root === x.r ? ' is-sel' : '')} onClick={() => setRoot(x.r)} title={tr(x.m)}>
                <span className="la">{x.r}</span> <span className="muted small">{tr(x.m)}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="builder__go">
          <button className="btn" disabled={!pre || !root} onClick={build}>{ui('build')}</button>
          {msg && <span className="muted small">{msg}</span>}
        </div>
      </div>
      <div className="small muted">{ui('found')}: {found.length}/{b.targets.length}</div>
      <ul className="builder__found">
        {b.targets.filter(t => found.includes(t.word)).map(t => (
          <li key={t.word}><strong>{t.word}</strong> = <span className="la">{t.prefix}-</span> + <span className="la">{t.root}</span> — <Rich text={tr(t.meaning)} inlineOnly /></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- translate (self-graded) ---------- */

function TranslateBlock({ b }: { b: Extract<Block, { kind: 'translate' }> }) {
  const { tr, ui } = useT();
  const { p, setNote, setResult, setValue } = useLessonState();
  const grades = (p.values[b.id] as Record<number, number>) ?? {};
  const [shown, setShown] = useState<Record<number, boolean>>({});
  const grade = (i: number, g: number) => {
    const ng = { ...grades, [i]: g };
    setValue(b.id, ng);
    const vals = Object.values(ng);
    if (vals.length === b.items.length) setResult(b.id, { score: vals.reduce((a, c) => a + c, 0) / 2, total: b.items.length });
  };
  return (
    <div className="ex">
      <ExHeader title={tr(b.prompt)} id={b.id} />
      <ol className="translate">
        {b.items.map((it, i) => (
          <li key={i}>
            <div className="translate__la"><span className="la la--big">{it.la}</span><SpeakButton text={it.la} small /></div>
            <textarea
              rows={2}
              placeholder={ui('yourTranslation')}
              value={p.notes[`${b.id}-${i}`] ?? ''}
              onChange={e => setNote(`${b.id}-${i}`, e.target.value)}
            />
            {!shown[i] ? (
              <button className="btn btn--ghost" onClick={() => setShown(s => ({ ...s, [i]: true }))}>{ui('modelAnswer')}</button>
            ) : (
              <div className="translate__ans">
                <div><span className="small muted">{ui('modelAnswer')}:</span> <Rich text={tr(it.answer)} inlineOnly /></div>
                <div className="grade">
                  {[[2, 'iGotIt'], [1, 'partly'], [0, 'missed']].map(([g, k]) => (
                    <button key={k} className={'chip' + (grades[i] === g ? ' is-sel' : '')} onClick={() => grade(i, g as number)}>
                      {ui(k as 'iGotIt')}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- notepad, rating, choice ---------- */

function NotepadBlock({ b }: { b: Extract<Block, { kind: 'notepad' }> }) {
  const { tr, ui } = useT();
  const { p, setNote } = useLessonState();
  return (
    <div className="ex">
      <ExHeader title={tr(b.prompt)} />
      <textarea
        className="notepad"
        rows={6}
        placeholder={b.placeholder ? tr(b.placeholder) : ''}
        value={p.notes[b.id] ?? ''}
        onChange={e => setNote(b.id, e.target.value)}
      />
      <div className="small muted">{ui('saved')}</div>
    </div>
  );
}

function RatingBlock({ b }: { b: Extract<Block, { kind: 'rating' }> }) {
  const { tr } = useT();
  const { p, setValue } = useLessonState();
  const vals = (p.values[b.id] as Record<number, number>) ?? {};
  return (
    <div className="ex">
      <ExHeader title={tr(b.prompt)} />
      <ol className="rating">
        {b.items.map((it, i) => (
          <li key={i}>
            <span><Rich text={tr(it)} inlineOnly /></span>
            <span className="rating__dots">
              {[1, 2, 3, 4, 5].map(n => (
                <button key={n} className={'dot' + ((vals[i] ?? 0) >= n ? ' is-on' : '')} onClick={() => setValue(b.id, { ...vals, [i]: n })} aria-label={`${n}/5`}>{n}</button>
              ))}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ChoiceBlock({ b }: { b: Extract<Block, { kind: 'choice' }> }) {
  const { tr } = useT();
  const { p, setValue } = useLessonState();
  const v = p.values[b.id] as number | undefined;
  return (
    <div className="ex">
      <ExHeader title={tr(b.prompt)} />
      <div className="choice">
        {b.options.map((o, i) => (
          <button key={i} className={'choice__opt' + (v === i ? ' is-sel' : '')} onClick={() => setValue(b.id, i)}>
            <strong><Rich text={tr(o.title)} inlineOnly /></strong>
            <span className="small"><Rich text={tr(o.body)} inlineOnly /></span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- dispatcher ---------- */

export function BlockView({ b }: { b: Block }) {
  switch (b.kind) {
    case 'text': return <TextBlock b={b} />;
    case 'callout': return <CalloutBlock b={b} />;
    case 'table': return <TableBlock b={b} />;
    case 'phrases': return <PhrasesBlock b={b} />;
    case 'flashcards': return <FlashcardsBlock b={b} />;
    case 'quiz': return <QuizBlock b={b} />;
    case 'match': return <MatchBlock b={b} />;
    case 'stress': return <StressBlock b={b} />;
    case 'fill': return <FillBlock b={b} />;
    case 'parse': return <ParseBlock b={b} />;
    case 'interlinear': return <InterlinearBlock b={b} />;
    case 'pronounce': return <PronounceBlock b={b} />;
    case 'builder': return <BuilderBlock b={b} />;
    case 'translate': return <TranslateBlock b={b} />;
    case 'notepad': return <NotepadBlock b={b} />;
    case 'rating': return <RatingBlock b={b} />;
    case 'choice': return <ChoiceBlock b={b} />;
    case 'links': return <LinksBlock b={b} />;
  }
}
