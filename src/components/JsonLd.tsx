import { site } from '@/lib/site';

// Structured data (schema.org) so search engines and AI assistants read the
// app's facts directly instead of guessing them from page text.
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const siteSchema = (description: string) => [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.company,
    url: site.url,
    logo: `${site.url}/app-icon.png`,
    email: site.email,
    address: { '@type': 'PostalAddress', addressCountry: 'SE' },
    sameAs: ['https://www.wikidata.org/wiki/Q141779976'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: site.name,
    alternateName: 'CalorAI: AI Calorie Counter',
    description,
    url: site.url,
    image: `${site.url}/app-icon.png`,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Android, iOS',
    inLanguage: ['en', 'ar', 'da', 'de', 'el', 'es', 'fa', 'fi', 'fr', 'hi', 'it', 'ja', 'ku', 'nl', 'pt', 'ru', 'sv', 'tr'],
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@type': 'Organization', name: site.company },
    sameAs: [site.playStore, site.appStore, 'https://www.wikidata.org/wiki/Q141779988'],
  },
];

export const faqSchema = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
