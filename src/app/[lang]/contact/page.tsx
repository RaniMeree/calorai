import { load, pageMeta, type LangParams } from '@/lib/page';
import { PageHero } from '@/components/Sections';
import Icon from '@/components/Icon';
import { site } from '@/lib/site';

export async function generateMetadata(p: LangParams) {
  const { lang, t } = await load(p);
  return pageMeta(lang, 'contact', t.contactPage.title, t.contactPage.sub);
}

// Static site: no form backend, so every topic opens a pre-filled email.
const mail = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(`CalorAI: ${subject}`)}`;

export default async function Contact(p: LangParams) {
  const { lang, t } = await load(p);
  const c = t.contactPage;
  return (
    <>
      <PageHero heading={c.heading} sub={c.sub}>
        <a className="mail-big" href={`mailto:${site.email}`}><Icon name="mail" /> {site.email}</a>
        <p className="hero-note">{c.emailText}</p>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <h2 className="center mb">{c.topicsTitle}</h2>
          <div className="cards cards-3">
            {c.topics.map((topic) => (
              <a key={topic.title} className="card card-link" href={mail(topic.subject)}>
                <span className="card-ic"><Icon name={topic.icon} /></span>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
                <span className="more">{c.write} <Icon name="arrow" size={16} /></span>
              </a>
            ))}
          </div>
          <p className="center muted mt">
            {c.faqHint} <a href={`/${lang}/#faq`}>{c.faqLink}</a>. {c.deleteHint} <a href={`/${lang}/delete-account/`}>{c.deleteLink}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
