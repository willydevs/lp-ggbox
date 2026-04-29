'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Autenticação a ser implementada
    setTimeout(() => setLoading(false), 1500);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '8px',
    padding: '14px 16px',
    fontSize: '14px',
    color: '#ffffff',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <input
        id="email"
        type="email"
        placeholder="Seu E-mail"
        autoComplete="email"
        required
        style={inputStyle}
        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
      />

      <div className="relative">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Sua Senha"
          autoComplete="current-password"
          required
          style={{ ...inputStyle, paddingRight: '44px' }}
          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
        />
        <button
          type="button"
          onClick={() => setShowPassword(v => !v)}
          aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors"
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-1.5 mt-2 bg-white hover:bg-zinc-100 disabled:bg-zinc-200 text-black font-medium text-[15px] rounded-[8px] transition-colors disabled:cursor-not-allowed"
        style={{ height: '52px' }}
      >
        {loading ? 'Entrando...' : 'Acessar sua conta →'}
      </button>
    </form>
  );
}
