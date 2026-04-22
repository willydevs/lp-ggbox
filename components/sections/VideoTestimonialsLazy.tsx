'use client';

import dynamic from 'next/dynamic';

const VideoTestimonialsInner = dynamic(
  () => import('./VideoTestimonials').then((m) => ({ default: m.VideoTestimonials })),
  {
    ssr: false,
    loading: () => (
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-8 bg-white/5 rounded w-64 mx-auto mb-12 animate-pulse" />
          <div className="flex gap-5 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-72 h-48 bg-white/5 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    ),
  },
);

export default function VideoTestimonialsLazy() {
  return <VideoTestimonialsInner />;
}
