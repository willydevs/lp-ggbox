import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { WHATSAPP_URL } from '@/lib/constants';

const BLUR_PLACEHOLDER =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k=';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero GGBOX"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/imgi_245_bg-hero.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-background" />
      </div>

      {/* Glow roxo/pink */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-30 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7C3AED 0%, #EC4899 50%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-32 pb-20">
        <Badge variant="primary" className="mb-6">
          <Zap size={12} />
          NOVA GERAÇÃO DISPONÍVEL
        </Badge>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
          Bem-vindo à plataforma que reúne os{' '}
          <span className="bg-primary-gradient bg-clip-text text-transparent">
            melhores jogos
          </span>{' '}
          em um só lugar.
        </h1>

        <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transforme seu setup em uma máquina do tempo. A coleção mais completa, organizada e premium que você já viu. Nostalgia com performance bruta.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button variant="cta" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              GARANTIR ACESSO AGORA
              <ArrowRight size={18} />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/jogos">
              VER LISTA DE JOGOS
            </Link>
          </Button>
        </div>

        {/* Mini stats */}
        <div className="flex flex-wrap justify-center gap-0 divide-x divide-white/10">
          {[
            { value: '+250k', label: 'jogos' },
            { value: '+143', label: 'sistemas' },
            { value: '+20k', label: 'clientes' },
          ].map((stat) => (
            <div key={stat.label} className="px-8 py-2 text-center">
              <p className="font-display text-2xl font-black text-white">{stat.value}</p>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-widest mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
