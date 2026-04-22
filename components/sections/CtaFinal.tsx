import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/constants';

export function CtaFinal() {
  return (
    <section
      id="cta"
      className="relative py-28 overflow-hidden"
      aria-label="Chamada para ação final"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-900/30 via-background to-background"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7C3AED, #EC4899)' }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Explore nossa lista completa de{' '}
          <span className="bg-primary-gradient bg-clip-text text-transparent">jogos</span>
        </h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
          +250.000 títulos esperando por você. Do clássico ao moderno, tudo em um só lugar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/jogos">
              Ver todos os jogos
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Button variant="whatsapp" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
