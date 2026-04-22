'use client';

import { useState, useCallback, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChevronLeft, ChevronRight, Gamepad2, SlidersHorizontal, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { GameCard } from './GameCard';
import { SearchBar } from './SearchBar';
import { SortDropdown, type SortOption } from './SortDropdown';
import { FilterSidebar, PLATFORM_GROUPS } from './FilterSidebar';
import { GameGridSkeleton } from '@/components/ui/Skeleton';
import { useDebounce } from '@/hooks/useDebounce';
import type { Game, CatalogResponse } from '@/types/game';
import { cn } from '@/lib/utils';

const LIMIT = 28;

async function fetchGames(system: string, q: string, page: number): Promise<CatalogResponse> {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_API_URL ?? 'https://license-multijogos.vercel.app'}/api/catalog/games`,
  );
  url.searchParams.set('system', system);
  url.searchParams.set('page', String(page));
  url.searchParams.set('limit', String(LIMIT));
  if (q) url.searchParams.set('q', q);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<CatalogResponse>;
}

function sortGames(games: Game[], sort: SortOption): Game[] {
  if (sort === 'default') return games;
  return [...games].sort((a, b) => {
    const cmp = a.name.localeCompare(b.name, 'pt-BR');
    return sort === 'name-asc' ? cmp : -cmp;
  });
}

function Pagination({
  page,
  total,
  onPage,
  color,
}: {
  page: number;
  total: number;
  onPage: (p: number) => void;
  color: string;
}) {
  if (total <= 1) return null;
  const pages = Math.min(total, 7);
  const start =
    total <= 7 ? 1
    : page <= 4 ? 1
    : page >= total - 3 ? total - 6
    : page - 3;

  return (
    <div className="flex justify-center items-center gap-2 pt-6" role="navigation" aria-label="Paginação">
      <button
        onClick={() => onPage(page - 1)}
        disabled={page === 1}
        aria-label="Página anterior"
        className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center disabled:opacity-30 transition-all border border-white/8"
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from({ length: pages }, (_, i) => {
        const p = start + i;
        const active = p === page;
        return (
          <button
            key={p}
            onClick={() => onPage(p)}
            aria-label={`Ir para página ${p}`}
            aria-current={active ? 'page' : undefined}
            className="w-10 h-10 rounded-xl text-sm font-bold transition-all border"
            style={
              active
                ? { background: color, borderColor: color, color: '#fff' }
                : undefined
            }
            {...(!active && {
              className:
                'w-10 h-10 rounded-xl text-sm font-bold transition-all border bg-white/5 text-zinc-500 border-white/8 hover:bg-white/10 hover:text-white',
            })}
          >
            {p}
          </button>
        );
      })}

      <button
        onClick={() => onPage(page + 1)}
        disabled={page === total}
        aria-label="Próxima página"
        className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center disabled:opacity-30 transition-all border border-white/8"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export interface GamesCatalogProps {
  initialSystem?: string;
}

export function GamesCatalog({ initialSystem = 'ps4' }: GamesCatalogProps) {
  const [system, setSystem] = useState(initialSystem);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortOption>('default');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const debouncedSearch = useDebounce(search, 300);

  const activePlatform = useMemo(
    () => PLATFORM_GROUPS.find((g) => g.systems.some((s) => s.id === system)),
    [system],
  );
  const platformColor = activePlatform?.color ?? '#7c3aed';
  const systemLabel = activePlatform?.systems.find((s) => s.id === system)?.label ?? system.toUpperCase();

  const { data, isFetching, isError } = useQuery({
    queryKey: ['games', system, debouncedSearch, page],
    queryFn: () => fetchGames(system, debouncedSearch, page),
    placeholderData: (prev) => prev,
  });

  const games = useMemo(
    () => sortGames(data?.games ?? [], sort),
    [data?.games, sort],
  );

  const handleSystem = useCallback((s: string) => {
    setSystem(s);
    setPage(1);
    setSearch('');
    setDrawerOpen(false);
  }, []);

  const handleSearch = useCallback((v: string) => {
    setSearch(v);
    setPage(1);
  }, []);

  const handleSort = useCallback((v: SortOption) => {
    setSort(v);
    setPage(1);
  }, []);

  const handlePage = useCallback((p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex gap-8">
      {/* Sidebar desktop */}
      <aside className="hidden lg:block w-52 flex-shrink-0 pt-1" aria-label="Filtros">
        <FilterSidebar activeSystem={system} onSystemChange={handleSystem} />
      </aside>

      {/* Conteúdo principal */}
      <div className="flex-1 min-w-0">
        {/* Header do catálogo */}
        <div
          className={cn(
            'rounded-2xl border border-white/8 mb-6 p-5 transition-all duration-500',
          )}
          style={{ background: `${platformColor}11` }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10"
                style={{ background: `${platformColor}22` }}
              >
                <Gamepad2 size={20} style={{ color: platformColor }} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-black italic tracking-tight text-white">
                  {activePlatform?.name ?? 'Catálogo'} · {systemLabel}
                </h2>
                <p className="text-xs font-bold uppercase tracking-widest mt-0.5" style={{ color: platformColor }}>
                  {!isFetching && data ? `${data.total} jogos` : 'Carregando...'}
                </p>
              </div>
            </div>

            {/* Mobile: botão de filtro */}
            <button
              className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-zinc-300"
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir filtros"
            >
              <SlidersHorizontal size={15} aria-hidden="true" />
              Filtrar
            </button>
          </div>

          {/* Busca + Sort */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mt-4">
            <SearchBar value={search} onChange={handleSearch} />
            <SortDropdown value={sort} onChange={handleSort} />
          </div>
        </div>

        {/* Grid */}
        {isFetching && !data ? (
          <GameGridSkeleton count={LIMIT} />
        ) : isError ? (
          <div className="py-20 text-center text-zinc-500">
            Erro ao carregar jogos. Tente novamente.
          </div>
        ) : games.length === 0 ? (
          <div className="py-24 text-center flex flex-col items-center gap-4">
            <Gamepad2 size={48} className="text-white/10" aria-hidden="true" />
            <p className="text-zinc-400 font-bold text-lg">Nenhum jogo encontrado</p>
            {search && (
              <p className="text-zinc-600 text-sm">
                Sem resultados para &ldquo;{search}&rdquo; em {systemLabel}
              </p>
            )}
          </div>
        ) : (
          <div
            className={cn(
              'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4',
              isFetching && 'opacity-60 pointer-events-none transition-opacity',
            )}
          >
            {games.map((game, i) => (
              <GameCard key={game.id} game={game} priority={i < 10} />
            ))}
          </div>
        )}

        {/* Paginação */}
        {data && data.pages > 1 && (
          <Pagination
            page={page}
            total={data.pages}
            onPage={handlePage}
            color={platformColor}
          />
        )}
      </div>

      {/* Drawer mobile de filtros */}
      <Dialog.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 lg:hidden" />
          <Dialog.Content className="fixed inset-y-0 left-0 z-50 w-72 bg-background-card border-r border-white/8 p-6 overflow-y-auto lg:hidden">
            <div className="flex items-center justify-between mb-6">
              <Dialog.Title className="font-bold text-white">Filtros</Dialog.Title>
              <Dialog.Close asChild>
                <button aria-label="Fechar filtros" className="text-zinc-500 hover:text-white p-1">
                  <X size={18} />
                </button>
              </Dialog.Close>
            </div>
            <FilterSidebar activeSystem={system} onSystemChange={handleSystem} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
