import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { seo } from '@/lib/page';
import { getDictionary } from '@/i18n/getDictionary';
import { posts, getPost } from '@/content/posts';
import { dishes, dishesFor, dishLabels } from '@/content/dishes';
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
    ...seo(isLocale(lang) ? lang : 'en', `blog/${slug}`, true),
    openGraph: { type: 'article', title: post.title, description: post.description, images: [`/blog/${post.cover}.webp`] },
  };
}

export default async function Article({ params }: Params) {
  const { lang: raw, slug } = await params;
  const lang: Locale = isLocale(raw) ? raw : 'en';
  const post = getPost(slug);
  if (!post) notFound();
  const t = await getDictionary(lang);
  // Related: same category first, starting after this post so each post links to different ones.
  const i = posts.findIndex((p) => p.slug === slug);
  const ring = [...posts.slice(i + 1), ...posts.slice(0, i)];
  const related = [...ring.filter((p) => p.category === post.category), ...ring.filter((p) => p.category !== post.category)].slice(0, 6);
  // Articles are English, so the dish list is labelled in English with the English dish first.
  const dishLinks = [...dishesFor('en'), ...dishes.filter((d) => d.lang !== 'en')];
  const l = dishLabels.en!;
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
        <aside className="post-cta post-cta-top">
          <img src="/app-icon.png" alt="" width={48} height={48} />
          <div>
            <b>{t.blogPage.ctaTitle}</b>
            <p>{t.blogPage.ctaText}</p>
            <StoreButtons t={t} campaign={`blog-top-${slug}`} />
          </div>
        </aside>
        <div className="prose post-body">
          <PostBody post={post} />
          <aside className="post-cta">
            <img src="/app-icon.png" alt="" width={64} height={64} />
            <div>
              <b>{t.blogPage.ctaTitle}</b>
              <p>{t.blogPage.ctaText}</p>
              <StoreButtons t={t} campaign={`blog-${slug}`} />
            </div>
          </aside>
          <h2>{l.section}</h2>
          <ul className="dish-more">
            {dishLinks.map((d) => (
              <li key={d.slug}>
                <a href={`/${d.lang}/calories/${d.slug}/`} hrefLang={d.lang} lang={d.lang}>{d.lang === 'en' ? d.title : d.name}</a>
              </li>
            ))}
          </ul>
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
