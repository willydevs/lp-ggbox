import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Download, Gamepad2, HardDrive, Globe } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { getGameBySlug, getConsolesList } from '@/lib/api/games';
import { videoGameJsonLd } from '@/lib/seo';
import { WHATSAPP_URL } from '@/lib/constants';

interface Props {
  params: { slug: string };
}

export const revalidate = 3600;

export async function generateStaticParams() {
  const systems = await getConsolesList();
  return systems.map((system) => ({ slug: `${system}-placeholder` }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = await getGameBySlug(params.slug);
  if (!game) return { title: 'Jogo não encontrado' };

  const consoleLabel = game.system.toUpperCase();
  return {
    title: `${game.name} — ${consoleLabel}`,
    description: `${game.name} para ${consoleLabel}. Disponível no GGBOX com +250.000 jogos em 143 sistemas.`,
    openGraph: {
      title: `${game.name} | GGBOX`,
      images: game.cover_url ? [{ url: game.cover_url, alt: `Capa de ${game.name}` }] : [],
    },
  };
}

const CONSOLE_LABELS: Record<string, string> = {
  ps5: 'PlayStation 5', ps4: 'PlayStation 4', ps3: 'PlayStation 3',
  ps2: 'PlayStation 2', psx: 'PlayStation 1', psp: 'PSP',
  xboxone: 'Xbox One', xbox360: 'Xbox 360', xbox: 'Xbox',
  switch: 'Nintendo Switch', wiiu: 'Wii U', wii: 'Wii', gamecube: 'GameCube',
  n64: 'Nintendo 64', snes: 'Super Nintendo', nes: 'NES', nds: 'Nintendo DS',
  megadrive: 'Mega Drive', saturn: 'Saturn', dreamcast: 'Dreamcast', mastersystem: 'Master System',
};

export default async function GameDetailPage({ params }: Props) {
  if (params.slug.endsWith('-placeholder')) notFound();

  const game = await getGameBySlug(params.slug);
  if (!game) notFound();

  const consoleLabel = CONSOLE_LABELS[game.system] ?? game.system.toUpperCase();
  const jsonLd = videoGameJsonLd(game);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          {/* Back */}
          <Link
            href="/jogos"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Voltar ao catálogo
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10">
            {/* Capa */}
            <div className="flex-shrink-0">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-background-elevated border border-white/8 shadow-glow-primary">
                {game.cover_url ? (
                  <Image
                    src={game.cover_url}
                    alt={`Capa de ${game.name} para ${consoleLabel}`}
                    fill
                    className="object-cover"
                    sizes="280px"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-700">
                    <Gamepad2 size={48} aria-hidden="true" />
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-5">
              <div>
                <Badge variant="primary" className="mb-3">{consoleLabel}</Badge>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {game.name}
                </h1>
              </div>

              <dl className="grid grid-cols-2 gap-4">
                {game.region && (
                  <div className="glass p-4 rounded-xl">
                    <dt className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest mb-1">
                      <Globe size={12} aria-hidden="true" /> Região
                    </dt>
                    <dd className="text-white font-bold">{game.region}</dd>
                  </div>
                )}
                {game.size_label && (
                  <div className="glass p-4 rounded-xl">
                    <dt className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest mb-1">
                      <HardDrive size={12} aria-hidden="true" /> Tamanho
                    </dt>
                    <dd className="text-white font-bold">{game.size_label}</dd>
                  </div>
                )}
              </dl>

              {game.links.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">
                    <Download size={12} className="inline mr-1" aria-hidden="true" />
                    {game.links.length} link{game.links.length > 1 ? 's' : ''} de download
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {game.links.slice(0, 4).map((link, i) => (
                      <Badge key={i} variant="outline">
                        Parte {link.part_number}
                        {link.is_correction && ' (fix)'}
                      </Badge>
                    ))}
                    {game.links.length > 4 && (
                      <Badge variant="outline">+{game.links.length - 4} mais</Badge>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button variant="cta" size="lg" asChild>
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Olá! Quero baixar ${game.name} (${consoleLabel}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Obter acesso
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/jogos">Ver mais jogos</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
