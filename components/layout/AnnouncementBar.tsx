'use client';

import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

const STORAGE_KEY = 'ggbox-announcement-dismissed';

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-cta-gradient text-white text-center py-2.5 px-4">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-bold hover:opacity-90 transition-opacity"
      >
        🔥 ACESSO VITALÍCIO + GARANTIA DE 7 DIAS — GARANTIR AGORA
        <ArrowRight size={14} />
      </a>
      <button
        onClick={dismiss}
        aria-label="Fechar aviso"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-1"
      >
        <X size={14} />
      </button>
    </div>
  );
}
