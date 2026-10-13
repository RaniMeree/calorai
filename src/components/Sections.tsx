import type { Dictionary } from '@/i18n/getDictionary';
import { site } from '@/lib/site';
import StoreButtons from './StoreButtons';
import Phone from './Phone';
import Icon from './Icon';

// Building blocks shared by the landing page and the inner pages.

// Green title band at the top of inner pages.
export function PageHero({ heading, sub, children }: { heading: string; sub?: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero">
      <div className="hero-dots" aria-hidden="true" />
      <div className="wrap page-hero-in">
        <h1>{heading}</h1>
        {sub && <p className="lead">{sub}</p>}
        {children}
      </div>
    </section>
  );
}

// Phone screenshot next to a heading, text and tick list; alternates sides.
export function Spotlight({ item, flip }: {
  item: { eyebrow: string; title: string; text: string; points: string[]; screen: string }; flip: boolean;
}) {
  return (
    <section className={`section spot${flip ? ' spot-flip' : ''}`}>
      <div className="wrap spot-in">
        <div className="spot-art"><div className="spot-bg" /><Phone screen={item.screen} alt={item.title} /></div>
        <div className="spot-copy">
          <span className="eyebrow">{item.eyebrow}</span>
          <h2>{item.title}</h2>
          <p className="lead">{item.text}</p>
          <ul className="ticks">{item.points.map((p) => <li key={p}><Icon name="check" size={18} />{p}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

export function Head({ eyebrow, title, sub, as = 'h2' }:
  { eyebrow?: string; title: string; sub?: string; as?: 'h1' | 'h2' }) {
  const H = as;
  return (
    <div className="head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <H>{title}</H>
      {sub && <p className="lead">{sub}</p>}
    </div>
  );
}

export function Proof({ t }: { t: Dictionary }) {
  return (
    <div className="proof">
      <span><b className="stars">★★★★★</b> <b>{site.rating}</b> {t.proof.rating}</span>
      <span><b>{site.downloads}</b> {t.proof.downloads}</span>
      <span><b>{site.languages}</b> {t.proof.languages}</span>
    </div>
  );
}

export function Cta({ t }: { t: Dictionary }) {
  return (
    <section className="cta">
      <div className="wrap cta-in">
        <img src="/app-icon.png" alt="" width={88} height={88} className="cta-icon" />
        <h2>{t.home.cta.title}</h2>
        <p className="lead">{t.home.cta.sub}</p>
        <StoreButtons t={t} />
      </div>
    </section>
  );
}
