export type ProductTier = 'standard' | 'gold' | 'updates';

export interface PricingItem {
  id: string;
  name: string;
  price: number;
  badge?: string;
  badgeVariant?: 'primary' | 'hot';
  features: string[];
  whatsappText: string;
  highlighted?: boolean;
}

export interface PricingTab {
  id: string;
  label: string;
  items: PricingItem[];
}

export interface SpecTab {
  id: string;
  label: string;
  cpu: string;
  ram: string;
  storage: string;
  os: string;
  notes?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
