'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { locales, languageNames, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/getDictionary';
import { pages } from '@/lib/site';
import Icon from './Icon';

export default function Header({ lang, t }: { lang: Locale; t: Dictionary }) {
  const [open, setOpen] = useState(false);
  const path = usePathname() || `/${lang}/`;
  const rest = path.split('/').slice(2).join('/');  // path after /<lang>/
  const nav = pages.filter((p) => p !== 'download');

  return (
    <header className="header">
      <div className="wrap header-in">
        <a href={`/${lang}/`} className="brand" aria-label="CalorAI home">
          <img src="/logo-white.png" alt="CalorAI" className="brand-word" width={124} height={40} />
        </a>
        <nav className={`nav${open ? ' open' : ''}`} aria-label="Main">
          {nav.map((p) => (
            <a key={p} href={`/${lang}/${p}/`} className={rest.startsWith(p) ? 'active' : ''}>{t.nav[p]}</a>
          ))}
          <a className="btn btn-primary nav-cta-mobile" href={`/${lang}/download/`}>{t.store.downloadFree}</a>
        </nav>
        <div className="header-tools">
          <label className="lang">
            <Icon name="globe" size={18} />
            <span className="sr-only">{t.nav.language}</span>
            <select value={lang} aria-label={t.nav.language}
              onChange={(e) => { location.href = `/${e.target.value}/${rest}`; }}>
              {locales.map((l) => <option key={l} value={l}>{languageNames[l]}</option>)}
            </select>
          </label>
          <a className="btn btn-primary btn-sm hide-mobile" href={`/${lang}/download/`}>{t.store.downloadFree}</a>
          <button className="menu-btn" aria-expanded={open} aria-label={t.nav.menu} onClick={() => setOpen(!open)}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
