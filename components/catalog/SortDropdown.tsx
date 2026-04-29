'use client';

import { ChevronDown } from 'lucide-react';

export type SortOption = 'default' | 'name-asc' | 'name-desc';

export interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'default', label: 'Relevância' },
  { value: 'name-asc', label: 'Nome A→Z' },
  { value: 'name-desc', label: 'Nome Z→A' },
];

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        aria-label="Ordenar jogos"
        className="appearance-none bg-white/5 border border-white/10 rounded-xl py-2.5 pl-4 pr-9 text-sm text-white outline-none focus:border-white/30 transition-all cursor-pointer"
      >
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-background-card">
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
