/**
 * QuizHistory — progress model for every scored item (quiz question, stress word, match pair,
 * fill row, parse word). Port of CTO-ed's `quiz-history.js`; same shape, so the backend's
 * "quiz" kind assembles it as-is in GET /state.
 *
 *   topics:   { [topic]: {correct, total} }      all-time accuracy; topic = "L<n>/<exerciseId>"
 *   sessions: [ {date, correct, total, topics[], app?} ]   newest first, capped at 50; app = exercise id
 *   missed:   { [qid]: {id, topic, level, question, misses, lastMissed, recoveredAt?} }
 *   qstats:   { [qid]: {c, t, streak, last} }    per-item mastery — drives weighted selection
 *   levels:   {}                                  unused here, kept for shape compatibility
 *
 * qid = "<exerciseId>:<itemIndex>" — stable as long as items are not reordered within an
 * exercise (append new items at the end). Ids over 40 chars (backend limit) are hashed.
 */
import { openProgressStore, type ProgressStore } from './progressStore';
import type { SyncTransport } from './transport';

const SESSIONS_KEPT = 50;

export interface QStat { c: number; t: number; streak: number; last: number }
export interface Session { date: number; correct: number; total: number; topics: string[]; app?: string }
export interface Missed { id: string; topic: string; level: string; question: string; misses: number; lastMissed: number; recoveredAt?: number }
export interface QuizData {
  topics: Record<string, { correct: number; total: number }>;
  sessions: Session[];
  levels: Record<string, { correct: number; total: number }>;
  missed: Record<string, Missed>;
  qstats: Record<string, QStat>;
}
export interface Item { id: string; topic: string; q: string }

export const quizDefaults = (): QuizData => ({ topics: {}, sessions: [], levels: {}, missed: {}, qstats: {} });

/** djb2 → base36 — same recipe as CTO-ed's QuizHistory.stableId. */
export function stableId(text: string) {
  const s = String(text || '').slice(0, 80);
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0;
  return 'q' + h.toString(36);
}
export const qid = (exerciseId: string, index: number | string) => {
  const raw = `${exerciseId}:${index}`;
  return raw.length <= 40 ? raw : stableId(raw);
};

/** Per-question LWW on `last`: a local answer that hasn't flushed yet survives a pull. */
function mergeQstats(localQ: Record<string, QStat>, remoteQ: Record<string, QStat>) {
  const norm = (e?: Partial<QStat>): QStat => ({ c: e?.c ?? 0, t: e?.t ?? 0, streak: e?.streak ?? 0, last: e?.last ?? 0 });
  const out: Record<string, QStat> = {};
  for (const [id, e] of Object.entries(remoteQ ?? {})) out[id] = norm(e);
  for (const [id, e] of Object.entries(localQ ?? {})) { const l = norm(e); if (!out[id] || l.last > out[id].last) out[id] = l; }
  return out;
}

export interface QuizHistory {
  data: QuizData;
  progress: ProgressStore<QuizData>;
  startRun(app: string): void;
  recordAnswer(item: Item, correct: boolean): QStat;
  itemState(id: string): 'untracked' | 'weak' | 'in-progress' | 'mastered';
  weightedOrder<T extends { id: string }>(pool: T[]): T[];
}

export function openQuizHistory(o: { key: string; transport: SyncTransport<QuizData> | null; onChange?: () => void; masteryStreak?: number }): QuizHistory {
  const masteryStreak = o.masteryStreak ?? 2;
  const progress = openProgressStore<QuizData>({
    key: o.key,
    defaults: quizDefaults,
    transport: o.transport,
    hasHistory: d => Object.keys(d.topics).length > 0 || d.sessions.length > 0,
    mergeRemote: (local, remote) => {
      const next = Object.assign(quizDefaults(), remote);
      next.qstats = mergeQstats(local.qstats, remote.qstats);
      return next;
    },
    onChange: o.onChange,
  });
  const data = progress.data;

  let run: { app: string; rec?: Session } | null = null;
  const startRun = (app: string) => { run = { app }; };
  function sessionRecord(app: string): Session {
    if (!run || run.app !== app) run = { app };
    if (!run.rec) run.rec = { date: Date.now(), correct: 0, total: 0, topics: [], app };
    if (!data.sessions.includes(run.rec)) {   // first answer, or a pull replaced the list mid-run
      data.sessions.unshift(run.rec);
      data.sessions = data.sessions.slice(0, SESSIONS_KEPT);
    }
    return run.rec;
  }

  function recordAnswer(item: Item, correct: boolean): QStat {
    const t = (data.topics[item.topic] ??= { correct: 0, total: 0 });
    t.total++; if (correct) t.correct++;

    if (!correct) {
      const prev = data.missed[item.id];
      data.missed[item.id] = { id: item.id, topic: item.topic, level: 'Unknown', question: item.q.slice(0, 300), misses: (prev?.misses ?? 0) + 1, lastMissed: Date.now() };
    } else if (data.missed[item.id]) data.missed[item.id].recoveredAt = Date.now();

    const qs = (data.qstats[item.id] ??= { c: 0, t: 0, streak: 0, last: 0 });
    qs.t++;
    if (correct) { qs.c++; qs.streak++; } else qs.streak = 0;
    qs.last = Date.now();

    const app = item.topic.split('/')[1] ?? item.topic;
    const rec = sessionRecord(app);
    rec.total++; if (correct) rec.correct++;
    if (!rec.topics.includes(item.topic)) rec.topics.push(item.topic);

    progress.save();
    progress.push({ type: 'answer', qid: item.id, topic: item.topic, question: item.q.slice(0, 300), correct, ts: Date.now(), streak: qs.streak, t: qs.t, c: qs.c });
    const sess = { type: 'session', date: rec.date, correct: rec.correct, total: rec.total, topics: rec.topics.slice(), app: rec.app };
    progress.push(sess, e => e.type === 'session' && e.date === rec.date); // one event per session
    return qs;
  }

  function itemState(id: string) {
    const st = data.qstats[id];
    if (!st || st.t === 0) return 'untracked' as const;
    if (st.streak === 0) return 'weak' as const;
    return st.streak >= masteryStreak ? ('mastered' as const) : ('in-progress' as const);
  }
  const weight = (id: string) => {
    const st = data.qstats[id];
    if (!st || st.t === 0) return 1.0;
    if (st.streak === 0) return 1.2;
    return Math.max(0.15, 1 / (1 + st.streak));
  };
  /** Efraimidis–Spirakis weighted shuffle: unseen 1.0, last wrong 1.2, streak s → 1/(1+s). */
  const weightedOrder = <T extends { id: string }>(pool: T[]) =>
    pool.map(q => ({ q, k: Math.pow(Math.random(), 1 / weight(q.id)) })).sort((a, b) => b.k - a.k).map(x => x.q);

  return { data, progress, startRun, recordAnswer, itemState, weightedOrder };
}
