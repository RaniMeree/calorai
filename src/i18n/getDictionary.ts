import type { Locale } from './config';
import en from './dictionaries/en.json';

export type Dictionary = typeof en;

// Missing languages fall back to English until translated.
const loaders: Partial<Record<Locale, () => Promise<Dictionary>>> = {
  en: async () => en,
};

export const getDictionary = async (l: Locale): Promise<Dictionary> =>
  (loaders[l] ?? loaders.en!)();
