import { MetadataRoute } from 'next';

const BASE_URL = 'https://geetprince.me';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all well-behaved crawlers full access
        userAgent: '*',
        allow: '/',
        // Disallow Next.js internals that should never be indexed
        disallow: ['/api/', '/_next/'],
      },
      {
        // Block known AI training scrapers from the content
        userAgent: [
          'GPTBot',
          'Google-Extended',
          'CCBot',
          'anthropic-ai',
          'Claude-Web',
        ],
        disallow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
