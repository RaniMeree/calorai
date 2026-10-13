import type { MetadataRoute } from 'next';
import { translatedLocales } from '@/i18n/getDictionary';
import { posts } from '@/content/posts';
import { site, pages, legalPages } from '@/lib/site';

export const dynamic = 'force-static';

// Only translated languages are listed; English copies in other languages are noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', ...pages, ...legalPages, ...posts.map((p) => `blog/${p.slug}`)];
  const url = (l: string, p: string) => `${site.url}/${l}/${p ? `${p}/` : ''}`;
  return translatedLocales.flatMap((lang) => paths.map((p) => ({
    url: url(lang, p),
    lastModified: new Date(),
    changeFrequency: p === '' || p === 'blog' ? 'weekly' : 'monthly',
    priority: p === '' ? 1 : p.startsWith('blog/') ? 0.6 : 0.8,
    alternates: { languages: Object.fromEntries(translatedLocales.map((l) => [l, url(l, p)])) },
  })));
}
