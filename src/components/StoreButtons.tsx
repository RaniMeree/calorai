import { site } from '@/lib/site';
import type { Dictionary } from '@/i18n/getDictionary';

const Play = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 2.8v18.4c0 .4.4.6.7.4L15 12 4.7 2.4c-.3-.2-.7 0-.7.4z" fill="#34C759" />
    <path d="M15 12l3.3 3.1 3-1.7c.9-.5.9-1.8 0-2.3l-3-1.7z" fill="#FFD23F" />
    <path d="M4.7 21.6L15 12l3.3 3.1-12.6 7c-.4.2-.8-.1-1-.5z" fill="#FF5A5F" />
    <path d="M4.7 2.4L15 12l3.3-3.1-12.6-7c-.4-.2-.8.1-1 .5z" fill="#4AA8FF" />
  </svg>
);
const Apple = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.7-1-2.7-4zM13.9 5c.7-.8 1.2-2 1-3.1-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z" />
  </svg>
);

export default function StoreButtons({ t, light = false }: { t: Dictionary; light?: boolean }) {
  return (
    <div className={`stores${light ? ' stores-light' : ''}`}>
      <a className="store" href={site.playStore} target="_blank" rel="noopener">
        <Play />
        <span><small>{t.store.googleTop}</small><b>{t.store.google}</b></span>
      </a>
      <a className="store" href={site.appStore} target="_blank" rel="noopener">
        <Apple />
        <span><small>{t.store.appleTop}</small><b>{t.store.apple}</b></span>
      </a>
    </div>
  );
}
