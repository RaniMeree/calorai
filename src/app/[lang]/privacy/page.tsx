import { load, pageMeta, type LangParams } from '@/lib/page';
import { PageHero } from '@/components/Sections';
import Privacy, { privacyUpdated } from '@/content/Privacy';

export async function generateMetadata(p: LangParams) {
  const { lang, t } = await load(p);
  return pageMeta(lang, 'privacy', t.nav.privacy, t.meta.description);
}

export default async function PrivacyPage(p: LangParams) {
  const { lang, t } = await load(p);
  return (
    <>
      <PageHero heading={t.nav.privacy} sub={`${t.legal.updated}: ${privacyUpdated}`} />
      <section className="section">
        <div className="wrap narrow prose" lang="en" dir="ltr"><Privacy lang={lang} /></div>
      </section>
    </>
  );
}
