import { load, pageMeta, type LangParams } from '@/lib/page';
import { PageHero, Spotlight, Cta } from '@/components/Sections';
import StoreButtons from '@/components/StoreButtons';

export async function generateMetadata(p: LangParams) {
  const { lang, t } = await load(p);
  return pageMeta(lang, 'features', t.featuresPage.title, t.featuresPage.sub);
}

export default async function Features(p: LangParams) {
  const { t } = await load(p);
  const f = t.featuresPage;
  return (
    <>
      <PageHero heading={f.heading} sub={f.sub}><StoreButtons t={t} /></PageHero>
      {f.items.map((item, i) => <Spotlight key={item.screen} item={item} flip={i % 2 === 1} />)}
      <Cta t={t} />
    </>
  );
}
