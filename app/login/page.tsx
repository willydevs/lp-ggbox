import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entrar',
  description: 'Acesse sua conta GGBOX.',
};

// Página completa será implementada na Fase 4
export default function LoginPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center">
      <div className="login-glow-1" aria-hidden="true" />
      <div className="login-glow-2" aria-hidden="true" />
      <div className="glass max-w-md w-full mx-4 p-10 relative z-10">
        <h1 className="font-display text-3xl font-bold text-white text-center">
          Entrar na sua conta
        </h1>
      </div>
    </div>
  );
}
