# FASE 0 — Análise de Referências GGBOX

Gerado em: 2026-04-22 | Fonte: `C:\Users\willy\Documents\sites\license`

---

## 1. API — URL e Endpoints

### URL Base

A API é servida pelo projeto `G-Systems` (Next.js + MySQL Hostinger). A URL de produção **deve ser configurada** via variável de ambiente:

```env
NEXT_PUBLIC_API_URL=https://license-multijogos.vercel.app
```

> Banco de dados: `srv1184.hstgr.io` · DB: `u710496003_keys`
> Email: `noreply@ggbox.com.br` · Deploy: Vercel

### Endpoints Públicos Relevantes

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/catalog/games` | Listagem de jogos com filtros |
| `GET` | `/api/catalog/packs` | Listagem de packs/sistemas |
| `GET` | `/api/catalog/packs/[id]/games` | Jogos de um pack específico |
| `GET` | `/api/jogos/[system]` | Rota alternativa por sistema |

### Parâmetros de `/api/catalog/games`

| Param | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `system` | `string` | ✅ | ID do sistema (ex: `ps4`, `snes`) |
| `pack_id` | `string` | ❌ | Filtra por pack específico |
| `q` | `string` | ❌ | Busca por nome do jogo |
| `page` | `number` | ❌ | Página (default: 1) |
| `limit` | `number` | ❌ | Itens por página (default: 50, max: 200) |

### Parâmetros de `/api/catalog/packs`

| Param | Tipo | Descrição |
|-------|------|-----------|
| `tier` | `'standard' \| 'gold' \| 'updates'` | Filtra por tier |
| `system` | `string` | Filtra por sistema |

---

## 2. Schema dos Tipos Principais

### `Game`

```typescript
interface Game {
  id: number
  name: string
  system: string        // ex: "ps4"
  system_id: string     // igual a system
  region: string | null // ex: "USA", "EUR", "BRA"
  size_label: string | null // ex: "4.7 GB"
  cover_url: string | null
  video_url: string | null  // gameplay preview (MP4 direto)
  links: DownloadLink[]
}

interface DownloadLink {
  part: number
  part_number: number
  url: string
  is_correction: boolean
  label: string | null
}
```

### `CatalogResponse` (response de `/api/catalog/games`)

```typescript
interface CatalogResponse {
  system: string
  total: number
  page: number
  limit: number
  pages: number
  games: Game[]
}
```

### `Pack`

```typescript
interface Pack {
  id: string
  name: string
  system: string
  system_id: string
  tier: 'standard' | 'gold' | 'updates'
  pack_type: string
  size_label: string
  password: string | null
  resolver: string | null
  games: string[]          // lista textual de jogos (JSON)
  url: string | null       // link principal (part 1, não-correção)
  links: DownloadLink[]
}

interface PacksResponse {
  version: 2
  total: number
  packs: Pack[]
}
```

---

## 3. Sistemas Disponíveis (IDs da API)

### PlayStation
| ID | Label |
|----|-------|
| `ps5` | PS5 |
| `ps4` | PS4 |
| `ps3` | PS3 |
| `ps2` | PS2 |
| `psx` | PSX / PS1 |
| `psp` | PSP |

### Xbox
| ID | Label |
|----|-------|
| `xboxone` | Xbox One |
| `xbox360` | Xbox 360 |
| `xbox` | Xbox |

### Nintendo
| ID | Label |
|----|-------|
| `switch` | Switch |
| `wiiu` | Wii U |
| `wii` | Wii |
| `gamecube` | GameCube |
| `n64` | N64 |
| `snes` | SNES |
| `nes` | NES |
| `nds` | Nintendo DS |

### Sega
| ID | Label |
|----|-------|
| `megadrive` | Mega Drive |
| `saturn` | Saturn |
| `dreamcast` | Dreamcast |
| `mastersystem` | Master System |

### Outros (Tier Standard/Gold)
| ID | Label | Jogos |
|----|-------|-------|
| `atarijaguar` | Atari Jaguar | 54 |
| `atarilynx` | Atari Lynx | 65 |
| `naomi2` | Naomi 2 | 5 |
| `pinballfx` | Pinball FX | 11 |
| `wonderswancolor` | WonderSwan Color | 19 |

**Tiers:**
- `standard` — acesso com licença padrão
- `gold` — requer permissão gold
- `updates` — packs de atualização

---

## 4. Padrões Visuais Identificados (Catálogo Existente)

Fonte: `/src/app/catalog/games/page.js` do projeto license

### 4.1 Paleta de Cores

| Token | Valor | Uso |
|-------|-------|-----|
| `background` | `#0b0b0b` | Fundo geral |
| `card` | `#1a1a1a` | Cards e superfícies elevadas |
| `glass-bg` | `rgba(26, 26, 26, 0.7)` | Glassmorphism |
| `border` | `rgba(255, 255, 255, 0.1)` | Bordas |
| `accent` | `#e63946` | Vermelho de destaque (diferente do GGBOX: #7C3AED roxo) |
| `muted` | `#6b7280` | Texto secundário |

**Cores por plataforma** (para badges/tabs):
- PlayStation: `#0070d1` (azul)
- Xbox: `#52b043` (verde)
- Nintendo: `#ff3b3b` (vermelho)
- Sega: `#7c5cfc` (violeta)

### 4.2 Grid de Jogos

```
grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4
```

> No GGBOX a spec pede `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5` — mais generoso por ser landing pública.

### 4.3 GameCard (padrão replicar)

- Container: `aspect-[3/4]` fixo (evita CLS)
- Borda: `border border-white/8` + `rounded-xl overflow-hidden`
- Background vazio: `bg-white/5`
- Imagem: cobre 100% com `object-cover`, hover → `scale-105 transition-transform duration-500`
- **Hover overlay**: `absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100`
- **Badge região** (top-left): `bg-black/70 backdrop-blur-sm text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full text-white/60`
- **Badge tamanho** (top-right): mesma classe com `text-white/50`
- **Título** abaixo do card: `text-xs font-bold truncate px-0.5 text-gray-200 group-hover:text-white`

### 4.4 Animação de Entrada

```tsx
<motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.25 }}
>
```

### 4.5 Skeleton

```tsx
<div className="animate-pulse">
  <div className="aspect-[3/4] bg-white/5 rounded-xl" />
  <div className="h-2 bg-white/5 rounded mt-2 w-3/4" />
</div>
```

### 4.6 Tabs de Plataforma

- Estilo: `px-5 py-2.5 rounded-t-xl text-sm font-bold border-t border-x`
- Ativo: `text-white border-white/15 bg-white/8`
- Inativo: `text-gray-500 border-transparent hover:text-gray-300`

### 4.7 Pills de Sistema (sub-filtro)

- Selecionado: background = cor da plataforma, texto branco
- Não selecionado: `bg-white/5 text-gray-400 border border-white/8 hover:bg-white/10`

### 4.8 Search Bar

```
bg-white/5 border border-white/10 rounded-xl py-2.5 pl-9 pr-4
text-sm outline-none focus:border-white/30 placeholder:text-gray-600
```

### 4.9 Paginação

- Botões `w-10 h-10 rounded-xl`
- Ativo: cor da plataforma como background
- Inativo: `bg-white/5 text-gray-500 border border-white/8 hover:bg-white/10`
- Setas prev/next desabilitadas: `opacity-30`

### 4.10 Tipografia de Heading

```
text-3xl md:text-4xl font-black italic tracking-tight
```

---

## 5. Imagens Disponíveis

### Pasta `Imagens ggbox/`

| Arquivo | Uso provável |
|---------|-------------|
| `imgi_1_logo-ggbox-branca-1024x637.png` | Logo principal |
| `imgi_245_bg-hero.webp` | Background hero (da ticto — captura) |
| `imgi_245_bg-hero (1).webp` | Variação do hero |
| `imgi_10_authbg.webp` | Background login |
| `imgi_2_gamer.webp`, `imgi_3_nostalgia.webp` | Imagens de produto |
| `imgi_4_pack-cloud.webp` | Pack GGBOX Cloud |
| `imgi_6_pack-update-ggbox-1.png` | Pack atualizações |
| `imgi_10_Flux_Dev_Design_*.avif` | Hero premium avif |
| `imgi_123_instagram.svg`, `imgi_124_youtube.svg`, `imgi_128_tiktok.svg` | Redes sociais |
| `imgi_244_grandient-btn-header.svg` | Gradiente botão header |
| `imgi_246_bg-hover-cta.svg` | Hover CTA bg |
| `imgi_252_bg-form.svg` | Form background |
| `imgi_254_bg-faq-btn.svg` | FAQ button bg |
| `imgi_255_bg-btn-footer.svg` | Footer button bg |
| `imgi_34_mobile-gradient-divider.svg` | Divisor mobile |

### Pasta `imagens ticto/` (referência visual)

Mesmos arquivos (hero, auth bg, ícones sociais) — referência da ticto.com.br

---

## 6. Decisões de Implementação para o GGBOX

| Decisão | Escolha | Justificativa |
|---------|---------|---------------|
| Grid de jogos | `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5` | Spec do prompt (cards maiores p/ público geral) |
| Card aspect | `aspect-[3/4]` | Idêntico ao catálogo reference |
| Card hover | overlay gradiente bottom + scale-105 | Replicar padrão existente |
| Badges | região (top-left) + sistema (top-left alternativo) | Replicar padrão |
| Filtro por console | Tabs por plataforma + pills por sistema | Replicar padrão |
| Search debounce | 300ms | Spec do prompt |
| Paginação | Paginação numérica (não infinite scroll) | API suporta paginação nativa |
| API URL | `NEXT_PUBLIC_API_URL` via env | URL de produção a confirmar com usuário |
| Mock fallback | 24 jogos (PS1, PS2, SNES, MD, GBA, N64) | Spec do prompt |
| Cores accent | Roxo `#7C3AED` (design system GGBOX), não vermelho do license | Spec GGBOX é all-purple |
| Video preview | `video_url` no hover do card (abrir Dialog) | Campo já existe na API |
