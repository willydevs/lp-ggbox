import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

const GIFTS = [
  { name: 'GTA San Andreas', console: 'PC', image: '/images/brindes/gta-sa.webp' },
  { name: 'CS 1.6', console: 'PC', image: '/images/brindes/cs16.webp' },
  { name: 'Need for Speed Underground 2', console: 'PC', image: '/images/brindes/nfs-ug2.webp' },
  { name: 'The Sims', console: 'PC', image: '/images/brindes/sims.webp' },
];

export function Gifts() {
  return (
    <section id="brindes" className="py-24 bg-background-card" aria-label="Brindes exclusivos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="hot" className="mb-5">🎁 BRINDES EXCLUSIVOS</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Ganhe jogos clássicos{' '}
            <span className="bg-primary-gradient bg-clip-text text-transparent">de graça</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Com qualquer compra você leva esses clássicos para sempre. Sem pegadinha.
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
                  alt={`Capa de ${gift.name} para ${gift.console}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Badge variant="glass" className="text-[9px]">{gift.console}</Badge>
                </div>
              </div>
              <div className="p-4">
                <p className="font-bold text-white text-sm line-clamp-2">{gift.name}</p>
                <p className="text-xs text-success font-bold mt-1">GRÁTIS</p>
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
