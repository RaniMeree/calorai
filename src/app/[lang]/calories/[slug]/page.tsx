import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';
import { dishes, dishesFor, getDish, dishLabels, dishSources } from '@/content/dishes';
import { site } from '@/lib/site';
import PostBody from '@/components/PostBody';
import StoreButtons from '@/components/StoreButtons';
import { JsonLd, faqSchema } from '@/components/JsonLd';

type Params = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;

// Each dish exists only in its own language; static export needs the same slugs under every
// language, so the other combinations render the not-found page (noindex).
export function generateStaticParams() {
  return dishes.map((d) => ({ slug: d.slug }));
}

const resolve = async ({ params }: Params) => {
  const { lang: raw, slug } = await params;
  const lang: Locale = isLocale(raw) ? raw : 'en';
  return { lang, dish: getDish(lang, slug) };
};

export async function generateMetadata(p: Params): Promise<Metadata> {
  const { lang, dish } = await resolve(p);
  if (!dish) return {};
  const url = `/${lang}/calories/${dish.slug}/`;
  return {
    title: dish.title,
    description: dish.description,
    alternates: { canonical: url, languages: { [lang]: url } },
    openGraph: { type: 'article', title: dish.title, description: dish.description },
  };
}

export default async function DishPage(p: Params) {
  const { lang, dish } = await resolve(p);
  if (!dish) notFound();
  const t = await getDictionary(lang);
  const l = dishLabels[lang]!;
  const more = dishesFor(lang).filter((d) => d.slug !== dish.slug);
  const nutrition = {
    '@context': 'https://schema.org', '@type': 'Article', headline: dish.title, description: dish.description,
    datePublished: dish.date, inLanguage: lang,
    about: {
      '@type': 'Recipe', name: dish.name,
      nutrition: {
        '@type': 'NutritionInformation', servingSize: dish.serving, calories: `${dish.kcal} kcal`,
        proteinContent: `${dish.protein} g`, carbohydrateContent: `${dish.carbs} g`, fatContent: `${dish.fat} g`,
      },
    },
    author: { '@type': 'Organization', name: site.name }, publisher: { '@type': 'Organization', name: site.company },
  };

  return (
    <article>
      <JsonLd data={nutrition} />
      <JsonLd data={faqSchema(dish.faq)} />
      <header className="post-hero">
        <div className="wrap narrow">
          <a className="back" href={`/${lang}/blog/`}>← {t.nav.blog}</a>
          <h1>{dish.title}</h1>
          <p className="lead">{dish.description}</p>
        </div>
      </header>
      <div className="wrap narrow">
        <div className="dish-facts">
          <div className="dish-kcal"><b>{dish.kcal}</b><span>{l.kcal}</span></div>
          <div>
            <small>{l.perServing}: {dish.serving}</small>
            <ul>
              <li><b dir="ltr">{dish.protein} g</b>{l.protein}</li>
              <li><b dir="ltr">{dish.carbs} g</b>{l.carbs}</li>
              <li><b dir="ltr">{dish.fat} g</b>{l.fat}</li>
            </ul>
          </div>
        </div>
        <p className="dish-note">{l.estimate}</p>
        <div className="prose post-body">
          <PostBody post={dish} />
          <h2>{l.faq}</h2>
          {dish.faq.map((f) => (
            <div key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>
          ))}
          <aside className="post-cta">
            <img src="/app-icon.png" alt="" width={64} height={64} />
            <div>
              <b>{t.blogPage.ctaTitle}</b>
              <p>{t.blogPage.ctaText}</p>
              <StoreButtons t={t} />
            </div>
          </aside>
          {more.length > 0 && (
            <>
              <h2>{l.section}</h2>
              <ul>{more.map((d) => <li key={d.slug}><a href={`/${lang}/calories/${d.slug}/`}>{d.title}</a></li>)}</ul>
            </>
          )}
          <div className="sources">
            <h2>{l.sources}</h2>
            <ul>{(dishSources[lang] ?? []).map((s) => <li key={s}>{s}</li>)}</ul>
            <p>{t.footer.disclaimer}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
