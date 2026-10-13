import { load, pageMeta, type LangParams } from '@/lib/page';
import { PageHero, Cta } from '@/components/Sections';
import Phone from '@/components/Phone';
import Icon from '@/components/Icon';

export async function generateMetadata(p: LangParams) {
  const { lang, t } = await load(p);
  return pageMeta(lang, 'how-it-works', t.howPage.title, t.howPage.sub);
}

export default async function HowItWorks(p: LangParams) {
  const { t } = await load(p);
  const h = t.howPage;
  return (
    <>
      <PageHero heading={h.heading} sub={h.sub} />
      <section className="section">
        <div className="wrap">
          <ol className="timeline">
            {h.steps.map((s, i) => (
              <li key={s.title} className={i % 2 ? 'flip' : ''}>
                <div className="tl-art"><Phone screen={s.screen} alt={s.title} /></div>
                <div className="tl-copy">
                  <span className="step-num">{i + 1}</span>
                  <h2>{s.title}</h2>
                  <p className="lead">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap narrow">
          <h2 className="center">{h.tipsTitle}</h2>
          <ul className="ticks tips">{h.tips.map((tip) => <li key={tip}><Icon name="check" size={18} />{tip}</li>)}</ul>
        </div>
      </section>
      <Cta t={t} />
    </>
  );
}
