"use client";
import { useEffect, useRef, useState } from 'react';

export default function ManagementQuota() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const savings = 10900 - 10600;

  const stats = [
    {
      num: '646',
      label: 'कुल उपलब्ध प्लॉट',
      desc: 'इस चरण में प्रबंधन कोटा के तहत स्वीकृत कुल प्लॉट।',
      progress: null,
      progressLabel: null,
      progressColor: null,
      color: '#1a4a3a',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
      ),
    },
    {
      num: '411',
      label: 'आवंटित प्लॉट',
      desc: '646 में से 411 प्लॉट पहले ही आवंटित हो चुके हैं। मांग तेजी से बढ़ रही है। देर होने से पहले अभी कदम उठाएं।',
      progress: 64,
      progressLabel: '64% आवंटित',
      progressColor: '#ef4444',
      color: '#b91c1c',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
    },
    {
      num: '235',
      label: 'उपलब्ध इन्वेंटरी',
      desc: 'केवल 235 प्लॉट अभी भी पंजीकरण के लिए खुले हैं। सीमित अवसर — बंद होने से पहले पंजीकरण करें।',
      progress: 36,
      progressLabel: '36% शेष',
      progressColor: '#16a34a',
      color: '#15803d',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
    },
  ];

  return (
    <section ref={ref} style={{
      background: '#f8f5ef',
      padding: '8rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <style>{`
        @keyframes mq-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mq-card {
          animation: mq-fade-up 0.5s ease both;
        }
        .mq-card:nth-child(1) { animation-delay: 0.1s; }
        .mq-card:nth-child(2) { animation-delay: 0.2s; }
        .mq-card:nth-child(3) { animation-delay: 0.3s; }

        .mq-header-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 4rem;
          align-items: end;
          margin-bottom: 5rem;
        }
        .mq-rate-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          align-items: start;
        }
        .quota-stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .mq-card-inner {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 1.4rem;
          align-items: center;
        }
        .mq-cta-banner {
          margin-top: 4rem;
          background: linear-gradient(135deg, #1a3a6b 0%, #1a4a3a 100%);
          border-radius: 20px;
          padding: 2.8rem 3.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 1024px) {
          .mq-header-grid { grid-template-columns: 1fr !important; gap: 2rem !important; margin-bottom: 3rem !important; }
          .mq-rate-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 768px) {
          .mq-card-inner {
            grid-template-columns: auto 1fr !important;
          }
          .mq-card-num {
            display: none !important;
          }
          .mq-cta-banner {
            padding: 2rem 1.5rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .mq-cta-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          section[data-section="mq"] {
            padding: 4rem 0 !important;
          }
        }
      `}</style>

      {/* Large background number */}
      <div style={{
        position: 'absolute', top: '50%', right: '-1rem',
        transform: 'translateY(-50%)',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: 'clamp(10rem, 22vw, 22rem)',
        fontWeight: 700, color: 'rgba(13,47,36,0.04)',
        lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
        letterSpacing: '-0.04em',
      }}>MQ</div>

      {/* Top gold border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 3,
        background: 'linear-gradient(90deg, transparent, #ea6c1a 30%, #f5a54a 60%, transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="mq-header-grid">
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(13,47,36,0.07)',
              border: '1px solid rgba(13,47,36,0.14)',
              borderRadius: 999, padding: '0.3rem 1rem',
              marginBottom: '1.2rem',
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#ea6c1a', display: 'block' }} />
              <span style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#1a4a3a',
              }}>प्रबंधन कोटा</span>
            </div>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 600, color: '#1a3a6b',
              lineHeight: 1.05, margin: '0 0 1.4rem',
            }}>
              विशेष प्लॉट<br />
              <span style={{ fontStyle: 'italic', color: '#ea6c1a' }}>प्राथमिक दर पर</span>
            </h2>

            <div style={{
              width: 48, height: 2.5,
              background: 'linear-gradient(90deg, #ea6c1a, #f5a54a)',
              borderRadius: 2,
            }} />
          </div>

          <div>
            <p style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '1rem', color: 'rgba(13,47,36,0.60)',
              lineHeight: 1.9, margin: '0 0 1.2rem',
            }}>
              धोलेरा स्मार्ट सिटी में आवासीय प्लॉट का एक सीमित समूह, प्रबंधन कोटा के तहत प्राथमिक दर पर आरक्षित — केवल पहले आओ, पहले पाओ के आधार पर उपलब्ध।
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(201,144,26,0.10)',
              border: '1px solid rgba(201,144,26,0.25)',
              borderRadius: 6, padding: '0.5rem 1rem',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.72rem', fontWeight: 700,
                color: '#ea6c1a', letterSpacing: '0.06em',
              }}>05 मार्च 2026 से प्रभावी · उपलब्धता के अधीन</span>
            </div>
          </div>
        </div>

        {/* Rate comparison + Stats */}
        <div className="mq-rate-grid">
          {/* Left: Rate comparison card */}
          <div style={{
            background: '#1a3a6b',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 8px 48px rgba(13,47,36,0.18)',
          }}>
            {/* Management rate */}
            <div style={{
              padding: '2rem 2rem 1.6rem',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 2.5,
                background: 'linear-gradient(90deg, #ea6c1a, #f5a54a)',
              }} />
              <div style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.62rem', fontWeight: 800,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#ea6c1a', marginBottom: '0.8rem',
              }}>प्रबंधन कोटा दर</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #ffffff, #f5a54a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
                marginBottom: '0.3rem',
              }}>₹7,200</div>
              <div style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.72rem', color: 'rgba(255,255,255,0.40)',
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>प्रति वर्ग गज</div>
            </div>

            {/* General rate */}
            <div style={{ padding: '1.4rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.62rem', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)', marginBottom: '0.5rem',
              }}>सामान्य कोटा दर</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.6rem', fontWeight: 600,
                color: 'rgba(255,255,255,0.20)',
                textDecoration: 'line-through',
                textDecorationColor: 'rgba(255,255,255,0.15)',
              }}>₹7,500</div>
            </div>

            {/* Savings callout */}
            <div style={{
              padding: '1.4rem 2rem',
              background: 'rgba(201,144,26,0.10)',
              display: 'flex', alignItems: 'center', gap: '0.8rem',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'rgba(201,144,26,0.15)',
                border: '1px solid rgba(201,144,26,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5a54a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                </svg>
              </div>
              <div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.3rem', fontWeight: 700, color: '#f5a54a', lineHeight: 1,
                }}>₹{savings}/वर्ग गज बचत</div>
                <div style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)',
                  marginTop: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em',
                }}>सामान्य कोटा की तुलना में</div>
              </div>
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="quota-stats-grid">
            {stats.map((item) => (
              <div
                key={item.label}
                className="mq-card"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(13,47,36,0.08)',
                  borderRadius: 16,
                  padding: '1.6rem 2rem',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  transition: 'all 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,144,26,0.35)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,144,26,0.10)';
                  e.currentTarget.style.transform = 'translateX(6px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(13,47,36,0.08)';
                  e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div className="mq-card-inner">
                  {/* Icon */}
                  <div style={{
                    width: 48, height: 48, borderRadius: 13,
                    background: `rgba(${item.color === '#b91c1c' ? '185,28,28' : item.color === '#15803d' ? '21,128,61' : '13,47,36'},0.07)`,
                    border: `1px solid rgba(${item.color === '#b91c1c' ? '185,28,28' : item.color === '#15803d' ? '21,128,61' : '13,47,36'},0.12)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.color, flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>

                  {/* Text + progress */}
                  <div>
                    <div style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '0.75rem', fontWeight: 700,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.35)', marginBottom: '0.2rem',
                    }}>{item.label}</div>
                    <div style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '0.78rem', color: 'rgba(0,0,0,0.45)',
                      lineHeight: 1.6,
                    }}>{item.desc}</div>
                    {item.progress && (
                      <div style={{ marginTop: '0.8rem' }}>
                        <div style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          marginBottom: '0.35rem',
                        }}>
                          <span style={{
                            fontFamily: "'DM Sans', system-ui, sans-serif",
                            fontSize: '0.62rem', fontWeight: 700,
                            color: item.progressColor, textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                          }}>{item.progressLabel}</span>
                        </div>
                        <div style={{
                          height: 5, background: 'rgba(0,0,0,0.07)',
                          borderRadius: 99, overflow: 'hidden',
                        }}>
                          <div style={{
                            height: '100%', borderRadius: 99,
                            background: item.progressColor,
                            width: animated ? `${item.progress}%` : '0%',
                            transition: 'width 1.6s cubic-bezier(0.4,0,0.2,1)',
                          }} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Big number */}
                  <div className="mq-card-num" style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(2.8rem,4vw,4rem)',
                    fontWeight: 700, color: '#ea6c1a',
                    lineHeight: 1, flexShrink: 0,
                    opacity: 0.55,
                  }}>{item.num}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mq-cta-banner">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
              fontStyle: 'italic', color: '#ffffff',
              margin: '0 0 0.4rem', lineHeight: 1.3,
            }}>प्रबंधन कोटा में केवल 235 प्लॉट शेष हैं।</p>
            <p style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '0.82rem', color: '#ffffff', margin: 0,
            }}>
              आवेदन शुल्क <strong style={{ color: '#f5a54a' }}>₹11,500</strong>
              <span style={{ color: '#ffffff', marginLeft: '0.4rem' }}>*वापसी योग्य</span>
            </p>
          </div>
          <a
            href="/register"
            className="mq-cta-btn"
            style={{
              position: 'relative', zIndex: 1,
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: '#ea6c1a', color: '#ffffff',
              padding: '1rem 2.6rem', borderRadius: 6,
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '0.82rem', fontWeight: 800,
              letterSpacing: '0.10em', textTransform: 'uppercase',
              textDecoration: 'none', transition: 'all 0.3s',
              whiteSpace: 'nowrap', flexShrink: 0,
              boxShadow: '0 8px 32px rgba(201,144,26,0.30)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#f07d2a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#ea6c1a'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            अभी पंजीकरण करें
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        {/* Fine print */}
        <p style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: '0.68rem', color: 'rgba(13,47,36,0.30)',
          textAlign: 'center', marginTop: '1.8rem', lineHeight: 1.7,
        }}>
          *प्रबंधन कोटा मूल्य ₹7,200/वर्ग गज, 05 मार्च 2026 से प्रभावी। पंजीकरण के समय उपलब्धता के अधीन। रिफंड नीति लागू होती है।
        </p>
      </div>
    </section>
  );
}