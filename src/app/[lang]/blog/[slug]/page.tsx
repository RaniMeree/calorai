import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, locales, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';
import { posts, getPost } from '@/content/posts';
import { site } from '@/lib/site';
import PostBody from '@/components/PostBody';
import StoreButtons from '@/components/StoreButtons';

type Params = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/${lang}/blog/${slug}/`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/blog/${slug}/`])),
    },
    openGraph: { type: 'article', title: post.title, description: post.description, images: [`/blog/${post.cover}.webp`] },
  };
}

export default async function Article({ params }: Params) {
  const { lang: raw, slug } = await params;
  const lang: Locale = isLocale(raw) ? raw : 'en';
  const post = getPost(slug);
  if (!post) notFound();
  const t = await getDictionary(lang);
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.description,
    datePublished: post.date, image: `${site.url}/blog/${post.cover}.webp`, inLanguage: 'en',
    author: { '@type': 'Organization', name: site.name }, publisher: { '@type': 'Organization', name: site.company },
  };

  return (
    <article lang="en" dir="ltr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="post-hero">
        <div className="wrap narrow">
          <a className="back" href={`/${lang}/blog/`}>← {t.nav.blog}</a>
          <span className="tag">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
          <small>{post.date} · {post.minutes} {t.blogPage.minRead}</small>
        </div>
      </header>
      <div className="wrap narrow">
        <img className="post-cover" src={`/blog/${post.cover}.webp`} alt="" width={1200} height={675} />
        <div className="prose post-body">
          <PostBody post={post} />
          <aside className="post-cta">
            <img src="/app-icon.png" alt="" width={64} height={64} />
            <div>
              <b>{t.blogPage.ctaTitle}</b>
              <p>{t.blogPage.ctaText}</p>
              <StoreButtons t={t} />
            </div>
          </aside>
          <div className="sources">
            <h2>{t.blogPage.sources}</h2>
            <ul>{post.sources.map((s) => <li key={s}>{s}</li>)}</ul>
            <p>{t.footer.disclaimer}</p>
          </div>
        </div>
      </div>
      <section className="section section-tint">
        <div className="wrap">
          <h2 className="center mb">{t.blogPage.more}</h2>
          <div className="post-grid">
            {related.map((r) => (
              <a key={r.slug} className="post-card" href={`/${lang}/blog/${r.slug}/`}>
                <img src={`/blog/${r.cover}.webp`} alt="" width={1200} height={675} loading="lazy" />
                <div className="post-card-body"><span className="tag">{r.category}</span><h3>{r.title}</h3></div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
