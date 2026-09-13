import type { APIRoute } from 'astro';
import { site } from '@/data/site';
import { treatments } from '@/data/treatments';
import { goals } from '@/data/goals';

const staticPaths = [
  '/',
  '/treatments/',
  '/goals/',
  '/about/',
  '/results/',
  '/faqs/',
  '/contact/',
  '/privacy-policy/',
];

export const GET: APIRoute = () => {
  const paths = [
    ...staticPaths,
    ...treatments.map((t) => `/treatments/${t.slug}/`),
    ...goals.map((g) => `/goals/${g.slug}/`),
  ];

  const urls = paths
    .map((p) => {
      const loc = new URL(p, site.url).toString();
      const priority = p === '/' ? '1.0' : p.split('/').filter(Boolean).length === 1 ? '0.8' : '0.6';
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
