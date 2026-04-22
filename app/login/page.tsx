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
    <div className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center px-4">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/imgi_10_authbg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Glows pulsantes */}
      <div className="login-glow-1" aria-hidden="true" />
      <div className="login-glow-2" aria-hidden="true" />

      {/* Back link */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-10 flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
      >
        <ArrowLeft size={15} />
        Voltar
      </Link>

      {/* Grid desktop: form à esquerda, headline à direita */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* GlassCard */}
        <div className="glass p-10 w-full max-w-md mx-auto lg:mx-0">
          {/* Logo */}
          <div className="text-center mb-8">
            <span className="font-display text-3xl font-black bg-primary-gradient bg-clip-text text-transparent">
              GGBOX
            </span>
            <h1 className="text-xl font-bold text-white mt-2">Entrar na sua conta</h1>
            <p className="text-zinc-500 text-sm mt-1">Bem-vindo de volta!</p>
          </div>

          <LoginForm />

          <div className="mt-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-zinc-600">ou</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <button
            type="button"
            className="mt-4 w-full flex items-center justify-center gap-3 border border-white/15 rounded-xl py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continuar com Google
          </button>

          <p className="text-center text-xs text-zinc-600 mt-6">
            Ainda não tem conta?{' '}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 font-medium"
            >
              Fale conosco
            </a>
          </p>
        </div>

        {/* Headline — visível apenas desktop */}
        <div className="hidden lg:block">
          <h2
            className="font-display font-bold text-white leading-[0.95]"
            style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}
          >
            Todos os jogos{' '}
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              em um só lugar.
            </span>
          </h2>
          <p className="text-zinc-500 mt-6 text-lg leading-relaxed">
            +250.000 títulos, +143 sistemas. Acesse sua conta e jogue agora.
          </p>
        </div>
      </div>
    </div>
  );
}
