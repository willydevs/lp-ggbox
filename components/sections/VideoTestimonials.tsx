'use client';

import { useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface VideoItem {
  id: string;
  name: string;
  badge: string;
  thumbnail: string;
  videoUrl: string;
}

const VIDEOS: VideoItem[] = [
  { id: 'v1', name: 'Lucas Andrade', badge: '⭐ Cliente verificado', thumbnail: '/images/video-thumbs/thumb1.webp', videoUrl: '#' },
  { id: 'v2', name: 'Marina Torres', badge: '⭐ Cliente verificado', thumbnail: '/images/video-thumbs/thumb2.webp', videoUrl: '#' },
  { id: 'v3', name: 'Rafael Nogueira', badge: '⭐ Cliente verificado', thumbnail: '/images/video-thumbs/thumb3.webp', videoUrl: '#' },
  { id: 'v4', name: 'Cauã Melo', badge: '⭐ Cliente verificado', thumbnail: '/images/video-thumbs/thumb4.webp', videoUrl: '#' },
];

export function VideoTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  function scroll(dir: 'left' | 'right') {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  }

  return (
    <section id="videos" className="py-24" aria-label="Depoimentos em vídeo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-5">DEPOIMENTOS</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Veja quem já está{' '}
            <span className="bg-primary-gradient bg-clip-text text-transparent">jogando</span>
          </h2>
        </div>

        <div className="relative">
          {/* Setas desktop */}
          <button
            onClick={() => scroll('left')}
            aria-label="Anterior"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Próximo"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          {/* Carrossel */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
          >
            {VIDEOS.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group flex-shrink-0 w-72 snap-start glass overflow-hidden text-left"
                aria-label={`Assistir depoimento de ${video.name}`}
              >
                <div className="aspect-video relative bg-background-elevated">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary-600/80 transition-colors">
                      <Play size={22} className="text-white ml-1" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-bold text-white text-sm">{video.name}</p>
                  <p className="text-xs text-yellow-400 mt-1">{video.badge}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dialog de vídeo */}
        <Dialog.Root open={!!activeVideo} onOpenChange={(o) => !o && setActiveVideo(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm" />
            <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="relative w-full max-w-3xl">
                <Dialog.Close asChild>
                  <button
                    className="absolute -top-10 right-0 text-white/70 hover:text-white p-2"
                    aria-label="Fechar vídeo"
                  >
                    <X size={22} />
                  </button>
                </Dialog.Close>
                <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                  {activeVideo?.videoUrl && activeVideo.videoUrl !== '#' ? (
                    <video
                      src={activeVideo.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-500">
                      Vídeo em breve
                    </div>
                  )}
                </div>
                {activeVideo && (
                  <p className="text-center text-white/70 mt-3 text-sm">
                    {activeVideo.name} — {activeVideo.badge}
                  </p>
                )}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}
