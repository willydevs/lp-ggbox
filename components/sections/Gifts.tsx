import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

const GIFTS = [
  {
    name: 'Pack Gamer',
    desc: 'PS4, PS5, Xbox One e mais',
    image: '/images/imgi_4_gamer.webp',
  },
  {
    name: 'Pack Nostalgia',
    desc: 'SNES, PS1, PS2, Mega Drive',
    image: '/images/imgi_3_nostalgia.webp',
  },
  {
    name: 'Pack Exclusivo',
    desc: 'Títulos raros e especiais',
    image: '/images/imgi_5_exclusivo.webp',
  },
  {
    name: 'Pack Android & iOS',
    desc: 'Jogue no celular também',
    image: '/images/imgi_5_android-ios.webp',
  },
];

export function Gifts() {
  return (
    <section id="brindes" className="py-24 bg-background-card" aria-label="Brindes exclusivos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="hot" className="mb-5">🎁 BRINDES EXCLUSIVOS</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Packs inclusos{' '}
            <span className="bg-primary-gradient bg-clip-text text-transparent">de graça</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Com qualquer compra você leva esses packs para sempre. Sem pegadinha.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {GIFTS.map((gift) => (
            <article
              key={gift.name}
              className="group glass overflow-hidden"
            >
              <div className="aspect-video relative bg-background-elevated overflow-hidden">
                <Image
                  src={gift.image}
                  alt={gift.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Badge variant="glass" className="text-[9px]">GRÁTIS</Badge>
                </div>
              </div>
              <div className="p-4">
                <p className="font-bold text-white text-sm line-clamp-1">{gift.name}</p>
                <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">{gift.desc}</p>
                <p className="text-xs text-success font-bold mt-1">INCLUSO</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="whatsapp" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              Falar com atendente
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
