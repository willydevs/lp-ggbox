import type { Metadata } from 'next';
import { getGameBySlug, getConsolesList } from '@/lib/api/games';
import { videoGameJsonLd } from '@/lib/seo';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const systems = await getConsolesList();
  // Gera params para os primeiros jogos de cada sistema em build time
  // A maioria será gerada on-demand com ISR
  return systems.map((system) => ({ slug: `${system}-placeholder` }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = await getGameBySlug(params.slug);
  if (!game) return { title: 'Jogo não encontrado' };

  return {
    title: game.name,
    description: `${game.name} para ${game.system.toUpperCase()} — disponível no GGBOX.`,
    openGraph: {
      images: game.cover_url ? [{ url: game.cover_url }] : [],
    },
  };
}

export default async function GameDetailPage({ params }: Props) {
  const game = await getGameBySlug(params.slug);
  if (!game) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameJsonLd(game)) }}
      />
      <main id="main-content" className="min-h-screen bg-background pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-white">{game.name}</h1>
          <p className="text-zinc-400 mt-2">{game.system.toUpperCase()}</p>
        </div>
      </main>
    </>
  );
}
