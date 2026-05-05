"use client";
export default function ProjectSnapshot() {
  const stats = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'परियोजना प्रकार',
      value: 'आवासीय प्लॉटेड विकास',
      sub: 'धोलेरा एसआईआर, गुजरात',
      accent: '#ea6c1a',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
      ),
      label: 'प्लॉट आकार',
      value: '121 वर्ग गज और उससे अधिक',
      sub: 'अनेक विन्यास उपलब्ध',
      accent: '#ea6c1a',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
        </svg>
      ),
      label: 'स्वामित्व',
      value: 'फ्रीहोल्ड',
      sub: 'पूर्ण कानूनी स्वामित्व हस्तांतरण',
      accent: '#ea6c1a',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      label: 'पंजीकरण',
      value: 'लागू प्रक्रिया अनुसार',
      sub: 'सरकारी दस्तावेज़ीकरण',
      accent: '#ea6c1a',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      ),
      label: 'योजना मूल्य',
      value: '₹7,500 / वर्ग गज',
      sub: 'आवेदन शुल्क ₹11,500 वापसी योग्य',
      accent: '#ea6c1a',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      label: 'महिला कोटा',
      value: '33% आरक्षित',
      sub: 'महिलाएं और सरकारी कर्मचारी',
      accent: '#ea6c1a',
    },
  ];

  return (
    <section id="project" style={{
      background: '#1a3a6b',
      padding: '4rem 0 7rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .snap-card {
          animation: fadeSlideUp 0.5s ease both;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.25s ease, box-shadow 0.3s ease;
        }
        .snap-card:hover {
          transform: scale(1.05);
          background: rgba(255,255,255,0.10) !important;
          box-shadow: 0 24px 48px rgba(0,0,0,0.4), 0 0 0 2px #ea6c1a, 0 0 20px 4px rgba(201,144,26,0.4) !important;
          z-index: 10;
        }
        .snap-card:nth-child(1) { animation-delay: 0.05s; }
        .snap-card:nth-child(2) { animation-delay: 0.10s; }
        .snap-card:nth-child(3) { animation-delay: 0.15s; }
        .snap-card:nth-child(4) { animation-delay: 0.20s; }
        .snap-card:nth-child(5) { animation-delay: 0.25s; }
        .snap-card:nth-child(6) { animation-delay: 0.30s; }

        /* Govt logos */
        .proj-logos-wrap {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .proj-logo-box {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 0.8rem 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .proj-logo-box img {
          height: 125px;
          width: auto;
          object-fit: contain;
        }

        /* Grid */
        .snapshot-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          border-radius: 20px;
          overflow: visible;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .snapshot-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .snapshot-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
          .proj-logo-box img { height: 70px !important; }
          .proj-logos-wrap { gap: 0.6rem !important; }
          .proj-logo-box { padding: 0.5rem 0.7rem !important; }
        }
        @media (max-width: 400px) {
          .snapshot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Faint background watermark */}
      <div style={{
        position: 'absolute', bottom: '-2rem', right: '-2rem',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: 'clamp(6rem, 14vw, 14rem)',
        fontWeight: 700, color: 'rgba(255,255,255,0.03)',
        lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
        letterSpacing: '-0.03em',
      }}>प्लॉट्स</div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

        {/* Proudly Supported By */}
        <div style={{
          fontFamily: "'Poppins', system-ui, sans-serif",
          fontSize: '1rem', fontWeight: 600,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#ffffff',
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}>गर्व से समर्थित</div>

        {/* Govt. Authority Logos */}
        <div className="proj-logos-wrap">
          {[
            { src: '/Gov-logo.png', alt: 'Government of Gujarat' },
            { src: '/Smart-City-1.webp', alt: 'Smart City Mission' },
            { src: '/amrut.webp', alt: 'AMRUT' },
            { src: '/Gujarat-Urban-Development-Mission.webp', alt: 'Gujarat Urban Development' },
          ].map(logo => (
            <div key={logo.alt} className="proj-logo-box">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 600, color: '#ffffff',
            lineHeight: 1.05, margin: '0 0 1.2rem',
            display: 'inline-flex', alignItems: 'baseline', gap: '0.4rem', flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            परियोजना&nbsp;<span style={{ fontStyle: 'italic', color: '#ea6c1a' }}>स्नैपशॉट</span>
          </h2>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
          }}>
            <div style={{ flex: 1, maxWidth: 80, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,144,26,0.5))' }} />
            <div style={{ width: 6, height: 6, background: '#ea6c1a', transform: 'rotate(45deg)', flexShrink: 0 }} />
            <div style={{ width: 48, height: 2.5, background: 'linear-gradient(90deg, #ea6c1a, #f5a54a)', borderRadius: 2 }} />
            <div style={{ width: 6, height: 6, background: '#ea6c1a', transform: 'rotate(45deg)', flexShrink: 0 }} />
            <div style={{ flex: 1, maxWidth: 80, height: 1, background: 'linear-gradient(90deg, rgba(201,144,26,0.5), transparent)' }} />
          </div>
        </div>

        {/* Grid */}
        <div className="snapshot-grid">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="snap-card"
              style={{
                background: 'rgba(255,255,255,0.04)',
                padding: '2.2rem 1.6rem',
                display: 'flex', flexDirection: 'column',
                gap: '0.9rem',
                cursor: 'default',
                position: 'relative',
                borderRadius: 16,
                border: '1px solid rgba(201,144,26,0.45)',
              }}
            >
              {/* Icon */}
              <div style={{
                width: 50, height: 50, borderRadius: 13,
                background: 'rgba(201,144,26,0.15)',
                border: '1px solid rgba(201,144,26,0.30)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#ea6c1a', flexShrink: 0,
              }}>
                {stat.icon}
              </div>

              {/* Label */}
              <div style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
              }}>{stat.label}</div>

              {/* Value */}
              <div style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: '1.05rem', fontWeight: 600,
                color: '#ffffff', lineHeight: 1.25,
              }}>{stat.value}</div>

              {/* Sub */}
              <div style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: '0.72rem', color: 'rgba(255,255,255,0.40)',
                lineHeight: 1.5,
              }}>{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}