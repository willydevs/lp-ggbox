'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';

const REGIONS = [
  { img: '/images/br.webp', name: 'Brasil', code: 'BR' },
  { img: '/images/en.png', name: 'Estados Unidos', code: 'US' },
  { img: '/images/es.png', name: 'Espanha', code: 'ES' },
];

function RegionSelector() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('BR');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const activeRegion = REGIONS.find(r => r.code === active)!;

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 px-2 py-1.5 text-sm text-white/80 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
        aria-expanded={open}
        aria-label="Selecionar região"
      >
        <img src={activeRegion.img} alt={activeRegion.name} style={{ width: '22px', height: '16px', objectFit: 'cover', borderRadius: '2px' }} />
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            right: 0,
            background: '#1c1c1e',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            minWidth: '220px',
            zIndex: 100,
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '14px 16px 8px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '14px' }}>Regiões</span>
          </div>

          <ul style={{ listStyle: 'none', margin: 0, padding: '6px 0' }}>
            {REGIONS.map(region => (
              <li key={region.code}>
                <button
                  onClick={() => { setActive(region.code); setOpen(false); }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 16px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <img src={region.img} alt={region.name} style={{ width: '22px', height: '16px', objectFit: 'cover', borderRadius: '2px', flexShrink: 0 }} />
                  <span style={{ color: '#ffffff', fontSize: '14px', flex: 1, textAlign: 'left' }}>
                    {region.name}{' '}
                    <span style={{ color: '#888', fontSize: '12px' }}>({region.code})</span>
                  </span>
                  {/* Toggle circle */}
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      flexShrink: 0,
                      background: active === region.code ? '#7c3aed' : 'transparent',
                      border: active === region.code ? 'none' : '1.5px solid rgba(255,255,255,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {active === region.code && (
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', display: 'block' }} />
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

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

        {/* Desktop CTAs + RegionSelector */}
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="cta" size="sm" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Comprar
            </a>
          </Button>
          <RegionSelector />
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
                <div className="flex justify-center pt-2">
                  <RegionSelector />
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
