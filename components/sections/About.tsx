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
        {/* Texto */}
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
          <p className="text-zinc-500 leading-relaxed">
            Do Super Nintendo ao PS5, do Mega Drive ao Switch — tudo em um só lugar,
            com interface limpa e suporte humano para qualquer dúvida.
          </p>
        </div>

        {/* Lista de features */}
        <ul className="space-y-4" aria-label="Recursos da plataforma">
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
    </section>
  );
}
