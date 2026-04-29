import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md px-6">
        <p className="text-primary-400 font-bold text-sm tracking-widest uppercase">404</p>
        <h1 className="font-display text-5xl font-bold text-white">
          Página não encontrada
        </h1>
        <p className="text-zinc-400">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex gap-3 justify-center">
          <Button asChild variant="primary">
            <Link href="/">Voltar ao início</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/jogos">Ver jogos</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
