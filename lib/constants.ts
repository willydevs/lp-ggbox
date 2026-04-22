import type { PricingTab, SpecTab, FaqItem } from '@/types/product';
import type { Testimonial } from '@/types/testimonial';

export const WHATSAPP_NUMBER = '5511999999999';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/ggbox',
  youtube: 'https://youtube.com/@ggbox',
  tiktok: 'https://tiktok.com/@ggbox',
};

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#pricing' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Especificações', href: '#specs' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Jogos', href: '/jogos' },
];

export const PRICING_TABS: PricingTab[] = [
  {
    id: 'pc',
    label: 'PC/Notebook',
    items: [
      {
        id: 'retro',
        name: 'Pack Retrô',
        price: 65,
        features: [
          'Consoles clássicos (SNES, MD, NES, GBA)',
          'PS1 e PS2 completos',
          'N64 e GameCube',
          'Suporte via WhatsApp',
          'Acesso vitalício',
        ],
        whatsappText: 'Olá! Quero comprar o Pack Retrô por R$65.',
      },
      {
        id: 'gamer',
        name: 'Pack Gamer',
        price: 119,
        badge: 'MAIS ESCOLHIDO',
        badgeVariant: 'primary',
        highlighted: true,
        features: [
          'Tudo do Pack Retrô',
          'PS3, PS4 e PS5',
          'Xbox One e Xbox 360',
          'Nintendo Switch',
          'Suporte prioritário',
          'Acesso vitalício',
        ],
        whatsappText: 'Olá! Quero comprar o Pack Gamer por R$119.',
      },
      {
        id: 'cloud',
        name: 'GGBOX Cloud',
        price: 139,
        badge: '🔥 NOVIDADE',
        badgeVariant: 'hot',
        features: [
          'Tudo do Pack Gamer',
          'Acesso via streaming',
          'Sem precisar de PC potente',
          'Jogue em qualquer dispositivo',
          'Suporte premium',
          'Acesso vitalício',
        ],
        whatsappText: 'Olá! Quero comprar o GGBOX Cloud por R$139.',
      },
    ],
  },
  {
    id: 'mobile',
    label: 'Celular/Tvbox',
    items: [
      {
        id: 'celular',
        name: 'Celular/Tablet',
        price: 50,
        features: [
          'Android 8+ e iOS',
          'Controles touch otimizados',
          'Suporte a gamepads Bluetooth',
          'Sincronização de saves',
          'Acesso vitalício',
        ],
        whatsappText: 'Olá! Quero comprar o pack Celular/Tablet por R$50.',
      },
      {
        id: 'tvbox',
        name: 'Tvbox',
        price: 50,
        features: [
          'Android TV compatível',
          'Interface otimizada para TV',
          'Suporte a controles USB',
          'Resolução até 4K',
          'Acesso vitalício',
        ],
        whatsappText: 'Olá! Quero comprar o pack Tvbox por R$50.',
      },
    ],
  },
  {
    id: 'adicionais',
    label: 'Adicionais',
    items: [
      {
        id: 'updates',
        name: 'Pack Atualizações',
        price: 40,
        features: [
          'Novos jogos toda semana',
          'Atualizações de emuladores',
          'Correções de bugs',
          'Acesso antecipado',
        ],
        whatsappText: 'Olá! Quero comprar o Pack Atualizações por R$40.',
      },
      {
        id: 'android',
        name: 'Adicional Android',
        price: 40,
        features: [
          'Adicionar Android ao PC pack',
          'Mesmo login, dois dispositivos',
        ],
        whatsappText: 'Olá! Quero comprar o Adicional Android por R$40.',
      },
      {
        id: 'instalacao',
        name: 'Instalação Remota',
        price: 59,
        features: [
          'Técnico instala por você',
          'Via AnyDesk/TeamViewer',
          'Configuração completa',
          'Garantia de funcionamento',
        ],
        whatsappText: 'Olá! Quero contratar a Instalação Remota por R$59.',
      },
      {
        id: 'modernos',
        name: 'Consoles Modernos',
        price: 40,
        features: [
          'PS4/PS5 adicionais',
          'Xbox One/Series',
          'Nintendo Switch',
          'Requer Pack Retrô ativo',
        ],
        whatsappText: 'Olá! Quero comprar o pack Consoles Modernos por R$40.',
      },
    ],
  },
];

export const SPEC_TABS: SpecTab[] = [
  {
    id: 'ps2',
    label: 'PS2',
    cpu: 'Intel Core i3 / AMD Ryzen 3 (qualquer geração)',
    ram: '4 GB',
    storage: '20 GB livres',
    os: 'Windows 7/8/10/11 (64-bit)',
  },
  {
    id: 'ps3',
    label: 'PS3',
    cpu: 'Intel Core i5 / AMD Ryzen 5',
    ram: '8 GB',
    storage: '30 GB livres',
    os: 'Windows 10/11 (64-bit)',
    notes: 'GPU dedicada recomendada para melhor desempenho',
  },
  {
    id: 'ps4',
    label: 'PS4/PS5',
    cpu: 'Intel Core i7 / AMD Ryzen 7',
    ram: '16 GB',
    storage: '50 GB livres',
    os: 'Windows 10/11 (64-bit)',
    notes: 'GPU dedicada com 4 GB VRAM mínimo',
  },
  {
    id: 'switch',
    label: 'Switch',
    cpu: 'Intel Core i5 / AMD Ryzen 5',
    ram: '8 GB',
    storage: '20 GB livres',
    os: 'Windows 10/11 (64-bit)',
  },
  {
    id: 'celular',
    label: 'Celular',
    cpu: 'Snapdragon 665 / MediaTek Helio G85 ou superior',
    ram: '3 GB',
    storage: '8 GB livres',
    os: 'Android 8.0+ / iOS 14+',
  },
  {
    id: 'tvbox',
    label: 'TVBox',
    cpu: 'Amlogic S905X3 / Rockchip RK3318 ou superior',
    ram: '2 GB',
    storage: '8 GB livres',
    os: 'Android TV 9.0+',
  },
  {
    id: 'pc',
    label: 'PC',
    cpu: 'Intel Core i3-8100 / AMD Ryzen 3 2200G ou superior',
    ram: '8 GB',
    storage: '20 GB livres',
    os: 'Windows 10/11 (64-bit)',
    notes: 'Para emuladores retrô, praticamente qualquer PC roda',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como recebo o acesso após a compra?',
    answer:
      'Após confirmar o pagamento, você recebe as instruções de download e ativação via WhatsApp ou e-mail em até 5 minutos. Nossa equipe está disponível 7 dias por semana para te auxiliar na instalação.',
  },
  {
    id: 'faq-2',
    question: 'Preciso de uma placa de vídeo potente?',
    answer:
      'Depende do pack escolhido. Para jogos retrô (PS1, PS2, SNES, N64) qualquer computador com mais de 5 anos roda sem problemas. Para PS3 e PS4, uma GPU dedicada simples já é suficiente. Consulte a aba "Especificações" para detalhes.',
  },
  {
    id: 'faq-3',
    question: 'Funciona em TVBOX? Em qual TV?',
    answer:
      'Sim! Funciona em TVBoxes com Android TV 9.0 ou superior, como Xiaomi Mi Box, Nvidia Shield e modelos com Amlogic S905X3+. Para TVs Smart com Android TV embutido, funciona da mesma forma.',
  },
  {
    id: 'faq-4',
    question: 'Tem período de teste ou garantia?',
    answer:
      'Sim! Oferecemos 7 dias de garantia. Se por qualquer motivo o sistema não funcionar no seu dispositivo e nossa equipe não conseguir resolver, devolvemos o valor integralmente.',
  },
  {
    id: 'faq-5',
    question: 'Como funciona o suporte?',
    answer:
      'O suporte é feito via WhatsApp, de segunda a domingo das 8h às 22h. Nossos técnicos podem acessar seu dispositivo remotamente (com sua permissão) para resolver qualquer problema.',
  },
  {
    id: 'faq-6',
    question: 'Posso usar em mais de um dispositivo?',
    answer:
      'Cada licença é vinculada a um dispositivo por vez. Para usar em múltiplos dispositivos, você pode adquirir o "Adicional Android" ou entrar em contato para combinarmos um plano multi-device.',
  },
  {
    id: 'faq-7',
    question: 'O acesso é realmente vitalício?',
    answer:
      'Sim, pague uma vez e use para sempre. Sem mensalidades, sem renovações. Os jogos e emuladores continuam acessíveis indefinidamente. Para receber novos jogos toda semana, existe o Pack Atualizações opcional.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Lucas Andrade',
    location: 'São Paulo, SP',
    rating: 5,
    text: 'Melhor investimento que já fiz. Tenho mais de 5.000 jogos na ponta dos dedos. Instalação foi super fácil com o suporte remoto.',
  },
  {
    id: 't2',
    name: 'Marina Torres',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    text: 'Finalmente consigo jogar PS2 no meu notebook velho! A qualidade dos emuladores é incrível, muito melhor do que eu esperava.',
  },
  {
    id: 't3',
    name: 'Rafael Nogueira',
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'Comprei o Pack Gamer e não me arrependi. PS3 e PS4 rodando perfeitamente no meu PC. O catálogo é absurdo, tem de tudo.',
  },
  {
    id: 't4',
    name: 'Paulo Bernardo',
    location: 'Curitiba, PR',
    rating: 5,
    text: 'Nostálgico demais! Jogando Sonic, Mario e Crash Bandicoot como se fosse criança de novo. Suporte excelente e rápido.',
  },
  {
    id: 't5',
    name: 'Cauã Melo',
    location: 'Salvador, BA',
    rating: 5,
    text: 'A galera não acreditou quando eu mostrei o Switch rodando no meu celular Android. O GGBOX é de outro nível!',
  },
  {
    id: 't6',
    name: 'Felipe Ferreira',
    location: 'Fortaleza, CE',
    rating: 5,
    text: 'Uso na minha TVBOX e funciona perfeitamente na smart TV da sala. Meu filho fica horas jogando. Vale muito o preço.',
  },
  {
    id: 't7',
    name: 'Aline Souza',
    location: 'Porto Alegre, RS',
    rating: 5,
    text: 'Suporte incrível! Me ajudaram a configurar tudo por acesso remoto em menos de 30 minutos. Recomendo para todo mundo.',
  },
  {
    id: 't8',
    name: 'Diego Martins',
    location: 'Recife, PE',
    rating: 5,
    text: 'Comprei para o meu PC fraco e roda muito bem jogos de PS2 e PS3. Jamais imaginei isso sendo possível. Produto top!',
  },
  {
    id: 't9',
    name: 'Camila Ribeiro',
    location: 'Campinas, SP',
    rating: 5,
    text: '+250 mil jogos por esse preço? É de graça. Passei o final de semana jogando clássicos do Super Nintendo. Amei!',
  },
  {
    id: 't10',
    name: 'Thiago Lima',
    location: 'Goiânia, GO',
    rating: 5,
    text: 'A GGBOX é a Netflix dos jogos mesmo. Simples de usar, muito jogo, suporte ágil. Garantia de 7 dias dá segurança total.',
  },
];
