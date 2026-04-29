import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'GGBOX — Todos os consoles em um único sistema';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0A0A',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow roxo */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '600px',
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse, rgba(124,58,237,0.5) 0%, rgba(236,72,153,0.3) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: '96px',
            fontWeight: 900,
            background: 'linear-gradient(90deg, #7C3AED, #EC4899)',
            backgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '-2px',
            lineHeight: 1,
            marginBottom: '24px',
          }}
        >
          GGBOX
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            color: 'rgba(255,255,255,0.85)',
            fontWeight: 600,
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.3,
            marginBottom: '32px',
          }}
        >
          Todos os consoles em um único sistema
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '28px',
          }}
        >
          {[
            { value: '+250k', label: 'jogos' },
            { value: '+143', label: 'sistemas' },
            { value: '+20k', label: 'clientes' },
          ].map((s) => (
            <div
              key={s.label}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
            >
              <span style={{ fontSize: '36px', fontWeight: 900, color: '#fff' }}>{s.value}</span>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '3px' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            right: '40px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          ggbox.com.br
        </div>
      </div>
    ),
    { ...size },
  );
}
