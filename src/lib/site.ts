export const site = {
  name: 'CalorAI',
  url: 'https://www.calor-ai.com',  // Render serves www; calor-ai.com redirects here
  email: 'info@calor-ai.com',
  company: 'Intellivation AB',
  playStore: 'https://play.google.com/store/apps/details?id=com.caloraiapp.app',
  appStore: 'https://apps.apple.com/app/id6742805996',
  rating: '4.4',
  downloads: '140,000+',
  languages: 18,
};

// Page slugs, shared by the header, footer and sitemap.
export const pages = ['features', 'how-it-works', 'blog', 'about', 'contact', 'download'] as const;
export const legalPages = ['privacy', 'terms', 'delete-account'] as const;
