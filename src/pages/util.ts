import type { Lesson } from '../types';
import type { LessonProgress } from '../progress';

export function lessonPercent(lesson: Lesson, p: LessonProgress) {
  const total = lesson.sections.length + lesson.doneWhen.length;
  const done =
    lesson.sections.filter((_, i) => p.sections[i]).length +
    lesson.doneWhen.filter((_, i) => p.checks[`dw${i}`]).length;
  return total ? Math.round((done / total) * 100) : 0;
}

export function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

const LA_MONTHS = ['Ian.', 'Feb.', 'Mart.', 'Apr.', 'Mai.', 'Iun.', 'Iul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

/** Roman calendar date, counted inclusively to the next Kalends, Nones or Ides: 2026-10-02 → "a.d. VI Non. Oct." */
export function romanDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  const nones = [3, 5, 7, 10].includes(m) ? 7 : 5;
  const ides = nones + 8;
  const count = (n: number, mark: string, month: string) =>
    n === 1 ? `${mark} ${month}` : n === 2 ? `prid. ${mark} ${month}` : `a.d. ${toRoman(n)} ${mark} ${month}`;
  const mo = LA_MONTHS[m - 1];
  if (d === 1) return `Kal. ${mo}`;
  if (d <= nones) return count(nones - d + 1, 'Non.', mo);
  if (d <= ides) return count(ides - d + 1, 'Id.', mo);
  const len = new Date(y, m, 0).getDate();
  return count(len - d + 2, 'Kal.', LA_MONTHS[m % 12]);
}

export function toRoman(n: number) {
  const map: [number, string][] = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  let s = '';
  for (const [v, r] of map) while (n >= v) { s += r; n -= v; }
  return s;
}
