'use client';

import { useCallback } from 'react';
import { Search, X } from 'lucide-react';

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Buscar jogo...' }: SearchBarProps) {
  const clear = useCallback(() => onChange(''), [onChange]);

  return (
    <div className="relative w-full sm:w-72">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
        size={15}
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Buscar jogo no catálogo"
        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-9 pr-9 text-sm text-white outline-none focus:border-white/30 transition-all placeholder:text-zinc-600 font-medium"
      />
      {value && (
        <button
          onClick={clear}
          aria-label="Limpar busca"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
