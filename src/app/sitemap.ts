import type { MetadataRoute } from 'next';
import { translatedLocales } from '@/i18n/getDictionary';
import { posts } from '@/content/posts';
import { dishes } from '@/content/dishes';
import { site, pages, legalPages } from '@/lib/site';

export const dynamic = 'force-static';

// Only translated languages are listed; English copies in other languages are noindex.
// Blog posts and legal texts are English only, so they are listed once, under /en/.
export default function sitemap(): MetadataRoute.Sitemap {
  const postPaths = posts.map((p) => `blog/${p.slug}`);
  const englishOnly = ['privacy', 'terms', ...postPaths];
  const paths = ['', ...pages, ...legalPages, ...postPaths];
  const url = (l: string, p: string) => `${site.url}/${l}/${p ? `${p}/` : ''}`;
  return paths.flatMap((p) => {
    const langs = englishOnly.includes(p) ? ['en'] : translatedLocales;
    return langs.map((lang) => ({
      url: url(lang, p),
      lastModified: new Date(),
      changeFrequency: p === '' || p === 'blog' ? 'weekly' as const : 'monthly' as const,
      priority: p === '' ? 1 : p.startsWith('blog/') ? 0.6 : 0.8,
      alternates: { languages: Object.fromEntries(langs.map((l) => [l, url(l, p)])) },
    }));
  }).concat(dishes.map((d) => ({
    url: url(d.lang, `calories/${d.slug}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: { languages: { [d.lang]: url(d.lang, `calories/${d.slug}`) } },
  })));
}
