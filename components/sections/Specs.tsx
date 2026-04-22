'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { Cpu, MemoryStick, HardDrive, Monitor } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { SPEC_TABS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Specs() {
  return (
    <section id="specs" className="py-24" aria-label="Especificações técnicas">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-5">REQUISITOS</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Especificações por{' '}
            <span className="bg-primary-gradient bg-clip-text text-transparent">Dispositivo</span>
          </h2>
        </div>

        <Tabs.Root defaultValue={SPEC_TABS[0]?.id ?? 'ps2'}>
          <Tabs.List
            className="flex flex-wrap justify-center gap-1.5 mb-8"
            aria-label="Dispositivos"
          >
            {SPEC_TABS.map((tab) => (
              <Tabs.Trigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-bold transition-all',
                  'bg-white/5 text-zinc-400 border border-white/8 hover:text-white hover:bg-white/10',
                  'data-[state=active]:bg-primary-600 data-[state=active]:text-white data-[state=active]:border-primary-600',
                )}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {SPEC_TABS.map((tab) => (
            <Tabs.Content key={tab.id} value={tab.id} className="focus:outline-none">
              <GlassCard padding="lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: Cpu, label: 'Processador', value: tab.cpu },
                    { icon: MemoryStick, label: 'Memória RAM', value: tab.ram },
                    { icon: HardDrive, label: 'Armazenamento', value: tab.storage },
                    { icon: Monitor, label: 'Sistema Operacional', value: tab.os },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-primary-400" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">
                          {label}
                        </p>
                        <p className="text-white font-medium text-sm">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {tab.notes && (
                  <p className="mt-6 text-sm text-zinc-500 border-t border-white/8 pt-4">
                    ⚠️ {tab.notes}
                  </p>
                )}
              </GlassCard>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}
