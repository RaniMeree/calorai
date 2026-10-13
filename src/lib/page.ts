import type { Metadata } from 'next';
import { isLocale, locales, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';

export type LangParams = { params: Promise<{ lang: string }> };

// Resolves the route's language and its dictionary.
export async function load({ params }: LangParams) {
  const { lang } = await params;
  const l: Locale = isLocale(lang) ? lang : 'en';
  return { lang: l, t: await getDictionary(l) };
}

// Per-page title/description with canonical and hreflang links.
export function pageMeta(lang: Locale, slug: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/${slug}/`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/${slug}/`])),
    },
    openGraph: { title, description },
  };
}
