import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { LoginForm } from './LoginForm';

export const metadata: Metadata = {
  title: 'Entrar',
  description: 'Acesse sua conta GGBOX e jogue +250.000 títulos em 143 sistemas.',
};

export default function LoginPage() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        backgroundImage: "url('/images/imgi_10_authbg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Back link */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-10 flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
      >
        <ArrowLeft size={15} />
        Voltar
      </Link>

      {/* Coluna esquerda — Card */}
      <div className="flex items-center justify-center px-8 py-16">
        <div
          style={{
            background: 'rgba(13, 13, 13, 0.85)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '40px',
            width: '100%',
            maxWidth: '450px',
          }}
        >
          {/* Logo — alinhado à esquerda */}
          <div className="mb-8">
            <Image
              src="/images/logoggbox.png"
              alt="GGBOX"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </div>

          {/* Título e subtítulo — alinhados à esquerda */}
          <div className="mb-7">
            <h1
              className="font-bold text-white"
              style={{ fontSize: '28px', lineHeight: 1.2, marginBottom: '10px' }}
            >
              Acesse sua conta
            </h1>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
              Se você já possui uma conta, preencha seus dados de acesso à plataforma.
            </p>
          </div>

          <LoginForm />

          {/* Rodapé — divider + dois links */}
          <div className="flex justify-between items-center mt-6 pt-5 border-t border-white/[0.08]">
            <a href="#" className="text-[13px] text-white/50 hover:text-white transition-colors no-underline">
              Esqueceu sua senha?
            </a>
            <a href="#" className="text-[13px] text-white/50 hover:text-white transition-colors no-underline">
              Criar uma nova conta →
            </a>
          </div>
        </div>
      </div>

      {/* Coluna direita — Headline */}
      <div className="hidden lg:flex items-center justify-center px-12">
        <h2
          style={{
            fontSize: 'clamp(4rem, 6vw, 7rem)',
            fontWeight: 300,
            color: '#ffffff',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          Todos os jogos{' '}
          <span style={{ display: 'block' }}>em um só lugar.</span>
        </h2>
      </div>
    </div>
  );
}
