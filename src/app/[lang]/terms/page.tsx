import { load, pageMeta, type LangParams } from '@/lib/page';
import { PageHero } from '@/components/Sections';
import Terms, { termsUpdated } from '@/content/Terms';

export async function generateMetadata(p: LangParams) {
  const { lang, t } = await load(p);
  return pageMeta(lang, 'terms', t.nav.terms, t.meta.description, true);
}

export default async function TermsPage(p: LangParams) {
  const { lang, t } = await load(p);
  return (
    <>
      <PageHero heading={t.nav.terms} sub={`${t.legal.updated}: ${termsUpdated}`} />
      <section className="section">
        <div className="wrap narrow prose" lang="en" dir="ltr"><Terms lang={lang} /></div>
      </section>
    </>
  );
}
