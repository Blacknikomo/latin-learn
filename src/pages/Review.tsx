import { useMemo, useState } from 'react';
import { LESSONS } from '../lessons';
import { useT } from '../i18n';
import { useProgress } from '../progress';
import { Flashcard } from '../components/Blocks';
import { SpeakButton } from '../components/Latin';
import type { L } from '../types';

interface Card { la: string; back: L; lesson: number }

/** Leitner-style review across all opened lessons. Boxes 0..4 → due in 0, 1, 3, 7, 14 days. */
const DAYS = [0, 1, 3, 7, 14];

export function Review() {
  const { tr, ui } = useT();
  const { cards, lesson, setCard } = useProgress();
  const openedKey = LESSONS.filter(l => lesson(l.id).opened).map(l => l.id).join(',');
  const [round, setRound] = useState(0);

  const pool: Card[] = useMemo(() => {
    const out: Card[] = [];
    for (const l of LESSONS) {
      if (!lesson(l.id).opened) continue;
      for (const s of l.sections) for (const b of s.blocks) {
        if (b.kind === 'flashcards') for (const c of b.cards) out.push({ la: c.la, back: c.back, lesson: l.id });
      }
    }
    return out;
  }, [openedKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const queue = useMemo(() => {
    const now = Date.now();
    const due = pool.filter(c => (cards[c.la]?.due ?? 0) <= now);
    return due.sort(() => Math.random() - 0.5);
    // re-shuffle only per round
  }, [pool, round]); // eslint-disable-line react-hooks/exhaustive-deps

  const [idx, setIdx] = useState(0);
  const card = queue[idx];

  const grade = (ok: boolean) => {
    const prev = cards[card.la]?.box ?? 0;
    const box = ok ? Math.min(prev + 1, DAYS.length - 1) : 0;
    setCard(card.la, { box, due: Date.now() + DAYS[box] * 86400000 });
    setIdx(i => i + 1);
  };

  return (
    <div className="review">
      <h1>{ui('review')}</h1>
      <p className="muted">{ui('reviewIntro')}</p>
      {pool.length === 0 ? (
        <p>{ui('reviewEmpty')}</p>
      ) : card ? (
        <div className="review__stage">
          <div className="small muted">{queue.length - idx} {ui('cardsLeft')} · {ui('session')} {card.lesson}</div>
          <Flashcard key={card.la + idx} la={card.la} back={tr(card.back)} />
          <div className="review__actions">
            <SpeakButton text={card.la} />
            <button className="btn btn--ghost" onClick={() => grade(false)}>{ui('again')}</button>
            <button className="btn" onClick={() => grade(true)}>{ui('knew')}</button>
          </div>
        </div>
      ) : (
        <div className="review__stage">
          <p>{ui('reviewDone')}</p>
          <button className="btn" onClick={() => { setIdx(0); setRound(r => r + 1); }}>{ui('shuffle')}</button>
        </div>
      )}
    </div>
  );
}
