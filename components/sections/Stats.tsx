'use client';

import { useIntersection } from '@/hooks/useIntersection';
import { useCountUp } from '@/hooks/useCountUp';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  isActive: boolean;
  duration?: number;
}

function StatItem({ value, suffix, label, isActive, duration = 2000 }: StatItemProps) {
  const count = useCountUp(value, duration, isActive);
  return (
    <div className="text-center px-8 py-6">
      <p className="font-display text-6xl sm:text-7xl font-bold bg-primary-gradient bg-clip-text text-transparent leading-none">
        +{count.toLocaleString('pt-BR')}{suffix}
      </p>
      <p className="text-zinc-400 font-medium mt-3 uppercase tracking-widest text-sm">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.3 });

  return (
    <section
      id="stats"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 border-y border-white/8 bg-background-card"
      aria-label="Estatísticas GGBOX"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center divide-x divide-white/10">
          <StatItem value={20000} suffix="" label="clientes satisfeitos" isActive={isIntersecting} duration={2000} />
          <StatItem value={250000} suffix="" label="jogos disponíveis" isActive={isIntersecting} duration={2500} />
          <StatItem value={143} suffix="" label="sistemas suportados" isActive={isIntersecting} duration={1500} />
        </div>
      </div>
    </section>
  );
}
