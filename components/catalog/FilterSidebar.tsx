'use client';

import { useCallback } from 'react';
import { cn } from '@/lib/utils';

export interface PlatformGroup {
  id: string;
  name: string;
  color: string;
  systems: { id: string; label: string }[];
}

export const PLATFORM_GROUPS: PlatformGroup[] = [
  {
    id: 'playstation',
    name: 'PlayStation',
    color: '#0070d1',
    systems: [
      { id: 'ps5', label: 'PS5' },
      { id: 'ps4', label: 'PS4' },
      { id: 'ps3', label: 'PS3' },
      { id: 'ps2', label: 'PS2' },
      { id: 'psx', label: 'PS1' },
      { id: 'psp', label: 'PSP' },
    ],
  },
  {
    id: 'xbox',
    name: 'Xbox',
    color: '#52b043',
    systems: [
      { id: 'xboxone', label: 'Xbox One' },
      { id: 'xbox360', label: 'Xbox 360' },
      { id: 'xbox', label: 'Xbox' },
    ],
  },
  {
    id: 'nintendo',
    name: 'Nintendo',
    color: '#ff3b3b',
    systems: [
      { id: 'switch', label: 'Switch' },
      { id: 'wiiu', label: 'Wii U' },
      { id: 'wii', label: 'Wii' },
      { id: 'gamecube', label: 'GameCube' },
      { id: 'n64', label: 'N64' },
      { id: 'snes', label: 'SNES' },
      { id: 'nes', label: 'NES' },
      { id: 'nds', label: 'NDS' },
    ],
  },
  {
    id: 'sega',
    name: 'Sega',
    color: '#7c5cfc',
    systems: [
      { id: 'megadrive', label: 'Mega Drive' },
      { id: 'saturn', label: 'Saturn' },
      { id: 'dreamcast', label: 'Dreamcast' },
      { id: 'mastersystem', label: 'Master System' },
    ],
  },
];

export interface FilterSidebarProps {
  activeSystem: string;
  onSystemChange: (system: string) => void;
}

export function FilterSidebar({ activeSystem, onSystemChange }: FilterSidebarProps) {
  const activePlatform = PLATFORM_GROUPS.find((g) =>
    g.systems.some((s) => s.id === activeSystem),
  );

  const handleSystem = useCallback(
    (id: string) => onSystemChange(id),
    [onSystemChange],
  );

  return (
    <nav aria-label="Filtro por plataforma" className="space-y-6">
      {PLATFORM_GROUPS.map((group) => {
        const isActive = group.id === activePlatform?.id;
        return (
          <div key={group.id}>
            <button
              className="flex items-center gap-2 w-full text-left mb-2 group"
              onClick={() => handleSystem(group.systems[0]?.id ?? '')}
              aria-expanded={isActive}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform group-hover:scale-125"
                style={{ background: group.color }}
                aria-hidden="true"
              />
              <span
                className={cn(
                  'text-xs font-bold uppercase tracking-widest transition-colors',
                  isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300',
                )}
              >
                {group.name}
              </span>
            </button>

            <div className="flex flex-col gap-0.5 pl-4">
              {group.systems.map((sys) => {
                const selected = sys.id === activeSystem;
                return (
                  <button
                    key={sys.id}
                    onClick={() => handleSystem(sys.id)}
                    className={cn(
                      'text-left text-sm py-1.5 px-3 rounded-lg transition-all font-medium',
                      selected
                        ? 'text-white'
                        : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/5',
                    )}
                    style={selected ? { background: `${group.color}22`, color: group.color } : {}}
                    aria-current={selected ? 'page' : undefined}
                  >
                    {sys.label}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
