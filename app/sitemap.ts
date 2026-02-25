import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://almarshoud-contracting.sa';
  const languages = ['en', 'ar'];
  const pages = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/testimonials',
    '/careers',
    '/contact',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Generate URLs for each language and page
  languages.forEach((lang) => {
    pages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${lang}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page}`,
            ar: `${baseUrl}/ar${page}`,
          },
        },
      });
    });
  });

  return sitemap;
}
