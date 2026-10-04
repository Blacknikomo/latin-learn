export type Lang = 'en' | 'de' | 'ru';

/** Localized string. Inline markup supported everywhere (see rich.tsx):
 *  **bold**, *italic*, [[Latin text]] (styled + click to hear), blank line = new paragraph, "- " = list item. */
export type L = Record<Lang, string>;

/** Either a localized string or a plain (usually Latin) string that is the same in every language. */
export type T = L | string;

/** Grammar tags used by the "parse" exercise. Labels live in i18n.tsx. */
export type Tag =
  | 'nom' | 'gen' | 'dat' | 'acc' | 'abl' | 'voc'
  | 'verb' | 'inf' | 'imp' | 'subj' | 'part'
  | 'prep' | 'conj' | 'adv' | 'pron' | 'adj';

export type Block =
  /** Plain explanatory text. */
  | { kind: 'text'; body: L }
  /** Highlighted box. tone: rule = grammar rule, compare = RU/DE/EN parallel, tip = study tip, culture = history/context. */
  | { kind: 'callout'; tone: 'rule' | 'compare' | 'tip' | 'culture'; title?: L; body: L }
  /** Table. Cells may be Latin strings or localized. latinCols = column indexes rendered in Latin style with a speak button. */
  | { kind: 'table'; caption?: L; head: T[]; rows: T[][]; latinCols?: number[] }
  /** List of Latin phrases with literal translation hidden until revealed. */
  | { kind: 'phrases'; id: string; title?: L; items: { la: string; lit: L; note?: L }[] }
  /** Flip cards: Latin front, localized back. Also feed the global Review page. */
  | { kind: 'flashcards'; id: string; title?: L; cards: { la: string; back: L }[] }
  /** Multiple choice quiz. */
  | { kind: 'quiz'; id: string; title?: L; questions: { prompt: L; la?: string; options: T[]; answer: number; explain?: L }[] }
  /** Match left (Latin) to right (meaning). */
  | { kind: 'match'; id: string; prompt: L; pairs: { left: string; right: T }[] }
  /** Click the stressed syllable. stress = index into syll. */
  | { kind: 'stress'; id: string; prompt?: L; words: { syll: string[]; stress: number; gloss?: L }[] }
  /** Type the missing endings of a paradigm (declension / conjugation). */
  | { kind: 'fill'; id: string; prompt: L; title?: string; rows: { label: T; stem: string; ending: string }[] }
  /** Tag each word of a sentence with its grammatical role. */
  | { kind: 'parse'; id: string; prompt: L; sentences: { words: { w: string; answer: Tag; options: Tag[]; explain?: L }[]; translation: L }[] }
  /** Interlinear reader: line + translation, optional per-word glosses (hover/tap), optional grammar note. */
  | { kind: 'interlinear'; id: string; title?: L; lines: { la: string; tr: L; words?: { w: string; g: L }[]; note?: L }[] }
  /** Live classical vs ecclesiastical pronunciation converter. */
  | { kind: 'pronounce'; samples: string[] }
  /** Prefix + root word builder. */
  | { kind: 'builder'; id: string; prompt: L; prefixes: { p: string; m: L }[]; roots: { r: string; m: L }[]; targets: { word: string; prefix: string; root: string; meaning: L }[] }
  /** Write your translation, reveal a model answer, self-grade. */
  | { kind: 'translate'; id: string; prompt: L; items: { la: string; answer: L }[] }
  /** Free-text note saved locally (homework tables, "Latin in the wild", etc.). */
  | { kind: 'notepad'; id: string; prompt: L; placeholder?: L }
  /** 1–5 self-rating sliders. */
  | { kind: 'rating'; id: string; prompt: L; items: L[] }
  /** Pick one option (decision). */
  | { kind: 'choice'; id: string; prompt: L; options: { title: L; body: L }[] }
  /** External links: audio, video, texts. */
  | { kind: 'links'; title?: L; items: { label: string; url: string; note: L }[] };

export interface Section {
  title: L;
  minutes: number;
  blocks: Block[];
}

export interface Lesson {
  id: number;
  date: string; // ISO YYYY-MM-DD
  title: L;
  goal: L;
  sections: Section[];
  materials: { label: string; url?: string; note: L }[];
  homework: L[];
  doneWhen: L[];
}
