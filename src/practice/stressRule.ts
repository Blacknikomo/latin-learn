/**
 * The classical Latin stress rule, computed from syllabified words with macrons.
 * Shared by the stress drill (explanations) and scripts/check-content.ts (data validation),
 * so a word whose stated stress disagrees with its own syllables/macrons fails `npm run check`.
 *
 * Syllabification convention used by the data:
 * - one consonant between vowels opens the next syllable: a-mī-cus
 * - two consonants split: ma-gis-ter (so a closed syllable = ends in a consonant = long by position)
 * - stop + l/r stay together and do NOT make position: pa-tri-a, A-prī-lis
 * - qu and gu(+vowel) count as one consonant; ae, oe, au are diphthongs (long)
 */
export type StressReason =
  | { kind: 'two' }
  | { kind: 'longVowel'; penult: string }
  | { kind: 'diphthong'; penult: string }
  | { kind: 'closed'; penult: string }
  | { kind: 'shortVV'; penult: string; ante: string }
  | { kind: 'short'; penult: string; ante: string };

const LONG = /[āēīōūȳ]/i;
const DIPH = /ae|oe|au/i;
const VOWEL = /[aeiouyāēīōūȳ]$/i;
const STARTS_VOWEL = /^[aeiouyāēīōūȳ]/i;

export function stressOf(syll: string[]): { index: number; reason: StressReason } {
  const n = syll.length;
  if (n <= 2) return { index: 0, reason: { kind: 'two' } };
  const penult = syll[n - 2], last = syll[n - 1], ante = syll[n - 3];
  if (LONG.test(penult)) return { index: n - 2, reason: { kind: 'longVowel', penult } };
  if (DIPH.test(penult)) return { index: n - 2, reason: { kind: 'diphthong', penult } };
  if (!VOWEL.test(penult)) return { index: n - 2, reason: { kind: 'closed', penult } };
  if (STARTS_VOWEL.test(last)) return { index: n - 3, reason: { kind: 'shortVV', penult, ante } };
  return { index: n - 3, reason: { kind: 'short', penult, ante } };
}
