import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { GamesCatalog } from '@/components/catalog/GamesCatalog';
import { GameGridSkeleton } from '@/components/ui/Skeleton';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Catálogo de Jogos',
  description:
    'Explore mais de 250.000 jogos em 143 sistemas. PS2, PS4, Switch, SNES, Mega Drive e muito mais.',
  openGraph: {
    title: 'Catálogo de Jogos | GGBOX',
    description: 'Mais de 250.000 títulos organizados por plataforma.',
  },
};

export default function JogosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background pt-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-8">
          <header className="mb-8">
            <h1 className="font-display text-4xl font-black italic tracking-tight text-white">
              CATÁLOGO DE JOGOS
            </h1>
            <p className="text-zinc-500 mt-1 text-sm">
              +250.000 títulos · +143 sistemas · busca e filtro em tempo real
            </p>
          </header>

          <Suspense fallback={<GameGridSkeleton count={28} />}>
            <GamesCatalog initialSystem="ps4" />
          </Suspense>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
