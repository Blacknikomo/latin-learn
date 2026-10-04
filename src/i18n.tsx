import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { L, Lang, T, Tag } from './types';

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'ru', label: 'RU' },
];

const UI = {
  appTitle: { en: 'Latin Learn', de: 'Latin Learn', ru: 'Latin Learn' },
  tagline: {
    en: 'A 9-session taster course: mottos, quotes, church texts and word origins — reading comprehension, not fluency.',
    de: 'Ein Schnupperkurs in 9 Einheiten: Mottos, Zitate, Kirchentexte und Wortherkunft — Leseverständnis, keine Sprachbeherrschung.',
    ru: 'Ознакомительный курс из 9 занятий: девизы, цитаты, церковные тексты и происхождение слов — понимание при чтении, а не свободное владение.',
  },
  course: { en: 'Course', de: 'Kurs', ru: 'Курс' },
  review: { en: 'Review', de: 'Wiederholen', ru: 'Повторение' },
  session: { en: 'Session', de: 'Einheit', ru: 'Занятие' },
  min: { en: 'min', de: 'Min.', ru: 'мин' },
  goal: { en: 'Goal', de: 'Ziel', ru: 'Цель' },
  agenda: { en: 'Agenda', de: 'Ablauf', ru: 'План' },
  materials: { en: 'Materials', de: 'Materialien', ru: 'Материалы' },
  homework: { en: 'Homework', de: 'Hausaufgabe', ru: 'Домашнее задание' },
  doneWhen: { en: 'Done when', de: 'Geschafft, wenn', ru: 'Готово, когда' },
  markDone: { en: 'Mark section done', de: 'Abschnitt erledigt', ru: 'Раздел пройден' },
  done: { en: 'Done', de: 'Erledigt', ru: 'Готово' },
  today: { en: 'Today', de: 'Heute', ru: 'Сегодня' },
  upcoming: { en: 'Upcoming', de: 'Demnächst', ru: 'Предстоит' },
  past: { en: 'Past', de: 'Vergangen', ru: 'Прошло' },
  completed: { en: 'Completed', de: 'Abgeschlossen', ru: 'Пройдено' },
  open: { en: 'Open', de: 'Öffnen', ru: 'Открыть' },
  nextUp: { en: 'Next session', de: 'Nächste Einheit', ru: 'Следующее занятие' },
  lastSession: { en: 'Last session', de: 'Letzte Einheit', ru: 'Последнее занятие' },
  openSession: { en: 'Open session', de: 'Einheit öffnen', ru: 'Открыть занятие' },
  romanDate: { en: 'Date in the Roman calendar', de: 'Datum im römischen Kalender', ru: 'Дата по римскому календарю' },
  back: { en: '← All sessions', de: '← Alle Einheiten', ru: '← Все занятия' },
  prev: { en: '← Previous', de: '← Zurück', ru: '← Назад' },
  next: { en: 'Next →', de: 'Weiter →', ru: 'Далее →' },
  check: { en: 'Check', de: 'Prüfen', ru: 'Проверить' },
  reset: { en: 'Reset', de: 'Zurücksetzen', ru: 'Сбросить' },
  reveal: { en: 'Reveal', de: 'Aufdecken', ru: 'Показать' },
  revealAll: { en: 'Reveal all', de: 'Alle aufdecken', ru: 'Показать все' },
  hideAll: { en: 'Hide all', de: 'Alle verbergen', ru: 'Скрыть все' },
  flip: { en: 'Tap to flip', de: 'Zum Umdrehen tippen', ru: 'Нажмите, чтобы перевернуть' },
  knew: { en: 'Knew it', de: 'Gewusst', ru: 'Знаю' },
  again: { en: 'Again', de: 'Nochmal', ru: 'Ещё раз' },
  correct: { en: 'Correct', de: 'Richtig', ru: 'Верно' },
  wrong: { en: 'Not quite', de: 'Nicht ganz', ru: 'Не совсем' },
  score: { en: 'Score', de: 'Ergebnis', ru: 'Результат' },
  yourTranslation: { en: 'Your translation…', de: 'Deine Übersetzung…', ru: 'Ваш перевод…' },
  modelAnswer: { en: 'Model answer', de: 'Musterlösung', ru: 'Образец' },
  iGotIt: { en: 'I got it', de: 'Hatte ich', ru: 'Справился' },
  partly: { en: 'Partly', de: 'Teilweise', ru: 'Частично' },
  missed: { en: 'Missed', de: 'Daneben', ru: 'Не вышло' },
  saved: { en: 'Saved locally', de: 'Lokal gespeichert', ru: 'Сохранено локально' },
  classical: { en: 'Classical', de: 'Klassisch', ru: 'Классическое' },
  ecclesiastical: { en: 'Ecclesiastical', de: 'Kirchenlatein', ru: 'Церковное' },
  pronunciation: { en: 'Pronunciation', de: 'Aussprache', ru: 'Произношение' },
  typeLatin: { en: 'Type any Latin word or phrase', de: 'Lateinisches Wort oder Satz eingeben', ru: 'Введите латинское слово или фразу' },
  listen: { en: 'Listen', de: 'Anhören', ru: 'Слушать' },
  ttsNote: {
    en: 'Audio uses your browser’s Italian voice with respelling — a rough guide, not a native recording.',
    de: 'Audio nutzt die italienische Browserstimme mit Umschreibung — eine grobe Orientierung, keine Originalaufnahme.',
    ru: 'Озвучка — итальянский голос браузера с транскрипцией: примерный ориентир, а не запись носителя.',
  },
  startTimer: { en: 'Start 60-min session', de: '60-Min.-Einheit starten', ru: 'Начать занятие (60 мин)' },
  stopTimer: { en: 'Stop', de: 'Stopp', ru: 'Стоп' },
  nowOn: { en: 'Now', de: 'Jetzt', ru: 'Сейчас' },
  prefix: { en: 'Prefix', de: 'Präfix', ru: 'Приставка' },
  root: { en: 'Root', de: 'Wurzel', ru: 'Корень' },
  build: { en: 'Build', de: 'Bilden', ru: 'Собрать' },
  found: { en: 'Found', de: 'Gefunden', ru: 'Найдено' },
  noMatch: {
    en: 'No target word uses this combination — try another.',
    de: 'Kein Zielwort nutzt diese Kombination — probier eine andere.',
    ru: 'Ни одно целевое слово не собирается так — попробуйте другое сочетание.',
  },
  reviewIntro: {
    en: 'All flashcards from sessions you have opened, shuffled. Cards you mark “Again” come back sooner.',
    de: 'Alle Karteikarten aus geöffneten Einheiten, gemischt. „Nochmal“-Karten kommen früher wieder.',
    ru: 'Все карточки из открытых занятий вперемешку. Карточки с «Ещё раз» вернутся раньше.',
  },
  reviewEmpty: {
    en: 'Open a session first — its flashcards will appear here.',
    de: 'Öffne zuerst eine Einheit — ihre Karteikarten erscheinen dann hier.',
    ru: 'Сначала откройте занятие — его карточки появятся здесь.',
  },
  cardsLeft: { en: 'cards left', de: 'Karten übrig', ru: 'карточек осталось' },
  reviewDone: { en: 'Round finished. Shuffle again?', de: 'Runde fertig. Neu mischen?', ru: 'Круг пройден. Перемешать снова?' },
  shuffle: { en: 'Shuffle', de: 'Mischen', ru: 'Перемешать' },
  progress: { en: 'Progress', de: 'Fortschritt', ru: 'Прогресс' },
  resetAll: { en: 'Reset (this device)', de: 'Zurücksetzen (dieses Gerät)', ru: 'Сбросить (это устройство)' },
  resetEverywhere: { en: 'Reset on ALL devices', de: 'Auf ALLEN Geräten zurücksetzen', ru: 'Сбросить на ВСЕХ устройствах' },
  confirmResetAll: {
    en: 'Reset all Latin progress on ALL devices? Offline devices clear on their next sync. This cannot be undone.',
    de: 'Gesamten Latein-Fortschritt auf ALLEN Geräten löschen? Offline-Geräte werden bei der nächsten Synchronisierung geleert. Nicht umkehrbar.',
    ru: 'Сбросить весь прогресс по латыни на ВСЕХ устройствах? Офлайн-устройства очистятся при следующей синхронизации. Это необратимо.',
  },
  resetFailed: { en: 'Reset failed', de: 'Zurücksetzen fehlgeschlagen', ru: 'Сброс не удался' },
  syncLocal: { en: 'local only', de: 'nur lokal', ru: 'только локально' },
  syncSignIn: { en: 'sign in', de: 'anmelden', ru: 'войти' },
  syncOk: { en: 'synced', de: 'synchron', ru: 'синхронизировано' },
  syncQueued: { en: 'queued', de: 'in Warteschlange', ru: 'в очереди' },
  syncErr: { en: 'sync error', de: 'Sync-Fehler', ru: 'ошибка синхронизации' },
  syncTitle: { en: 'Cross-device sync', de: 'Geräteübergreifende Synchronisierung', ru: 'Синхронизация между устройствами' },
  syncLocalBody: {
    en: 'Sync is not configured for this build (or the page is opened from a file). Progress is saved on this device only.',
    de: 'Für diesen Build ist keine Synchronisierung eingerichtet (oder die Seite ist als Datei geöffnet). Der Fortschritt bleibt auf diesem Gerät.',
    ru: 'В этой сборке синхронизация не настроена (или страница открыта как файл). Прогресс хранится только на этом устройстве.',
  },
  syncSignInBody: {
    en: 'Sign in with Google to keep progress on your account and continue on another device.',
    de: 'Mit Google anmelden, um den Fortschritt im Konto zu speichern und auf einem anderen Gerät weiterzumachen.',
    ru: 'Войдите через Google, чтобы хранить прогресс в аккаунте и продолжать на другом устройстве.',
  },
  syncPending: { en: 'answers saved here will upload after you sign in', de: 'hier gespeicherte Antworten werden nach der Anmeldung hochgeladen', ru: 'сохранённых здесь ответов загрузятся после входа' },
  signInGoogle: { en: 'Sign in with Google', de: 'Mit Google anmelden', ru: 'Войти через Google' },
  signedInAs: { en: 'Signed in as', de: 'Angemeldet als', ru: 'Вы вошли как' },
  signOut: { en: 'Sign out', de: 'Abmelden', ru: 'Выйти' },
  allSynced: { en: 'Everything on this device is synced.', de: 'Alles auf diesem Gerät ist synchronisiert.', ru: 'Всё на этом устройстве синхронизировано.' },
  waiting: { en: 'events waiting to sync', de: 'Ereignisse warten auf Synchronisierung', ru: 'событий ждут синхронизации' },
  confirmReset: {
    en: 'Delete all progress and notes on THIS device? If you are signed in, the cloud copy is kept and comes back on the next sync.',
    de: 'Gesamten Fortschritt und alle Notizen auf DIESEM Gerät löschen? Wenn du angemeldet bist, bleibt die Cloud-Kopie erhalten und kommt bei der nächsten Synchronisierung zurück.',
    ru: 'Удалить весь прогресс и заметки на ЭТОМ устройстве? Если вы вошли в аккаунт, облачная копия сохранится и вернётся при следующей синхронизации.',
  },
  exportData: { en: 'Export progress (JSON)', de: 'Fortschritt exportieren (JSON)', ru: 'Экспорт прогресса (JSON)' },
  pickOne: { en: 'Pick the right tag for each word', de: 'Wähle für jedes Wort die passende Rolle', ru: 'Выберите роль для каждого слова' },
  showTranslation: { en: 'Show translation', de: 'Übersetzung zeigen', ru: 'Показать перевод' },
  notes: { en: 'Notes', de: 'Notizen', ru: 'Заметки' },
} satisfies Record<string, L>;

export type UIKey = keyof typeof UI;

export const TAGS: Record<Tag, L> = {
  nom: { en: 'Nominative', de: 'Nominativ', ru: 'Именительный' },
  gen: { en: 'Genitive', de: 'Genitiv', ru: 'Родительный' },
  dat: { en: 'Dative', de: 'Dativ', ru: 'Дательный' },
  acc: { en: 'Accusative', de: 'Akkusativ', ru: 'Винительный' },
  abl: { en: 'Ablative', de: 'Ablativ', ru: 'Аблатив' },
  voc: { en: 'Vocative', de: 'Vokativ', ru: 'Звательный' },
  verb: { en: 'Verb', de: 'Verb', ru: 'Глагол' },
  inf: { en: 'Infinitive', de: 'Infinitiv', ru: 'Инфинитив' },
  imp: { en: 'Imperative', de: 'Imperativ', ru: 'Повелительное' },
  subj: { en: 'Subjunctive', de: 'Konjunktiv', ru: 'Сослагательное' },
  part: { en: 'Participle', de: 'Partizip', ru: 'Причастие' },
  prep: { en: 'Preposition', de: 'Präposition', ru: 'Предлог' },
  conj: { en: 'Conjunction', de: 'Konjunktion', ru: 'Союз' },
  adv: { en: 'Adverb', de: 'Adverb', ru: 'Наречие' },
  pron: { en: 'Pronoun', de: 'Pronomen', ru: 'Местоимение' },
  adj: { en: 'Adjective', de: 'Adjektiv', ru: 'Прилагательное' },
};

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Ctx = createContext<LangCtx>({ lang: 'en', setLang: () => {} });

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('latin-learn:lang');
    if (saved === 'en' || saved === 'de' || saved === 'ru') return saved;
  } catch { /* storage unavailable */ }
  const nav = (navigator.language || 'en').slice(0, 2);
  return nav === 'de' || nav === 'ru' ? nav : 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  useEffect(() => {
    try { localStorage.setItem('latin-learn:lang', lang); } catch { /* ignore */ }
    document.documentElement.lang = lang;
  }, [lang]);
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}

/** Returns helpers: ui(key) for UI strings, tr(T) for content strings, tag(Tag) for grammar labels. */
export function useT() {
  const { lang } = useLang();
  return {
    lang,
    ui: (k: UIKey) => UI[k][lang],
    tr: (v: T | undefined) => (v === undefined ? '' : typeof v === 'string' ? v : v[lang]),
    tag: (t: Tag) => TAGS[t][lang],
  };
}

export function formatDate(iso: string, lang: Lang) {
  const d = new Date(iso + 'T12:00:00');
  const loc = lang === 'en' ? 'en-GB' : lang === 'de' ? 'de-DE' : 'ru-RU';
  return d.toLocaleDateString(loc, { weekday: 'short', day: 'numeric', month: 'long' });
}
