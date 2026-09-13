import { MetadataRoute } from 'next';

const BASE_URL = 'https://geetprince.me';

// Keep blog slugs in one place — mirrors the posts array in app/blog/page.tsx
const blogSlugs = [
  'scaling-verse-music-sync',
  'building-competitive-programming-analytics',
  'zero-cost-event-management',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
