export const locales = [
  'en', 'ar', 'da', 'de', 'el', 'es', 'fa', 'fi', 'fr',
  'hi', 'it', 'ja', 'ku', 'nl', 'pt', 'ru', 'sv', 'tr',
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const rtlLocales: Locale[] = ['ar', 'fa', 'ku'];

export const languageNames: Record<Locale, string> = {
  en: 'English', ar: 'العربية', da: 'Dansk', de: 'Deutsch', el: 'Ελληνικά', es: 'Español',
  fa: 'فارسی', fi: 'Suomi', fr: 'Français', hi: 'हिन्दी', it: 'Italiano', ja: '日本語',
  ku: 'کوردی', nl: 'Nederlands', pt: 'Português', ru: 'Русский', sv: 'Svenska', tr: 'Türkçe',
};

export const isLocale = (v: string): v is Locale =>
  (locales as readonly string[]).includes(v);

export const dir = (l: Locale) => (rtlLocales.includes(l) ? 'rtl' : 'ltr');
