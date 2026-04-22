import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import QueryProvider from '@/components/providers/QueryProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ggbox.com.br'),
  title: {
    default: 'GGBOX – Todos os consoles em um único sistema',
    template: '%s | GGBOX',
  },
  description:
    'A central definitiva de jogos. Mais de 250.000 títulos e 143 sistemas em uma plataforma premium, rápida e organizada.',
  keywords: [
    'emulador',
    'jogos retrô',
    'ps2',
    'ps3',
    'ps5',
    'snes',
    'mega drive',
    'emuladores PC',
    'ggbox',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ggbox.com.br',
    siteName: 'GGBOX',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GGBOX' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://ggbox.com.br' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-background text-white font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo principal
        </a>
        <QueryProvider>
          {children}
        </QueryProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
