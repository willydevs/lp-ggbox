'use client';

import dynamic from 'next/dynamic';

const MarqueeInner = dynamic(() => import('./Marquee').then((m) => ({ default: m.Marquee })), {
  ssr: false,
  loading: () => (
    <div className="py-20">
      <div className="h-6 bg-white/5 rounded w-64 mx-auto mb-10 animate-pulse" />
      <div className="flex gap-6 overflow-hidden px-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex-shrink-0 w-72 h-36 bg-white/5 rounded-2xl animate-pulse" />
        ))}
      </div>
    </div>
  ),
});

export default function MarqueeLazy() {
  return <MarqueeInner />;
}
