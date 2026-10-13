import { load, pageMeta, type LangParams } from '@/lib/page';
import { PageHero, Proof } from '@/components/Sections';
import Phone from '@/components/Phone';
import Icon from '@/components/Icon';
import { site } from '@/lib/site';

export async function generateMetadata(p: LangParams) {
  const { lang, t } = await load(p);
  return pageMeta(lang, 'download', t.downloadPage.title, t.downloadPage.sub);
}

export default async function Download(p: LangParams) {
  const { t } = await load(p);
  const d = t.downloadPage;
  const stores = [
    { href: site.playStore, label: d.android, top: t.store.googleTop, name: t.store.google, screen: 'scan-burger' },
    { href: site.appStore, label: d.ios, top: t.store.appleTop, name: t.store.apple, screen: 'today' },
  ];
  return (
    <>
      <PageHero heading={d.heading} sub={d.sub}><Proof t={t} /></PageHero>
      <section className="section">
        <div className="wrap dl-grid">
          {stores.map((s) => (
            <a key={s.href} className="dl-card" href={s.href} target="_blank" rel="noopener">
              <Phone screen={s.screen} alt="" />
              <span className="dl-label">{s.label}</span>
              <span className="btn btn-primary">{s.top} {s.name} <Icon name="arrow" size={18} /></span>
            </a>
          ))}
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap narrow">
          <h2 className="center">{d.whyTitle}</h2>
          <ul className="ticks tips">{d.why.map((w) => <li key={w}><Icon name="check" size={18} />{w}</li>)}</ul>
        </div>
      </section>
    </>
  );
}
