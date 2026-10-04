/**
 * React facade over the progress layers (src/sync/*, ported from CTO-ed):
 *
 *   SyncTransport  (transport.ts)   event queue → POST /events, GET /state, reset epochs
 *        ▲
 *   ProgressStore  (progressStore.ts)  one persisted object per store, merge-on-pull
 *        ▲
 *   QuizHistory  — store "latin"        every scored item (answers, mastery, sessions)
 *   LessonFacts  — store "latin-state"  every piece of state (sections, checks, notes, cards…)
 *        ▲
 *   this file — derives the per-lesson view components read, and exposes intent-level writes.
 *
 * Components never touch localStorage or the transport directly.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { auth, type AuthLike, type AuthUser } from './sync/auth';
import { STORES } from './sync/config';
import { openLessonFacts, type FactsData, type LessonFacts } from './sync/lessonFacts';
import { openQuizHistory, qid, type QuizData, type QuizHistory } from './sync/quizHistory';
import { lsGet, lsSet } from './sync/storage';
import { SyncTransport, type SyncStatus } from './sync/transport';

export interface ExerciseResult { score: number; total: number }

/** Per-lesson view, derived from LessonFacts. */
export interface LessonProgress {
  opened: boolean;
  sections: Record<number, boolean>;
  exercises: Record<string, ExerciseResult>;
  checks: Record<string, boolean>;
  notes: Record<string, string>;
  values: Record<string, unknown>;
}
export interface CardBox { due: number; box: number }

const FACTS_KEY = 'll_facts_v1';
const QUIZ_KEY = 'll_quiz_v1';
const LEGACY_KEY = 'latin-learn:v1';
const MIGRATED_KEY = 'll_migrated_v1';
const GLOBAL = 0; // lesson id for course-wide facts (review cards)

const BOOTSTRAP_MSG: Record<string, string> = {
  en: 'Sync: the server has no Latin progress yet.\nUpload THIS device’s progress as the baseline?\n(Do this once, from the device with the fullest history.)',
  de: 'Sync: Auf dem Server gibt es noch keinen Latein-Fortschritt.\nDen Fortschritt DIESES Geräts als Basis hochladen?\n(Einmalig, vom Gerät mit dem vollständigsten Verlauf.)',
  ru: 'Синхронизация: на сервере ещё нет прогресса по латыни.\nЗагрузить прогресс ЭТОГО устройства как исходный?\n(Один раз, с устройства с самой полной историей.)',
};
const askBootstrap = () => {
  const lang = lsGet('latin-learn:lang') ?? 'en';
  return window.confirm(BOOTSTRAP_MSG[lang] ?? BOOTSTRAP_MSG.en);
};

/** e2e seam: a build with `--mode e2e` may inject a fake auth (never in production builds). */
function pickAuth(): AuthLike {
  const w = window as unknown as { __LL_TEST_AUTH__?: AuthLike };
  if (import.meta.env.MODE === 'e2e' && w.__LL_TEST_AUTH__) return w.__LL_TEST_AUTH__;
  return auth;
}

/** One-time import of the pre-sync blob (`latin-learn:v1`) into LessonFacts. Written locally
 *  without events: the first sign-in offers it to the server through the bootstrap path. */
function migrateLegacy(facts: LessonFacts) {
  if (lsGet(MIGRATED_KEY)) return;
  try {
    const old = JSON.parse(lsGet(LEGACY_KEY) ?? 'null');
    if (old && typeof old === 'object') {
      const at = new Date().toISOString();
      const put = (lesson: number, key: string, v: unknown) => { ((facts.data[String(lesson)] ??= {})[key] = { v, at }); };
      for (const [id, l] of Object.entries<Record<string, Record<string, unknown>>>(old.lessons ?? {})) {
        const n = Number(id);
        if (l.opened) put(n, 'open', true);
        for (const [i, v] of Object.entries(l.sections ?? {})) if (v) put(n, `sec:${i}`, true);
        for (const [k, v] of Object.entries(l.checks ?? {})) if (v) put(n, `chk:${k}`, true);
        for (const [k, v] of Object.entries(l.notes ?? {})) if (v) put(n, `note:${k}`, v);
        for (const [k, v] of Object.entries(l.values ?? {})) put(n, `val:${k}`, v);
        for (const [k, v] of Object.entries(l.exercises ?? {})) put(n, `ex:${k}`, v);
      }
      for (const [la, v] of Object.entries(old.cards ?? {})) put(GLOBAL, `card:${la}`, v);
      facts.progress.save();
    }
  } catch { /* unreadable legacy save — start fresh */ }
  lsSet(MIGRATED_KEY, new Date().toISOString());
}

function deriveLesson(facts: FactsData, id: number): LessonProgress {
  const p: LessonProgress = { opened: false, sections: {}, exercises: {}, checks: {}, notes: {}, values: {} };
  for (const [key, f] of Object.entries(facts[String(id)] ?? {})) {
    const i = key.indexOf(':');
    const kind = i < 0 ? key : key.slice(0, i), rest = i < 0 ? '' : key.slice(i + 1);
    if (kind === 'open') p.opened = !!f.v;
    else if (kind === 'sec') p.sections[Number(rest)] = !!f.v;
    else if (kind === 'chk') p.checks[rest] = !!f.v;
    else if (kind === 'note') p.notes[rest] = String(f.v ?? '');
    else if (kind === 'val') p.values[rest] = f.v;
    else if (kind === 'ex') p.exercises[rest] = f.v as ExerciseResult;
  }
  return p;
}

interface Ctx {
  version: number;
  lesson: (id: number) => LessonProgress;
  setFact: (lesson: number, key: string, v: unknown) => void;
  cards: Record<string, CardBox>;
  setCard: (la: string, v: CardBox) => void;
  quiz: QuizHistory;
  status: SyncStatus;
  resetLocal: () => void;
  resetEverywhere: () => Promise<{ ok: boolean; reason?: string }>;
  exportData: () => { facts: FactsData; quiz: QuizData };
  user: AuthUser | null;
  login: () => void;
  logout: () => void;
}

const ProgressCtx = createContext<Ctx | null>(null);

function combine(a: SyncStatus, b: SyncStatus): SyncStatus {
  const queued = a.queued + b.queued;
  const order = ['err', 'local', 'signin', 'queued', 'ok'] as const;
  const state = order.find(s => a.state === s || b.state === s) ?? 'ok';
  return { state, queued, detail: a.detail || b.detail };
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [version, setVersion] = useState(0);
  const bump = useCallback(() => setVersion(v => v + 1), []);

  const models = useMemo(() => {
    const a = pickAuth();
    const live = a.available();
    const tQuiz = live ? new SyncTransport<QuizData>(STORES.answers, a, askBootstrap) : null;
    const tFacts = live ? new SyncTransport<FactsData>(STORES.state, a, askBootstrap) : null;
    const onChange = bump; // stable (useCallback with no deps)
    const facts = openLessonFacts({ key: FACTS_KEY, transport: tFacts, onChange });
    const quiz = openQuizHistory({ key: QUIZ_KEY, transport: tQuiz, onChange });
    migrateLegacy(facts);
    return { facts, quiz, tQuiz, tFacts, a };
  }, [bump]);

  const [user, setUser] = useState<AuthUser | null>(() => models.a.user());
  useEffect(() => models.a.onChange(u => setUser(u)), [models]);

  const localStatus = (): SyncStatus => ({ state: 'local', queued: 0 });
  const [status, setStatus] = useState<SyncStatus>(localStatus);
  useEffect(() => {
    const { tQuiz, tFacts } = models;
    if (!tQuiz || !tFacts) return;
    const upd = () => setStatus(combine(tQuiz.status(), tFacts.status()));
    upd();
    const u1 = tQuiz.subscribe(upd), u2 = tFacts.subscribe(upd);
    return () => { u1(); u2(); };
  }, [models]);

  const value = useMemo<Ctx>(() => {
    const { facts, quiz } = models;
    const cards: Record<string, CardBox> = {};
    for (const [k, f] of Object.entries(facts.data[String(GLOBAL)] ?? {})) if (k.startsWith('card:')) cards[k.slice(5)] = f.v as CardBox;
    return {
      version,
      lesson: id => deriveLesson(facts.data, id),
      setFact: (lesson, key, v) => { facts.set(lesson, key, v); bump(); },
      cards,
      setCard: (la, v) => { facts.set(GLOBAL, `card:${la}`, v); bump(); },
      quiz,
      status,
      resetLocal: () => { facts.progress.resetLocal(); quiz.progress.resetLocal(); bump(); },
      resetEverywhere: async () => {
        const r1 = await facts.progress.resetEverywhere();
        const r2 = await quiz.progress.resetEverywhere();
        bump();
        return r1.ok && r2.ok ? { ok: true } : { ok: false, reason: r1.reason || r2.reason };
      },
      exportData: () => ({ facts: facts.data, quiz: quiz.data }),
      user,
      login: () => { void models.a.login?.(); },
      logout: () => { void models.a.logout?.(); },
    };
  }, [models, version, status, bump, user]);

  return <ProgressCtx.Provider value={value}>{children}</ProgressCtx.Provider>;
}

export function useProgress() {
  const c = useContext(ProgressCtx);
  if (!c) throw new Error('ProgressProvider missing');
  return c;
}

/** Lesson-scoped helpers, provided by the Lesson page. */
export const LessonIdCtx = createContext<number>(0);

export function useLessonState() {
  const id = useContext(LessonIdCtx);
  const { lesson, setFact, quiz } = useProgress();
  const p = lesson(id);
  return {
    id,
    p,
    setResult: (exId: string, r: ExerciseResult) => setFact(id, `ex:${exId}`, r),
    setNote: (k: string, v: string) => setFact(id, `note:${k}`, v),
    setValue: (k: string, v: unknown) => setFact(id, `val:${k}`, v),
    setCheck: (k: string, v: boolean) => setFact(id, `chk:${k}`, v),
    setSection: (i: number, v: boolean) => setFact(id, `sec:${i}`, v),
    markOpened: () => setFact(id, 'open', true),
    /** One scored item: a quiz question, a stress word, a match pair, a fill row, a parse word. */
    answer: (exId: string, index: number | string, question: string, correct: boolean) =>
      quiz.recordAnswer({ id: qid(exId, index), topic: `L${id}/${exId}`, q: question }, correct),
    /** A new attempt at an exercise (after Reset) is a new session. */
    newRun: (exId: string) => quiz.startRun(`__${exId}__${Date.now()}`),
  };
}
