import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';
import { HeroVideo } from './HeroVideo';

const BLUR_PLACEHOLDER =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k=';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero GGBOX"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/imgi_245_bg-hero.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-background" />
      </div>

      {/* Glow esquerdo/baixo */}
      <div
        className="absolute -bottom-24 -left-24 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.55) 0%, rgba(236,72,153,0.3) 50%, transparent 75%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />
      {/* Glow central sutil */}
      <div
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-32 pb-20">

        {/* Super-título colorido */}
        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <span
            style={{
              display: 'inline-block',
              width: 'fit-content',
              background: 'linear-gradient(to right, #FF9C2B, #FF2689, #9747FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.7px',
              textTransform: 'uppercase',
            }}
          >
            O GGBOX É MAIS SIMPLES QUE QUALQUER SISTEMA
          </span>
        </p>

        {/* Título principal */}
        <h1
          className="font-display font-black text-white tracking-tight text-center mb-6"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.1 }}
        >
          Organize seus jogos digitais com mais{' '}
          <span style={{ display: 'inline-block', width: 'fit-content', background: 'linear-gradient(to right, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>economia</span>{' '}
          e liberdade
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255, 255, 255, 0.75)',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.6,
          }}
        >
          Uma plataforma criada por um gamer para outro gamer. Sem mensalidade, você só paga uma única vez e joga o que quiser.
        </p>

        {/* Botões de ação */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.95rem',
              background: 'linear-gradient(135deg, #f97316, #ec4899)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
            }}
          >
            GARANTIR ACESSO AGORA
            <ArrowRight size={18} />
          </a>

          <Link
            href="/jogos"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.95rem',
              background: 'transparent',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
            }}
          >
            VER LISTA DE JOGOS
          </Link>
        </div>

        {/* Vídeo YouTube */}
        <HeroVideo />

        {/* Mini stats */}
        <div className="flex flex-wrap justify-center gap-0 divide-x divide-white/10 mt-14">
          {[
            { value: '+250k', label: 'jogos' },
            { value: '+143', label: 'sistemas' },
            { value: '+20k', label: 'clientes' },
          ].map((stat) => (
            <div key={stat.label} className="px-8 py-2 text-center">
              <p className="font-display text-2xl font-black text-white">{stat.value}</p>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-widest mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
