'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Autenticação a ser implementada
    setTimeout(() => setLoading(false), 1500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <Input
        id="email"
        type="email"
        label="E-mail"
        placeholder="seu@email.com"
        autoComplete="email"
        required
      />

      <div className="relative">
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          label="Senha"
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword((v) => !v)}
          aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          className="absolute right-3 top-[38px] text-zinc-500 hover:text-white transition-colors"
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>

      <div className="flex justify-end">
        <a href="#" className="text-xs text-zinc-500 hover:text-primary-400 transition-colors">
          Esqueci minha senha
        </a>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </Button>
    </form>
  );
}
