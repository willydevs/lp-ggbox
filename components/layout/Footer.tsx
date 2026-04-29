import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS, WHATSAPP_URL } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-background-card mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + tagline */}
        <div className="space-y-4">
          <span className="font-display text-2xl font-black bg-primary-gradient bg-clip-text text-transparent">
            GGBOX
          </span>
          <p className="text-sm text-zinc-500 leading-relaxed">
            A central definitiva de jogos. +250.000 títulos em +143 sistemas numa plataforma premium.
          </p>
          <div className="flex gap-3">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram GGBOX"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
            >
              <Instagram size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube GGBOX"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
            >
              <Youtube size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok GGBOX"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Navegação</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Legal</h3>
          <ul className="space-y-2">
            {[
              { label: 'Política de Privacidade', href: '#' },
              { label: 'Termos de Uso', href: '#' },
              { label: 'Garantia e Reembolso', href: '#' },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-zinc-500 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Suporte</h3>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:suporte@ggbox.com.br" className="hover:text-white transition-colors">
                suporte@ggbox.com.br
              </a>
            </li>
            <li className="pt-2 text-xs">Seg–Dom · 8h–22h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8 py-5 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} GGBOX. Todos os direitos reservados.
      </div>
    </footer>
  );
}
