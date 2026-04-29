import { TESTIMONIALS } from '@/lib/constants';
import type { Testimonial } from '@/types/testimonial';
import { Star } from 'lucide-react';

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex-shrink-0 w-72 glass p-5 mx-3">
      <div className="flex gap-0.5 mb-3" aria-label={`${item.rating} estrelas`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
        ))}
      </div>
      <p className="text-sm text-zinc-300 leading-relaxed mb-4">&ldquo;{item.text}&rdquo;</p>
      <div>
        <p className="text-sm font-bold text-white">{item.name}</p>
        <p className="text-xs text-zinc-500">{item.location}</p>
      </div>
    </article>
  );
}

const DOUBLED = [...TESTIMONIALS, ...TESTIMONIALS];

export function Marquee() {
  return (
    <section
      className="py-20 overflow-hidden"
      aria-label="Depoimentos de clientes"
    >
      <div className="text-center mb-10">
        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
          O que dizem nossos clientes
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          +20.000 pessoas já{' '}
          <span className="bg-primary-gradient bg-clip-text text-transparent">jogaram</span>
        </h2>
      </div>

      {/* Linha 1 — esquerda */}
      <div className="relative mb-4">
        <div
          className="flex will-change-transform [animation:marquee-left_40s_linear_infinite] hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
          aria-hidden="true"
        >
          {DOUBLED.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} item={t} />
          ))}
        </div>
      </div>

      {/* Linha 2 — direita */}
      <div className="relative">
        <div
          className="flex will-change-transform [animation:marquee-right_40s_linear_infinite] hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
          aria-hidden="true"
        >
          {[...DOUBLED].reverse().map((t, i) => (
            <TestimonialCard key={`r2-${i}`} item={t} />
          ))}
        </div>
      </div>

      {/* Visível apenas para leitores de tela */}
      <ul className="sr-only">
        {TESTIMONIALS.map((t) => (
          <li key={t.id}>
            <blockquote cite={t.name}>
              <p>{t.text}</p>
              <footer>— {t.name}, {t.location}</footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}
