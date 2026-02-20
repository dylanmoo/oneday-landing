import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0F1A',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Concentric rings — static representation of the hero animation */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {[320, 240, 175, 124, 86, 56, 34].map((r, i) => (
            <div
              key={r}
              style={{
                position: 'absolute',
                width: `${r * 2}px`,
                height: `${r * 2}px`,
                borderRadius: '50%',
                border: `${0.8 + i * 0.15}px solid hsla(${248 - i * 3}, ${70 + i * 3}%, ${62 + i * 2}%, ${0.08 + i * 0.055})`,
                boxShadow: `0 0 ${8 + i * 6}px hsla(250,80%,72%,${0.04 + i * 0.04})`,
              }}
            />
          ))}
          {/* Center glow */}
          <div
            style={{
              position: 'absolute',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(108,99,255,0.18) 0%, rgba(108,99,255,0.06) 50%, transparent 75%)',
            }}
          />
        </div>

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(108,99,255,0.15)',
            border: '1px solid rgba(108,99,255,0.35)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '28px',
            fontSize: '14px',
            color: '#a09fff',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          Free 30-Minute Discovery Call
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '54px',
            fontWeight: 700,
            color: '#f0eeff',
            textAlign: 'center',
            lineHeight: 1.18,
            maxWidth: '860px',
            padding: '0 40px',
            letterSpacing: '-0.02em',
          }}
        >
          Leverage AI like the{' '}
          <span style={{ color: '#8b84ff' }}>top 1%</span>
          {' '}of industry experts — and{' '}
          <span style={{ color: '#8b84ff' }}>10x</span>
          {' '}your potential.
        </div>

        {/* Sub */}
        <div
          style={{
            marginTop: '24px',
            fontSize: '20px',
            color: 'rgba(200,196,255,0.65)',
            textAlign: 'center',
            maxWidth: '600px',
          }}
        >
          One evening. Real results. No technical background needed.
        </div>

        {/* CTA pill */}
        <div
          style={{
            display: 'flex',
            marginTop: '36px',
            background: '#6C63FF',
            borderRadius: '100px',
            padding: '14px 36px',
            fontSize: '17px',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.01em',
          }}
        >
          Apply Now →
        </div>

        {/* OneDay wordmark bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            right: '40px',
            fontSize: '15px',
            fontWeight: 600,
            color: 'rgba(108,99,255,0.5)',
            letterSpacing: '0.08em',
          }}
        >
          ONEDAY
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
