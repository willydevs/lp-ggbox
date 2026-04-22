import { Suspense } from 'react';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Pricing } from '@/components/sections/Pricing';
import { Stats } from '@/components/sections/Stats';
import { Gifts } from '@/components/sections/Gifts';
import { Specs } from '@/components/sections/Specs';
import { Faq } from '@/components/sections/Faq';
import { CtaFinal } from '@/components/sections/CtaFinal';
import MarqueeLazy from '@/components/sections/MarqueeLazy';
import VideoTestimonialsLazy from '@/components/sections/VideoTestimonialsLazy';
import { organizationJsonLd, faqJsonLd, productJsonLd } from '@/lib/seo';
import { FAQ_ITEMS, PRICING_TABS } from '@/lib/constants';

const orgLd = organizationJsonLd();
const faqLd = faqJsonLd(FAQ_ITEMS);
const productLds = (PRICING_TABS[0]?.items ?? []).map((item) =>
  productJsonLd({
    name: item.name,
    description: item.features.join('. '),
    price: item.price,
    url: 'https://ggbox.com.br/#pricing',
  }),
);

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      {productLds.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}

      <AnnouncementBar />
      <Navbar />

      <main id="main-content">
        <Hero />

        <Suspense>
          <MarqueeLazy />
        </Suspense>

        <About />
        <Pricing />
        <Stats />
        <Gifts />
        <Specs />

        <Suspense>
          <VideoTestimonialsLazy />
        </Suspense>

        <Faq />
        <CtaFinal />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
