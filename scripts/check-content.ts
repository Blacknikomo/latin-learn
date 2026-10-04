/* Content validator for src/lessons — run with `npm run check`. Exits 1 on any issue. */
import { LESSONS } from '../src/lessons/index.ts';

const issues: string[] = [];
const ids = new Set<string>();

function walk(v: any, path: string): void {
  if (Array.isArray(v)) { v.forEach((x, i) => walk(x, `${path}[${i}]`)); return; }
  if (!v || typeof v !== 'object') return;
  const keys = Object.keys(v);
  if (keys.length === 3 && ['en', 'de', 'ru'].every(k => keys.includes(k))) {
    const lens = ['en', 'de', 'ru'].map(k => (typeof v[k] === 'string' ? v[k].trim().length : -1));
    ['en', 'de', 'ru'].forEach((k, i) => { if (lens[i] <= 0) issues.push(`empty ${k} at ${path}`); });
    if (Math.max(...lens) > 80 && Math.min(...lens) < 0.4 * Math.max(...lens)) issues.push(`length imbalance ${lens} at ${path}`);
    return;
  }
  if ('kind' in v && 'id' in v) { if (ids.has(v.id)) issues.push(`duplicate id ${v.id}`); ids.add(v.id); }
  if (v.kind === 'fill') v.rows.forEach((r: any) => { if (!r.ending) issues.push(`empty ending in ${v.id}`); });
  if (v.kind === 'parse') v.sentences.forEach((s: any) => s.words.forEach((w: any) => { if (!w.options.includes(w.answer)) issues.push(`${v.id}: answer of "${w.w}" not in options`); }));
  if (v.kind === 'quiz') v.questions.forEach((q: any, i: number) => { if (q.answer < 0 || q.answer >= q.options.length) issues.push(`${v.id} q${i}: answer index out of range`); });
  if (v.kind === 'stress') v.words.forEach((w: any) => { if (w.stress >= w.syll.length) issues.push(`${v.id}: stress index out of range`); });
  for (const k of keys) walk(v[k], `${path}.${k}`);
}

LESSONS.forEach((l, i) => {
  if (l.id !== i + 1) issues.push(`lesson at position ${i} has id ${l.id}`);
  walk(l, `L${l.id}`);
});

if (issues.length) { console.error(issues.join('\n')); process.exit(1); }
console.log(`content ok — ${LESSONS.length} lessons, ${ids.size} exercises`);
