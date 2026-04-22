import type { MetadataRoute } from 'next';
import { getConsolesList } from '@/lib/api/games';

const BASE_URL = 'https://ggbox.com.br';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const systems = await getConsolesList();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/jogos`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/login`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ];

  const systemRoutes: MetadataRoute.Sitemap = systems.map((system) => ({
    url: `${BASE_URL}/jogos?system=${system}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...systemRoutes];
}
