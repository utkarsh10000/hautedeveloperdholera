"use client";

import { useState, useEffect } from 'react';

export default function SchemeStrip() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [prevTime, setPrevTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [flipping, setFlipping] = useState({ days: false, hours: false, minutes: false, seconds: false });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
     const target = new Date('2026-05-19T24:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) { clearInterval(interval); return; }

      const next = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };

      setTime(prev => {
        const keys = ['days', 'hours', 'minutes', 'seconds'];
        const newFlipping = {};
        keys.forEach(k => { newFlipping[k] = prev[k] !== next[k]; });
        setFlipping(newFlipping);
        setPrevTime(prev);
        setTimeout(() => setFlipping({ days: false, hours: false, minutes: false, seconds: false }), 400);
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = n => String(n).padStart(2, '0');

  const units = [
    { key: 'days', label: 'दिन' },
    { key: 'hours', label: 'घंटे' },
    { key: 'minutes', label: 'मिनट' },
    { key: 'seconds', label: 'सेकंड' },
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.6; }
          70% { transform: scale(1.05); opacity: 0; }
          100% { transform: scale(1.05); opacity: 0; }
        }
        @keyframes flip-down {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(-90deg); }
          100% { transform: rotateX(0deg); }
        }
        @keyframes glow-breathe {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes badge-blink {
          0%, 100% { background: #1a3a6b; }
          50% { background: #1a4a3a; box-shadow: 0 0 20px 6px rgba(13,47,36,0.35); }
        }
        @keyframes card-glow {
          0%, 100% { box-shadow: 0 8px 32px rgba(201,144,26,0.15); }
          50% { box-shadow: 0 8px 40px rgba(201,144,26,0.35); }
        }
        .digit-inner.flipping { animation: flip-down 0.4s cubic-bezier(0.23,1,0.32,1); }
        .digit-box { animation: card-glow 2s ease-in-out infinite; }

        /* Layout */
        .scheme-strip-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          position: relative;
          z-index: 1;
        }
        .scheme-divider {
          width: 1px;
          align-self: stretch;
          background: linear-gradient(to bottom, transparent, rgba(201,144,26,0.3), transparent);
          flex-shrink: 0;
        }
        .countdown-units {
          display: flex;
          justify-content: center;
          gap: 1rem;
          align-items: center;
        }
        .digit-box-wrap {
          width: 120px;
          height: 120px;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .scheme-strip-inner {
            flex-direction: column !important;
            gap: 2rem !important;
            text-align: center;
          }
          .scheme-divider { display: none !important; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .countdown-units {
            gap: 0.4rem !important;
          }
          .digit-box-wrap {
            width: 72px !important;
            height: 72px !important;
          }
          .digit-box-wrap .digit-inner {
            font-size: 2rem !important;
          }
          .countdown-colon {
            font-size: 1.4rem !important;
            margin-bottom: 1rem !important;
          }
          .scheme-price-num {
            font-size: clamp(2.2rem, 8vw, 4.5rem) !important;
          }
        }

        @media (max-width: 400px) {
          .digit-box-wrap {
            width: 60px !important;
            height: 60px !important;
          }
          .digit-box-wrap .digit-inner {
            font-size: 1.6rem !important;
          }
        }
      `}</style>

      <div style={{
        background: '#ffffff',
        position: 'relative',
        padding: '3.5rem 2rem',
        overflow: 'hidden',
      }}>
        {/* Glow blobs */}
        <div style={{
          position: 'absolute', top: '-80px', left: '10%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,144,26,0.10) 0%, transparent 65%)',
          pointerEvents: 'none',
          animation: 'glow-breathe 4s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', right: '8%',
          width: 360, height: 360, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,144,26,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
          animation: 'glow-breathe 4s ease-in-out infinite 2s',
        }} />

        <div className="scheme-strip-inner">
          {/* LEFT: Price block */}
          <div style={{ flex: '0 0 auto' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
              marginBottom: '1rem',
            }}>
              <div style={{ position: 'relative', width: 10, height: 10 }}>
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: '#ea6c1a', opacity: 0.6,
                  animation: 'pulse-ring 1.8s ease-out infinite',
                }} />
                <div style={{
                  position: 'absolute', inset: 2, borderRadius: '50%',
                  background: '#f5a54a',
                }} />
              </div>
              <span style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: '0.65rem', fontWeight: 800,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#ea6c1a',
              }}>लाइव योजना मूल्य</span>
            </div>

            <div className="scheme-price-num" style={{
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1, marginBottom: '0.3rem',
              color: '#1a3a6b',
            }}>
              ₹7,500
            </div>

            <div style={{
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontSize: '0.78rem', color: 'rgba(13,47,36,0.55)',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              marginBottom: '1.4rem',
            }}>प्रति वर्ग गज · फ्रीहोल्ड</div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(201,144,26,0.08)',
              border: '1px solid rgba(201,144,26,0.20)',
              borderRadius: 6, padding: '0.4rem 0.9rem',
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: '0.68rem', fontWeight: 600,
                color: '#ea6c1a', letterSpacing: '0.08em',
              }}>सीमित प्लॉट · सरकारी योजना</span>
            </div>
          </div>

          {/* Divider */}
          <div className="scheme-divider" />

          {/* RIGHT: Countdown */}
          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontSize: '0.82rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#ffffff', marginBottom: '1.6rem',
              background: '#1a3a6b',
              padding: '0.45rem 1.4rem',
              borderRadius: 999,
              animation: 'badge-blink 2s ease-in-out infinite',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#ea6c1a',
                display: 'inline-block',
                animation: 'pulse-ring 1.2s ease-out infinite',
                flexShrink: 0,
              }} />
              पंजीकरण बंद होने में
            </div>

            <div className="countdown-units">
              {units.map((unit, i) => (
                <div key={unit.key} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div className="digit-box-wrap digit-box" style={{
                      background: '#ffffff',
                      border: '1px solid rgba(201,144,26,0.20)',
                      borderRadius: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div
                        className={`digit-inner${flipping[unit.key] ? ' flipping' : ''}`}
                        style={{
                          fontFamily: "'Poppins', system-ui, sans-serif",
                          fontSize: '3rem',
                          fontWeight: 600,
                          color: '#1a3a6b',
                          lineHeight: 1,
                        }}
                      >
                        {mounted ? pad(time[unit.key]) : '00'}
                      </div>
                    </div>
                    <div style={{
                      fontFamily: "'Poppins', system-ui, sans-serif",
                      fontSize: '1rem', fontWeight: 700,
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: 'rgba(13,47,36,0.50)',
                      marginTop: '0.6rem',
                    }}>{unit.label}</div>
                  </div>

                  {i < 3 && (
                    <div className="countdown-colon" style={{
                      fontFamily: "'Poppins', system-ui, sans-serif",
                      fontSize: '2rem', fontWeight: 700,
                      color: 'rgba(201,144,26,0.6)',
                      marginBottom: '1.6rem',
                      lineHeight: 1,
                    }}>:</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}