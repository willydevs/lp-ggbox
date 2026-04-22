import { Suspense } from 'react';
import { organizationJsonLd } from '@/lib/seo';

// Seções serão importadas na Fase 2
// import Navbar from '@/components/layout/Navbar';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <main id="main-content">
        <Suspense>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="font-display text-6xl font-bold bg-primary-gradient bg-clip-text text-transparent">
                GGBOX
              </h1>
              <p className="text-zinc-400 text-lg">
                Todos os consoles em um único sistema.
              </p>
            </div>
          </div>
        </Suspense>
      </main>
    </>
  );
}
