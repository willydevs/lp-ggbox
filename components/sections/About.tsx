import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const FEATURES = [
  '+143 sistemas de videogame suportados',
  '+250.000 jogos disponíveis',
  'Acesso vitalício — pague uma vez',
  'Garantia de 7 dias sem questionamentos',
  'Suporte dedicado via WhatsApp',
  'Multi-device: PC, Celular, TVBox',
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 overflow-hidden"
      aria-label="Sobre a GGBOX"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Texto + features */}
        <div>
          <Badge variant="primary" className="mb-5">SOBRE A PLATAFORMA</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Central Definitiva de{' '}
            <span className="bg-primary-gradient bg-clip-text text-transparent">Jogos</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            A GGBOX é a Netflix dos jogos: uma única plataforma que reúne emuladores configurados,
            jogos clássicos e modernos, organizados e prontos para jogar. Sem complicação, sem mensalidade.
          </p>
          <ul className="space-y-3 mt-8" aria-label="Recursos da plataforma">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="text-success flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-white/80 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Imagem do produto */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div
              className="absolute inset-0 rounded-3xl blur-[80px] opacity-40 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, #7C3AED 0%, #EC4899 50%, transparent 80%)' }}
              aria-hidden="true"
            />
            <Image
              src="/images/imgi_10_Flux_Dev_Design_a_sleek_software_box_for_GGbox_with_a_futurist_2.avif"
              alt="GGBOX — plataforma de jogos"
              width={480}
              height={480}
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              sizes="(max-width: 1024px) 80vw, 480px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
