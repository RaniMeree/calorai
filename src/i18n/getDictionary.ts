import type { Locale } from './config';
import en from './dictionaries/en.json';

export type Dictionary = typeof en;

// Missing languages fall back to English until translated.
const loaders: Partial<Record<Locale, () => Promise<Dictionary>>> = {
  en: async () => en,
  ar: () => import('./dictionaries/ar.json').then((m) => m.default),
  da: () => import('./dictionaries/da.json').then((m) => m.default),
  de: () => import('./dictionaries/de.json').then((m) => m.default),
  el: () => import('./dictionaries/el.json').then((m) => m.default),
  es: () => import('./dictionaries/es.json').then((m) => m.default),
  fa: () => import('./dictionaries/fa.json').then((m) => m.default),
  fi: () => import('./dictionaries/fi.json').then((m) => m.default),
  fr: () => import('./dictionaries/fr.json').then((m) => m.default),
  hi: () => import('./dictionaries/hi.json').then((m) => m.default),
  it: () => import('./dictionaries/it.json').then((m) => m.default),
  ja: () => import('./dictionaries/ja.json').then((m) => m.default),
  ku: () => import('./dictionaries/ku.json').then((m) => m.default),
  nl: () => import('./dictionaries/nl.json').then((m) => m.default),
  pt: () => import('./dictionaries/pt.json').then((m) => m.default),
  ru: () => import('./dictionaries/ru.json').then((m) => m.default),
  sv: () => import('./dictionaries/sv.json').then((m) => m.default),
  tr: () => import('./dictionaries/tr.json').then((m) => m.default),
};

// Languages with real translations; the others are English copies and stay out of Google.
export const translatedLocales = Object.keys(loaders) as Locale[];

export const getDictionary = async (l: Locale): Promise<Dictionary> =>
  (loaders[l] ?? loaders.en!)();
