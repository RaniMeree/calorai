import { load, pageMeta, type LangParams } from '@/lib/page';
import { PageHero } from '@/components/Sections';
import Icon from '@/components/Icon';
import { site } from '@/lib/site';

export async function generateMetadata(p: LangParams) {
  const { lang, t } = await load(p);
  return pageMeta(lang, 'delete-account', t.deletePage.title, t.deletePage.sub);
}

// Linked from Google Play's "Delete account URL" field, so it must work without the app.
export default async function DeleteAccount(p: LangParams) {
  const { t } = await load(p);
  const d = t.deletePage;
  return (
    <>
      <PageHero heading={d.heading} sub={d.sub} />
      <section className="section">
        <div className="wrap narrow prose">
          <h2>{d.inAppTitle}</h2>
          <ol className="num-steps">{d.steps.map((s) => <li key={s}>{s}</li>)}</ol>
          <h2>{d.whatTitle}</h2>
          <p>{d.what}</p>
          <h2>{d.subsTitle}</h2>
          <p>{d.subs}</p>
          <h2>{d.noAppTitle}</h2>
          <p>{d.noApp}</p>
          <p>
            <a className="btn btn-primary" href={`mailto:${site.email}?subject=${encodeURIComponent(d.emailSubject)}`}>
              <Icon name="mail" size={18} /> {site.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
