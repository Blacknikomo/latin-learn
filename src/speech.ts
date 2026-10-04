/**
 * Pronunciation helpers.
 *
 * Browsers have no Latin voice, so we use an Italian voice and respell the text
 * so that Italian spelling rules produce an approximation of the chosen system.
 */

export type Mode = 'classical' | 'ecclesiastical';

const strip = (s: string) => s.normalize('NFD').replace(/[̄̆]/g, '').normalize('NFC');

/** Respell for an Italian TTS voice. */
export function respell(text: string, mode: Mode): string {
  let s = strip(text).toLowerCase();
  if (mode === 'classical') {
    s = s
      .replace(/ae/g, 'ai')
      .replace(/oe/g, 'oi')
      .replace(/c(?=[eiy])/g, 'k')
      .replace(/sc(?=[eiy])/g, 'sk')
      .replace(/g(?=[eiy])/g, 'gh')
      .replace(/\bi(?=[aeou])/g, 'j')
      .replace(/v/g, 'u')
      .replace(/ti(?=[aeou])/g, 'ti');
  } else {
    s = s
      .replace(/ae|oe/g, 'e')
      .replace(/ti(?=[aeou])/g, 'zi')
      .replace(/\bh/g, '');
  }
  return s;
}

/** Human-readable guide (for the converter UI). Uses simple English-like respelling. */
export function guide(text: string, mode: Mode): string {
  const words = strip(text).split(/(\s+|[,.;:!?])/);
  return words.map(w => (/^[a-zA-Z]+$/.test(w) ? guideWord(w, mode) : w)).join('');
}

function guideWord(word: string, mode: Mode): string {
  const cap = word[0] === word[0].toUpperCase();
  let s = word.toLowerCase();
  if (mode === 'classical') {
    s = s
      .replace(/qu/g, 'kw')
      .replace(/ae/g, 'ai')
      .replace(/oe/g, 'oi')
      .replace(/^i(?=[aeiou])/g, 'y')
      .replace(/(?<=[aeiou])i(?=[aeiou])/g, 'y')
      .replace(/^u(?=[aeio])/g, 'w')
      .replace(/v/g, 'w')
      .replace(/c/g, 'k');
  } else {
    s = s
      .replace(/^h/, '')
      .replace(/qu/g, 'kw')
      .replace(/ae|oe/g, 'e')
      .replace(/xc(?=[ei])/g, 'ksh')
      .replace(/sc(?=[ei])/g, 'sh')
      .replace(/cc(?=[ei])/g, 'tch')
      .replace(/c(?=[ei])/g, 'ch')
      .replace(/ti(?=[aeou])/g, 'tsi')
      .replace(/gn/g, 'ny')
      .replace(/g(?=[ei])/g, 'j')
      .replace(/^i(?=[aeiou])/g, 'y')
      .replace(/(?<=[aeiou])i(?=[aeiou])/g, 'y')
      .replace(/c(?!h)/g, 'k')
      .replace(/x/g, 'ks');
  }
  return cap ? s[0].toUpperCase() + s.slice(1) : s;
}

let cachedVoice: SpeechSynthesisVoice | null | undefined;

function pickVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice !== undefined && cachedVoice !== null) return cachedVoice;
  const voices = window.speechSynthesis?.getVoices() ?? [];
  cachedVoice =
    voices.find(v => v.lang.toLowerCase().startsWith('la')) ??
    voices.find(v => v.lang.toLowerCase().startsWith('it')) ??
    null;
  return cachedVoice;
}

export const canSpeak = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

export function speak(text: string, mode: Mode) {
  if (!canSpeak()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(respell(text, mode));
  const v = pickVoice();
  if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = 'it-IT'; }
  u.rate = 0.85;
  synth.speak(u);
}

if (canSpeak()) {
  window.speechSynthesis.onvoiceschanged = () => { cachedVoice = undefined; };
}
