"use client";
import { useState } from 'react';
export default function SitePlan() {
  const [lightbox, setLightbox] = useState(false);
  return (
    <section id="siteplan" style={{ background: '#faf8f4', padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, color: '#1c1c1c',
          }}>परियोजना साइट प्लान</h2>
          <div style={{
            width: 56, height: 3,
            background: 'linear-gradient(90deg, #ea6c1a, #f5a54a)',
            borderRadius: 2, margin: '1.2rem auto 1rem',
          }} />
          <p style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: '1rem', color: '#6b7280', lineHeight: 1.75,
          }}>
            यह लेआउट व्यावहारिक आवासीय उपयोग, दीर्घकालिक पहुँच और भविष्य की उपयोगिता एकीकरण के लिए डिज़ाइन किया गया है।
          </p>
        </div>

        {/* Site plan + cards side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.4rem', marginBottom: '3rem', alignItems: 'start' }} className="siteplan-grid">

        {/* Cards column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          {[
            {
              title: '40 फीट सड़कें',
              desc: 'चौड़ी मुख्य पहुँच सड़कें जो विकास के भीतर सुचारू यातायात प्रवाह और आसान आवाजाही सुनिश्चित करती हैं।',
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l3-10h12l3 10"/><path d="M3 17h18"/><path d="M12 7V3"/>
                </svg>
              ),
            },
            {
              title: '30 फीट आंतरिक सड़कें',
              desc: 'सुव्यवस्थित आंतरिक सड़क नेटवर्क जो स्पष्ट पहुँच बिंदुओं के साथ सभी प्लॉटों को जोड़ता है।',
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="8" width="20" height="10" rx="2"/><path d="M6 8V6a2 2 0 014 0v2M14 8V6a2 2 0 014 0v2"/><circle cx="7" cy="15" r="1"/><circle cx="17" cy="15" r="1"/>
                </svg>
              ),
            },
            {
              title: 'हरित क्षेत्र',
              desc: 'गुणवत्तापूर्ण जीवन के लिए लेआउट में वितरित समर्पित हरित स्थान और मनोरंजन क्षेत्र।',
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V12"/><path d="M12 12C12 12 7 9 7 5a5 5 0 0110 0c0 4-5 7-5 7z"/><path d="M9 19c-2 0-4-1-4-3s2-3 4-3"/>
                </svg>
              ),
            },
          ].map(item => (
            <div key={item.title} style={{
              background: '#ffffff', borderRadius: 14, padding: '1.8rem',
              border: '1px solid rgba(0,0,0,0.06)',
              borderBottom: '3px solid #ea6c1a',
              boxShadow: '0 4px 20px rgba(26,74,58,0.06)',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(26,74,58,0.14)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,74,58,0.06)'; }}
            >
              <div style={{ marginBottom: '0.8rem' }}>{item.icon}</div>
              <div style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.95rem', fontWeight: 700, color: '#1c1c1c', marginBottom: '0.5rem',
              }}>{item.title}</div>
              <div style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.82rem', color: '#6b7280', lineHeight: 1.65,
              }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Image column */}
        <div style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.07)',
          borderRadius: 16, overflow: 'hidden',
          boxShadow: '0 4px 32px rgba(26,74,58,0.1)',
        }}>
         <img
            src="/hwc-layout.jpg"
            alt="RRG Aerowalk साइट प्लान"
            onClick={() => setLightbox(true)}
           style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', cursor: 'zoom-in' }}
          />

          {lightbox && (
            <div
              onClick={() => setLightbox(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                background: 'rgba(0,0,0,0.92)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'zoom-out',
              }}
            >
              <button
                onClick={() => setLightbox(false)}
                style={{
                  position: 'absolute', top: '1.2rem', right: '1.5rem',
                  background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '50%', width: 40, height: 40,
                  color: '#ffffff', fontSize: '1.2rem', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >✕</button>
              <img
                src="/hwc-layout.jpg"
                alt="RRG Aerowalk साइट प्लान"
                onClick={e => e.stopPropagation()}
                style={{
                  maxWidth: '92vw', maxHeight: '90vh',
                  objectFit: 'contain', borderRadius: 8,
                  boxShadow: '0 8px 60px rgba(0,0,0,0.6)',
                }}
              />
            </div>
          )}
        </div>
        </div>{/* end siteplan-grid */}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .siteplan-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}