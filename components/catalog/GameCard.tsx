import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Gamepad2, Play } from 'lucide-react';
import type { Game } from '@/types/game';

export interface GameCardProps {
  game: Game;
  priority?: boolean;
}

const BLUR_PLACEHOLDER =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k=';

const CONSOLE_LABELS: Record<string, string> = {
  ps5: 'PS5', ps4: 'PS4', ps3: 'PS3', ps2: 'PS2', psx: 'PS1', psp: 'PSP',
  xboxone: 'Xbox One', xbox360: 'Xbox 360', xbox: 'Xbox',
  switch: 'Switch', wiiu: 'Wii U', wii: 'Wii', gamecube: 'GameCube',
  n64: 'N64', snes: 'SNES', nes: 'NES', nds: 'NDS',
  megadrive: 'Mega Drive', saturn: 'Saturn', dreamcast: 'Dreamcast', mastersystem: 'Master System',
};

function GameCardInner({ game, priority = false }: GameCardProps) {
  const slug = `${game.system}-${game.id}`;
  const consoleLabel = CONSOLE_LABELS[game.system] ?? game.system.toUpperCase();

  return (
    <Link
      href={`/jogos/${slug}`}
      className="group block"
      aria-label={`Ver detalhes de ${game.name} para ${consoleLabel}`}
    >
      {/* Container com aspect ratio fixo — evita CLS */}
      <div className="aspect-[3/4] rounded-xl overflow-hidden relative bg-background-elevated border border-white/8 shadow-lg">
        {game.cover_url ? (
          <Image
            src={game.cover_url}
            alt={`Capa de ${game.name} para ${consoleLabel}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
            priority={priority}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-zinc-700">
            <Gamepad2 size={36} className="mb-2 opacity-30" aria-hidden="true" />
            <span className="text-[9px] font-bold tracking-widest uppercase opacity-30">
              Sem capa
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
          <p className="text-white font-bold text-xs leading-tight line-clamp-2">{game.name}</p>
          {game.video_url && (
            <div className="flex items-center gap-1 mt-2">
              <Play size={10} className="text-primary-400" aria-hidden="true" />
              <span className="text-[9px] text-primary-400 font-bold uppercase tracking-wide">
                Preview
              </span>
            </div>
          )}
        </div>

        {/* Badge console (top-left) */}
        <div className="absolute top-2 left-2">
          <span className="bg-black/70 backdrop-blur-sm text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full text-white/70">
            {consoleLabel}
          </span>
        </div>

        {/* Badge tamanho (top-right) */}
        {game.size_label && (
          <div className="absolute top-2 right-2">
            <span className="bg-black/70 backdrop-blur-sm text-[9px] font-bold px-2 py-0.5 rounded-full text-white/50">
              {game.size_label}
            </span>
          </div>
        )}
      </div>

      <p className="mt-2 text-xs font-bold truncate px-0.5 text-zinc-300 group-hover:text-white transition-colors">
        {game.name}
      </p>
    </Link>
  );
}

export const GameCard = memo(GameCardInner);
GameCard.displayName = 'GameCard';
