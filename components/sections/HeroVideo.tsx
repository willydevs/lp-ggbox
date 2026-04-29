'use client';

import { useState } from 'react';

const BASE_SRC =
  'https://www.youtube.com/embed/3xlJmt0nVYA?autoplay=1&loop=1&playlist=3xlJmt0nVYA&controls=1&rel=0';

export function HeroVideo() {
  const [muted, setMuted] = useState(true);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        borderRadius: '12px',
        overflow: 'hidden',
        marginTop: '24px',
      }}
    >
      <iframe
        src={muted ? `${BASE_SRC}&mute=1` : BASE_SRC}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        title="GGBOX — vídeo de apresentação"
      />

      {muted && (
        <button
          onClick={() => setMuted(false)}
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.65)',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '50px',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
            border: 'none',
            backdropFilter: 'blur(4px)',
          }}
          aria-label="Ativar som do vídeo"
        >
          🔇 Aperte para ativar o som
        </button>
      )}
    </div>
  );
}
