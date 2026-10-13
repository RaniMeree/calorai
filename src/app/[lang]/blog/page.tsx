import { load, pageMeta, type LangParams } from '@/lib/page';
import { PageHero, Cta } from '@/components/Sections';
import { posts } from '@/content/posts';

export async function generateMetadata(p: LangParams) {
  const { lang, t } = await load(p);
  return pageMeta(lang, 'blog', t.blogPage.title, t.blogPage.sub);
}

export default async function Blog(p: LangParams) {
  const { lang, t } = await load(p);
  const [first, ...rest] = posts;
  return (
    <>
      <PageHero heading={t.blogPage.heading} sub={t.blogPage.sub} />
      <section className="section">
        <div className="wrap">
          <a className="post-feature" href={`/${lang}/blog/${first.slug}/`}>
            <img src={`/blog/${first.cover}.webp`} alt="" width={1200} height={675} />
            <div>
              <span className="tag">{first.category}</span>
              <h2>{first.title}</h2>
              <p className="lead">{first.description}</p>
              <span className="more">{t.blogPage.read} →</span>
            </div>
          </a>
          <div className="post-grid" lang="en">
            {rest.map((post) => (
              <a key={post.slug} className="post-card" href={`/${lang}/blog/${post.slug}/`}>
                <img src={`/blog/${post.cover}.webp`} alt="" width={1200} height={675} loading="lazy" />
                <div className="post-card-body">
                  <span className="tag">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <small>{post.minutes} {t.blogPage.minRead}</small>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Cta t={t} />
    </>
  );
}
