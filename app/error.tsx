'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md px-6">
        <h2 className="font-display text-4xl font-bold text-white">
          Algo deu errado
        </h2>
        <p className="text-zinc-400">
          Ocorreu um erro inesperado. Tente novamente ou entre em contato com o suporte.
        </p>
        <Button onClick={reset} variant="primary">
          Tentar novamente
        </Button>
      </div>
    </div>
  );
}
