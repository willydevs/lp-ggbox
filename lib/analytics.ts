type EventName = 'cta_click' | 'purchase_started' | 'scroll_depth';

interface CtaClickProps {
  location: string;
  label: string;
}

interface PurchaseStartedProps {
  product: string;
  price: number;
}

interface ScrollDepthProps {
  depth: 25 | 50 | 75 | 100;
}

type EventProps = CtaClickProps | PurchaseStartedProps | ScrollDepthProps;

declare global {
  interface Window {
    fbq?: (action: string, event: string, data?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: EventName, props: EventProps) {
  if (typeof window === 'undefined') return;

  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', name, props as unknown as Record<string, unknown>);
  }

  // GTM dataLayer
  if (window.dataLayer) {
    window.dataLayer.push({ event: name, ...props });
  }
}

export function trackCtaClick(location: string, label: string) {
  trackEvent('cta_click', { location, label });
}

export function trackPurchaseStarted(product: string, price: number) {
  trackEvent('purchase_started', { product, price });
}

export function trackScrollDepth(depth: 25 | 50 | 75 | 100) {
  trackEvent('scroll_depth', { depth });
}
