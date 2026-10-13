import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/getDictionary';
import { site, legalPages } from '@/lib/site';
import StoreButtons from './StoreButtons';

export default function Footer({ lang, t }: { lang: Locale; t: Dictionary }) {
  const link = (p: string) => <li key={p}><a href={`/${lang}/${p}/`}>{t.nav[p as keyof Dictionary['nav']]}</a></li>;
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src="/logo-white.png" alt="CalorAI" width={124} height={42} />
          <p>{t.footer.tagline}</p>
          <StoreButtons t={t} />
        </div>
        <div>
          <h3>{t.footer.product}</h3>
          <ul>{['features', 'how-it-works', 'download'].map(link)}</ul>
        </div>
        <div>
          <h3>{t.footer.company}</h3>
          <ul>
            {['about', 'blog', 'contact'].map(link)}
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
        <div>
          <h3>{t.footer.legal}</h3>
          <ul>{legalPages.map(link)}</ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>{t.footer.disclaimer}</p>
        <p>© {new Date().getFullYear()} {site.company}. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
