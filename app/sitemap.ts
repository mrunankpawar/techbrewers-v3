import type { MetadataRoute } from 'next';

const SITE = 'https://techthrusters.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/community`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/events`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/meetup`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/talks`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/sign-up`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
  ];
}
