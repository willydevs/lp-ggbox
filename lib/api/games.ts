import type { Game, CatalogResponse, GameFilters } from '@/types/game';
import { CatalogResponseSchema } from './schemas';
import { MOCK_GAMES } from './mock-games';

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? 'https://license-multijogos.vercel.app';

async function apiFetch<T>(
  url: string,
  schema: { safeParse: (data: unknown) => { success: true; data: T } | { success: false; error: unknown } },
  fallback: T,
): Promise<T> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600, tags: ['games'] },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json: unknown = await res.json();
    const result = schema.safeParse(json);

    if (!result.success) {
      console.warn('[GGBOX API] Schema validation failed, using fallback');
      return fallback;
    }

    return result.data;
  } catch {
    console.warn('[GGBOX API] Fetch failed, using fallback');
    return fallback;
  }
}

export interface GameQueryParams {
  system: string;
  q?: string;
  page?: number;
  limit?: number;
  pack_id?: string;
}

export async function getGamesCatalog(
  params: GameQueryParams,
): Promise<CatalogResponse> {
  const url = new URL(`${API_BASE}/api/catalog/games`);
  url.searchParams.set('system', params.system);
  if (params.q) url.searchParams.set('q', params.q);
  if (params.page) url.searchParams.set('page', String(params.page));
  if (params.limit) url.searchParams.set('limit', String(params.limit));
  if (params.pack_id) url.searchParams.set('pack_id', params.pack_id);

  const fallback: CatalogResponse = {
    system: params.system,
    total: MOCK_GAMES.length,
    page: 1,
    limit: 50,
    pages: 1,
    games: MOCK_GAMES,
  };

  return apiFetch(url.toString(), CatalogResponseSchema, fallback);
}

export async function getGameBySlug(slug: string): Promise<Game | null> {
  const system = slug.split('-')[0] ?? 'ps2';

  const catalog = await getGamesCatalog({ system, limit: 200 });
  const game = catalog.games.find(
    (g) =>
      g.name.toLowerCase().replace(/\s+/g, '-') === slug ||
      String(g.id) === slug,
  );

  return game ?? null;
}

export async function searchGames(
  query: string,
  filters: GameFilters,
): Promise<Game[]> {
  const catalog = await getGamesCatalog({
    system: filters.system ?? 'ps2',
    q: query,
    page: filters.page ?? 1,
    limit: filters.limit ?? 50,
  });

  return catalog.games;
}

export async function getConsolesList(): Promise<string[]> {
  return [
    'ps5', 'ps4', 'ps3', 'ps2', 'psx', 'psp',
    'xboxone', 'xbox360', 'xbox',
    'switch', 'wiiu', 'wii', 'gamecube', 'n64', 'snes', 'nes', 'nds',
    'megadrive', 'saturn', 'dreamcast', 'mastersystem',
  ];
}
