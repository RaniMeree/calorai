import type { Metadata } from 'next';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary, translatedLocales } from '@/i18n/getDictionary';

export type LangParams = { params: Promise<{ lang: string }> };

// Resolves the route's language and its dictionary.
export async function load({ params }: LangParams) {
  const { lang } = await params;
  const l: Locale = isLocale(lang) ? lang : 'en';
  return { lang: l, t: await getDictionary(l) };
}

// Canonical + hreflang for a path after /<lang>/ ('' for the home page).
// Untranslated languages are English copies: point them at /en/ and keep them out of the index.
export function seo(lang: Locale, path: string): Pick<Metadata, 'alternates' | 'robots'> {
  const url = (l: Locale) => `/${l}/${path ? `${path}/` : ''}`;
  const translated = translatedLocales.includes(lang);
  return {
    alternates: {
      canonical: url(translated ? lang : 'en'),
      languages: {
        ...Object.fromEntries(translatedLocales.map((l) => [l, url(l)])),
        'x-default': url('en'),
      },
    },
    robots: translated ? undefined : { index: false, follow: true },
  };
}

// Per-page title/description with canonical and hreflang links.
export function pageMeta(lang: Locale, slug: string, title: string, description: string): Metadata {
  return { title, description, ...seo(lang, slug), openGraph: { title, description } };
}
