/**
 * LessonFacts — progress model for everything that is STATE rather than a scored answer:
 * lesson opened, section done, homework / done-when checks, notes, ratings, choices, builder
 * finds, self-grades, exercise best results and the Review page's Leitner boxes.
 *
 * Shape (also what the backend's "facts" kind assembles in GET /state):
 *   { [lesson]: { [key]: { v: <json>, at: <ISO> } } }      lesson "0" = course-wide (review cards)
 *
 * Keys: open · sec:<i> · chk:<hw|dw><i> · note:<k> · val:<k> · ex:<exerciseId> · card:<latin> · drill:<drill>:<item>
 *
 * Every write is one fact event {type:"fact", lesson, key, v, at}; the backend keeps it
 * last-write-wins by `at` (ISO strings order lexically), so a stale device never overwrites a
 * newer value. Rewriting the same key while it is still queued REPLACES the queued event
 * (typing a note costs one event per pause, not per keystroke). {kind:"forget", lesson}
 * deletes a lesson's rows on every device.
 */
import { openProgressStore, type ProgressStore } from './progressStore';
import type { SyncTransport } from './transport';

export interface Fact { v: unknown; at: string }
export type FactsData = Record<string, Record<string, Fact>>;

const MAX_V_BYTES = 8000; // notes are short; the backend rejects bigger values

function merge(local: FactsData, remote: FactsData): FactsData {
  const out: FactsData = {};
  for (const lesson of new Set([...Object.keys(remote ?? {}), ...Object.keys(local ?? {})])) {
    if (lesson === '_meta') continue;
    const r = remote?.[lesson] ?? {}, l = local?.[lesson] ?? {};
    const m: Record<string, Fact> = { ...r };
    for (const [k, f] of Object.entries(l)) if (!m[k] || (f.at ?? '') > (m[k].at ?? '')) m[k] = f;
    out[lesson] = m;
  }
  return out;
}

export interface LessonFacts {
  data: FactsData;
  progress: ProgressStore<FactsData>;
  get<T = unknown>(lesson: number, key: string): T | undefined;
  set(lesson: number, key: string, v: unknown): void;
  forget(lesson: number): void;
}

export function openLessonFacts(o: { key: string; transport: SyncTransport<FactsData> | null; onChange?: () => void }): LessonFacts {
  const progress = openProgressStore<FactsData>({
    key: o.key,
    defaults: () => ({}),
    transport: o.transport,
    hasHistory: d => Object.values(d).some(l => Object.keys(l ?? {}).length > 0),
    mergeRemote: merge,
    onChange: o.onChange,
  });
  const data = progress.data;

  return {
    data,
    progress,
    get: <T,>(lesson: number, key: string) => data[String(lesson)]?.[key]?.v as T | undefined,
    set(lesson, key, v) {
      if (JSON.stringify(v ?? null).length > MAX_V_BYTES) v = String(v).slice(0, MAX_V_BYTES - 2);
      const at = new Date().toISOString();
      const l = String(lesson);
      (data[l] ??= {})[key] = { v, at };
      progress.save();
      progress.push({ type: 'fact', lesson: l, key, v, at }, e => e.type === 'fact' && e.lesson === l && e.key === key);
    },
    forget(lesson) {
      const l = String(lesson);
      delete data[l];
      progress.save();
      progress.push({ type: 'fact', kind: 'forget', lesson: l, at: new Date().toISOString() });
    },
  };
}
