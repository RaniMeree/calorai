import { load, pageMeta, type LangParams } from '@/lib/page';
import { PageHero, Cta } from '@/components/Sections';
import Phone from '@/components/Phone';
import Icon from '@/components/Icon';

export async function generateMetadata(p: LangParams) {
  const { lang, t } = await load(p);
  return pageMeta(lang, 'about', t.aboutPage.title, t.aboutPage.sub);
}

export default async function About(p: LangParams) {
  const { t } = await load(p);
  const a = t.aboutPage;
  return (
    <>
      <PageHero heading={a.heading} sub={a.sub} />
      <section className="section">
        <div className="wrap spot-in">
          <div className="spot-art"><div className="spot-bg" /><Phone screen="scan-chicken" alt="" /></div>
          <div className="spot-copy">
            <span className="eyebrow">{a.missionTitle}</span>
            <p className="lead big">{a.mission}</p>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap">
          <h2 className="center mb">{a.valuesTitle}</h2>
          <div className="cards">
            {a.values.map((v) => (
              <div key={v.title} className="card">
                <span className="card-ic"><Icon name={v.icon} /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap narrow center">
          <h2 className="mb-s">{a.companyTitle}</h2>
          <p className="lead">{a.company}</p>
        </div>
      </section>
      <Cta t={t} />
    </>
  );
}
