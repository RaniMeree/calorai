import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { locales, isLocale, dir } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';
import { site } from '@/lib/site';
import { seo } from '@/lib/page';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext', 'greek', 'cyrillic'], display: 'swap', variable: '--font-inter' });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> },
): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = await getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: t.meta.title, template: `%s | ${site.name}` },
    description: t.meta.description,
    icons: { icon: '/app-icon.png', apple: '/app-icon.png' },
    ...seo(lang, ''),
    openGraph: { type: 'website', siteName: site.name, title: t.meta.title, description: t.meta.description, locale: lang },
  };
}

export default async function LangLayout(
  { children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> },
) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  return (
    <html lang={lang} dir={dir(lang)} className={inter.variable}>
      <body>
        <Header lang={lang} t={t} />
        <main>{children}</main>
        <Footer lang={lang} t={t} />
      </body>
    </html>
  );
}
