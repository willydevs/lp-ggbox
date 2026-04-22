'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { formatPrice } from '@/lib/utils';
import { PRICING_TABS } from '@/lib/constants';
import type { PricingItem } from '@/types/product';
import { cn } from '@/lib/utils';

function PricingCard({ item }: { item: PricingItem }) {
  return (
    <GlassCard
      padding="md"
      className={cn(
        'relative flex flex-col transition-all duration-300 hover:scale-[1.02]',
        item.highlighted && 'border-primary-600/50 shadow-glow-primary ring-1 ring-primary-600/30',
      )}
    >
      {item.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant={item.badgeVariant === 'hot' ? 'hot' : 'primary'}>
            {item.badge}
          </Badge>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display text-xl font-bold text-white mb-3">{item.name}</h3>
        <div className="flex items-end gap-1">
          <span className="text-4xl font-black font-display text-white">
            {formatPrice(item.price)}
          </span>
          <span className="text-zinc-500 mb-1 text-sm">/ vitalício</span>
        </div>
      </div>

      <ul className="space-y-3 flex-1 mb-8">
        {item.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
            <Check size={15} className="text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      <Button
        variant={item.highlighted ? 'cta' : 'outline'}
        size="md"
        className="w-full"
        asChild
      >
        <a
          href={`https://wa.me/5511999999999?text=${encodeURIComponent(item.whatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar
        </a>
      </Button>
    </GlassCard>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24" aria-label="Planos e preços GGBOX">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-5">PLANOS</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            ESCOLHA SUA{' '}
            <span className="bg-cta-gradient bg-clip-text text-transparent">JORNADA</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Acesso vitalício em todos os planos. Sem mensalidade, sem pegadinha.
          </p>
        </div>

        <Tabs.Root defaultValue={PRICING_TABS[0]?.id ?? 'pc'}>
          <Tabs.List
            className="flex justify-center gap-1 mb-10 bg-white/5 rounded-2xl p-1 max-w-sm mx-auto"
            aria-label="Categorias de planos"
          >
            {PRICING_TABS.map((tab) => (
              <Tabs.Trigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  'flex-1 py-2.5 px-3 rounded-xl text-sm font-bold transition-all',
                  'text-zinc-400 hover:text-white',
                  'data-[state=active]:bg-primary-600 data-[state=active]:text-white data-[state=active]:shadow-glow-primary',
                )}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {PRICING_TABS.map((tab) => (
            <Tabs.Content key={tab.id} value={tab.id} className="focus:outline-none">
              <div
                className={cn(
                  'grid gap-6',
                  tab.items.length <= 2
                    ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
                )}
              >
                {tab.items.map((item) => (
                  <PricingCard key={item.id} item={item} />
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}
