'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { FAQ_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-background-card" aria-label="Perguntas frequentes">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-5">FAQ</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Perguntas{' '}
            <span className="bg-primary-gradient bg-clip-text text-transparent">frequentes</span>
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <Accordion.Item
              key={item.id}
              value={item.id}
              className="glass overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className={cn(
                    'w-full flex items-center justify-between gap-4 px-6 py-5 text-left',
                    'font-semibold text-white hover:text-primary-300 transition-colors',
                    'group',
                  )}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 text-zinc-500 transition-transform duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordion-down_0.2s_ease] data-[state=closed]:animate-[accordion-up_0.2s_ease]">
                <p className="px-6 pb-5 text-zinc-400 leading-relaxed text-sm">
                  {item.answer}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
