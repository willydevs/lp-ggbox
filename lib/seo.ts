import type { Game } from '@/types/game';

const SITE_URL = 'https://ggbox.com.br';
const SITE_NAME = 'GGBOX';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-ggbox.svg`,
    sameAs: [
      'https://instagram.com/ggbox',
      'https://youtube.com/@ggbox',
      'https://tiktok.com/@ggbox',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: 'Portuguese',
    },
  };
}

export function faqJsonLd(
  items: Array<{ question: string; answer: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function productJsonLd(item: {
  name: string;
  description: string;
  price: number;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `GGBOX — ${item.name}`,
    description: item.description,
    url: item.url,
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      '@type': 'Offer',
      price: item.price,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      url: item.url,
    },
  };
}

export function videoGameJsonLd(game: Game) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.name,
    gamePlatform: game.system.toUpperCase(),
    ...(game.cover_url ? { image: game.cover_url } : {}),
    url: `${SITE_URL}/jogos/${game.system}-${game.id}`,
  };
}
