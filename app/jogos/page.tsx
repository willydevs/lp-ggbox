import type { Metadata } from 'next';
import { Suspense } from 'react';
import { GameGridSkeleton } from '@/components/ui/Skeleton';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Catálogo de Jogos',
  description:
    'Explore mais de 250.000 jogos em 143 sistemas. PS2, PS4, Switch, SNES, Mega Drive e muito mais.',
};

// GamesCatalog será implementado na Fase 3
export default function JogosPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pt-24 px-6">
      <div className="max-w-[1600px] mx-auto">
        <h1 className="font-display text-4xl font-black italic tracking-tight text-white mb-8">
          CATÁLOGO DE JOGOS
        </h1>
        <Suspense fallback={<GameGridSkeleton count={20} />}>
          <GameGridSkeleton count={20} />
        </Suspense>
      </div>
    </main>
  );
}
