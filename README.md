# GGBOX — Landing Page

Plataforma de jogos tipo "Netflix dos jogos". Next.js 14 + TypeScript + Tailwind + API G-Systems.

## Stack

- **Next.js** 14.2 (App Router, Server Components, ISR)
- **TypeScript** 5 (strict + noUncheckedIndexedAccess)
- **Tailwind CSS** 3.4
- **TanStack Query** v5
- **Radix UI** (Accordion, Tabs, Dialog, Tooltip)
- **Framer Motion** 11
- **Zod** (validação de schema da API)
- **Vercel Analytics** + Speed Insights

## Setup

```bash
npm install
cp .env.example .env.local
# preencha as variáveis no .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

| Variável | Descrição | Obrigatória |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | URL do G-Systems (API de jogos) | ✅ |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Facebook Pixel ID | — |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID | — |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp (só dígitos) | — |

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm start` | Servidor de produção |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript sem emit |
| `npm run format` | Prettier |

## Estrutura

```
app/
  layout.tsx          # Fontes, metadata base, providers, analytics
  page.tsx            # Landing page (Server + Suspense)
  jogos/
    page.tsx          # Catálogo (ISR 3600)
    [slug]/page.tsx   # Detalhe do jogo (generateMetadata dinâmico)
  login/page.tsx      # Login com GlassCard + glow pulsante
  api/contact/        # Route Handler de contato
  opengraph-image.tsx # OG image dinâmica (Edge Runtime)
  robots.ts / sitemap.ts

components/
  layout/     # Navbar, Footer, AnnouncementBar, WhatsAppFab
  sections/   # Hero, Pricing, About, Stats, FAQ, CTA, Marquee, etc.
  catalog/    # GameCard, GamesCatalog, FilterSidebar, SearchBar
  ui/         # Button, Input, Badge, GlassCard, Skeleton
  providers/  # QueryProvider, Analytics (FB Pixel, GTM)

lib/
  api/games.ts       # Cliente tipado com Zod + fallback mock
  constants.ts       # Pricing, FAQ, specs, depoimentos
  seo.ts             # JSON-LD helpers
  analytics.ts       # Helpers de eventos (cta_click, purchase_started…)
  utils.ts           # cn(), formatPrice()

hooks/
  useDebounce.ts     # Debounce genérico
  useIntersection.ts # IntersectionObserver
  useCountUp.ts      # Counter animado

types/
  game.ts / product.ts / testimonial.ts
```

## API

Base URL: `https://license-multijogos.vercel.app`

| Endpoint | Descrição |
|---|---|
| `GET /api/catalog/games?system=ps4&q=...&page=1&limit=28` | Lista de jogos paginada |
| `GET /api/catalog/packs?tier=standard` | Lista de packs |
| `GET /api/catalog/packs/[id]/games` | Jogos de um pack |

## Deploy (Vercel)

```bash
vercel --prod
```

Configure as variáveis de ambiente no painel da Vercel antes do deploy.
