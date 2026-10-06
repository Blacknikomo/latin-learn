import { useEffect, useMemo, useState } from 'react';
import { useT, type UIKey } from '../i18n';
import { useProgress, type CardBox } from '../progress';
import { qid } from '../sync/quizHistory';
import { Rich } from '../components/Rich';
import { SpeakButton } from '../components/Latin';
import { STRESS_WORDS, wordKey, type StressWord } from '../practice/stressWords';
import { stressOf, type StressReason } from '../practice/stressRule';

/** Same Leitner spacing as the Review page. Box 0..4 → due in 0, 1, 3, 7, 14 days. */
const DAYS = [0, 1, 3, 7, 14];
const BATCH = 20;
const MASTERED_BOX = 3;
const DRILL = 'stress';
const EX_ID = 'p-stress';

function shuffle<X>(arr: X[]): X[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function stats(drills: Record<string, CardBox>, now: number) {
  let seen = 0, mastered = 0, due = 0;
  for (const w of STRESS_WORDS) {
    const s = drills[`${DRILL}:${wordKey(w)}`];
    if (s) { seen++; if (s.box >= MASTERED_BOX) mastered++; }
    if (!s || s.due <= now) due++;
  }
  return { seen, mastered, due, total: STRESS_WORDS.length };
}

/** Missed words first, then unseen, then other due words (lowest box first); top up with the
 *  words that come due soonest. */
function pickBatch(drills: Record<string, CardBox>, now: number): StressWord[] {
  const missed: StressWord[] = [], unseen: StressWord[] = [], due: StressWord[] = [], later: StressWord[] = [];
  for (const w of STRESS_WORDS) {
    const s = drills[`${DRILL}:${wordKey(w)}`];
    if (!s) unseen.push(w);
    else if (s.due > now) later.push(w);
    else if (s.box === 0) missed.push(w);
    else due.push(w);
  }
  const box = (w: StressWord) => drills[`${DRILL}:${wordKey(w)}`]?.box ?? 0;
  const dueAt = (w: StressWord) => drills[`${DRILL}:${wordKey(w)}`]?.due ?? 0;
  const ordered = [
    ...shuffle(missed),
    ...shuffle(unseen),
    ...shuffle(due).sort((a, b) => box(a) - box(b)),
    ...later.sort((a, b) => dueAt(a) - dueAt(b)),
  ];
  return shuffle(ordered.slice(0, BATCH));
}

const fill = (s: string, vars: Record<string, string>) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');

function useExplain() {
  const { ui } = useT();
  return (r: StressReason) => {
    const key: UIKey = ({ two: 'ruleTwo', longVowel: 'ruleLongVowel', diphthong: 'ruleDiphthong', closed: 'ruleClosed', shortVV: 'ruleShortVV', short: 'ruleShort' } as const)[r.kind];
    return fill(ui(key), { p: 'penult' in r ? r.penult : '', a: 'ante' in r ? r.ante : '' });
  };
}

/* ---------- hub ---------- */

export function Practice() {
  const { ui } = useT();
  const { drills } = useProgress();
  const st = stats(drills, Date.now());
  return (
    <div className="practice">
      <h1>{ui('practice')}</h1>
      <p className="muted">{ui('practiceIntro')}</p>
      <ul className="drills">
        <li>
          <a className="drill-card" href="#/practice/stress">
            <span className="eyebrow">{ui('fromSession')} I</span>
            <span className="drill-card__title">{ui('drillStressTitle')}</span>
            <span className="drill-card__desc">{fill(ui('drillStressDesc'), { n: String(st.total) })}</span>
            <span className="drill-card__foot">
              <span className="bar"><span style={{ width: `${Math.round((st.mastered / st.total) * 100)}%` }} /></span>
              <span className="small muted">{st.mastered}/{st.total} {ui('mastered')} · {st.due} {ui('dueNow')}</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

/* ---------- stress drill ---------- */

export function StressDrill() {
  const { ui, tr } = useT();
  const { drills, setDrill, quiz } = useProgress();
  const explain = useExplain();
  const [round, setRound] = useState(0);
  const [picked, setPicked] = useState<Record<number, number>>({});

  const batch = useMemo(() => pickBatch(drills, Date.now()), [round]); // eslint-disable-line react-hooks/exhaustive-deps
  // every batch is its own session in the answer history
  useEffect(() => { quiz.startRun(`__${EX_ID}__${Date.now()}`); }, [round, quiz]);

  const st = stats(drills, Date.now());
  const answered = Object.keys(picked).length;
  const score = batch.reduce((s, w, i) => s + (picked[i] === w.stress ? 1 : 0), 0);
  const finished = answered === batch.length;

  const pick = (wi: number, si: number) => {
    if (picked[wi] !== undefined) return;
    const w = batch[wi], key = wordKey(w), ok = si === w.stress;
    setPicked(p => ({ ...p, [wi]: si }));
    const prev = drills[`${DRILL}:${key}`]?.box ?? 0;
    const box = ok ? Math.min(prev + 1, DAYS.length - 1) : 0;
    setDrill(`${DRILL}:${key}`, { box, due: Date.now() + DAYS[box] * 86400000 });
    quiz.recordAnswer({ id: qid(EX_ID, key), topic: `P/${EX_ID}`, q: w.syll.join('·') }, ok);
  };

  const next = () => { setPicked({}); setRound(r => r + 1); window.scrollTo({ top: 0 }); };

  return (
    <div className="practice">
      <a href="#/practice" className="agenda__back">{ui('backPractice')}</a>
      <h1>{ui('drillStressTitle')}</h1>
      <aside className="callout callout--rule">
        <Rich text={ui('drillStressRule')} />
      </aside>
      <div className="drill__stats small muted">
        {st.mastered}/{st.total} {ui('mastered')} · {st.seen} {ui('seen')} · {st.due} {ui('dueNow')}
      </div>

      <div className="ex">
        <div className="ex__head">
          <h4>{ui('clickStressed')}</h4>
          <span className="ex__badge">{answered}/{batch.length}</span>
        </div>
        <div className="drill">
          {batch.map((w, wi) => {
            const p = picked[wi];
            const r = stressOf(w.syll).reason;
            return (
              <div key={wordKey(w)} className={'drill__word' + (p === undefined ? '' : p === w.stress ? ' is-right' : ' is-wrong')}>
                <div className="stress__syll">
                  {w.syll.map((s, si) => {
                    let cls = 'syll';
                    if (p !== undefined) {
                      if (si === w.stress) cls += ' is-right';
                      else if (si === p) cls += ' is-wrong';
                    }
                    return <button key={si} className={cls} onClick={() => pick(wi, si)} disabled={p !== undefined}>{s}</button>;
                  })}
                  {p !== undefined && <SpeakButton text={w.syll.join('')} small />}
                </div>
                <div className="muted small">{tr(w.gloss)}</div>
                {p !== undefined && <div className="drill__why small"><Rich text={explain(r)} inlineOnly /></div>}
              </div>
            );
          })}
        </div>
        <div className="ex__foot">
          {finished && <div className={'score' + (score === batch.length ? ' score--full' : '')}>{ui('score')}: {score}/{batch.length}</div>}
          <button className={finished ? 'btn' : 'btn btn--ghost'} onClick={next}>{ui(finished ? 'nextBatch' : 'newBatch')}</button>
        </div>
      </div>
    </div>
  );
}
