import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';
import StoreButtons from '@/components/StoreButtons';
import Phone from '@/components/Phone';
import Icon from '@/components/Icon';
import { Head, Proof, Cta, Spotlight } from '@/components/Sections';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getDictionary(isLocale(lang) ? lang : 'en');
  const h = t.home;

  return (
    <>
      {/* hero */}
      <section className="hero">
        <div className="hero-dots" aria-hidden="true" />
        <div className="wrap hero-in">
          <div className="hero-copy">
            <span className="pill"><Icon name="sparkle" size={16} /> {h.hero.badge}</span>
            <h1>{h.hero.title1}<br /><span className="hl">{h.hero.title2}</span></h1>
            <p className="lead">{h.hero.sub}</p>
            <StoreButtons t={t} />
            <Proof t={t} />
          </div>
          <div className="hero-art">
            <Phone screen="scan-burger" alt={h.hero.cardName} priority className="hero-phone" />
            <div className="float float-a">
              <svg className="ring" viewBox="0 0 44 44" aria-hidden="true">
                <circle cx="22" cy="22" r="18" fill="none" stroke="#E7F6EC" strokeWidth="6" />
                <circle cx="22" cy="22" r="18" fill="none" stroke="#16A34A" strokeWidth="6" strokeLinecap="round"
                  strokeDasharray="113" strokeDashoffset="40" transform="rotate(-90 22 22)" />
              </svg>
              <span><b>860</b><small>{h.hero.cardLeft}</small></span>
            </div>
            <div className="float float-b">
              <span className="ok"><Icon name="check" size={18} /></span>
              <span><b>{h.hero.cardSaved}</b><small>{h.hero.cardName} · 1,140 {h.hero.cardKcal}</small></span>
            </div>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="section" id="how">
        <div className="wrap">
          <Head eyebrow={h.how.eyebrow} title={h.how.title} />
          <ol className="steps">
            {h.how.steps.map((s, i) => (
              <li key={i} className="step">
                <Phone screen={['scan-salad', 'scan-eggs', 'today'][i]} alt={s.title} className="step-phone" />
                <div className="step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* features grid */}
      <section className="section section-tint" id="features">
        <div className="wrap">
          <Head eyebrow={h.features.eyebrow} title={h.features.title} sub={h.features.sub} />
          <div className="cards">
            {h.features.items.map((f) => (
              <div key={f.title} className="card">
                <span className="card-ic"><Icon name={f.icon} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* feature spotlights */}
      {h.spotlight.map((s, i) => <Spotlight key={s.screen} item={s} flip={i % 2 === 1} />)}

      {/* screenshot strip */}
      <section className="section section-tint">
        <div className="wrap">
          <Head eyebrow={h.screens.eyebrow} title={h.screens.title} />
        </div>
        <div className="strip" tabIndex={0}>
          {['today', 'scan-salmon', 'workouts', 'weight-goal', 'calendar-protein', 'coach', 'scan-bowl'].map((s) => (
            <Phone key={s} screen={s} alt="" />
          ))}
        </div>
      </section>

      {/* faq */}
      <section className="section" id="faq">
        <div className="wrap narrow">
          <Head eyebrow={h.faq.eyebrow} title={h.faq.title} />
          <div className="faq">
            {h.faq.items.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <Cta t={t} />
    </>
  );
}
