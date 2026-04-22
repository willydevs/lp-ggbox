'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-white/8 shadow-lg'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="GGBOX — página inicial">
          <Image
            src="/images/logoggbox.png"
            alt="GGBOX"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Menu principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all',
                link.label === 'Jogos' && 'text-primary-400 hover:text-primary-300',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="cta" size="sm" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Comprar
            </a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              className="lg:hidden p-2 text-white/70 hover:text-white"
              aria-label="Abrir menu"
            >
              <Menu size={22} />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
            <Dialog.Content className="fixed inset-0 z-50 flex flex-col bg-background p-6">
              <div className="flex items-center justify-between mb-8">
                <Image
                  src="/images/logoggbox.png"
                  alt="GGBOX"
                  width={120}
                  height={40}
                  className="h-9 w-auto object-contain"
                />
                <Dialog.Close asChild>
                  <button
                    className="p-2 text-white/70 hover:text-white"
                    aria-label="Fechar menu"
                  >
                    <X size={22} />
                  </button>
                </Dialog.Close>
              </div>

              <nav className="flex flex-col gap-1 flex-1" aria-label="Menu mobile">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-lg font-medium text-white/80 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
                </Button>
                <Button variant="cta" size="lg" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Comprar Agora
                  </a>
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
