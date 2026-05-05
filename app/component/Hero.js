"use client";

import { useState, useEffect } from "react";

const SLIDES = ["/hero-bg1.jpeg", "/hero-bg2.jpeg", "/hero-bg3.jpeg"];
const SLIDE_INTERVAL = 3000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveSlide((prev) => (prev + 1) % SLIDES.length),
      SLIDE_INTERVAL
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a3a6b 0%, #1a4a3a 50%, #2d5a44 100%)",
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        paddingTop: 128,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap');

        @keyframes badgePulse {
          0%, 100% { background: rgba(201,144,26,0.10); border-color: rgba(201,144,26,0.30); }
          50%       { background: rgba(201,144,26,0.45); border-color: rgba(245,212,131,0.90); box-shadow: 0 0 18px 4px rgba(201,144,26,0.55); }
        }
        @keyframes dotBlink {
          0%, 20%   { opacity: 1; transform: scale(1); }
          50%        { opacity: 0; transform: scale(0.5); }
          80%, 100% { opacity: 1; transform: scale(1); }
        }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: rgba(201,144,26,0.15);
          border: 1px solid rgba(201,144,26,0.35);
          border-radius: 999px; padding: 0.25rem 0.7rem;
          margin-bottom: 1.4rem;
          animation: badgePulse 1.8s ease-in-out infinite;
        }
        .hero-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #ea6c1a; display: block;
          flex-shrink: 0;
          animation: dotBlink 0.8s ease-in-out infinite;
        }
        .hero-badge-text {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.62rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #f5a54a;
        }

        .hero-content-wrapper { padding-top: 40vh; }

        .hero-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: end;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 600; color: #ffffff;
          line-height: 1.1; margin-bottom: 0.3rem;
        }

        .hero-cta-row {
          display: flex; gap: 1rem;
          flex-wrap: nowrap; align-items: stretch;
          margin-bottom: 1.6rem;
        }

        .hero-register-btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: #ea6c1a; color: #ffffff;
          padding: 0.9rem 2rem; border-radius: 4px;
          white-space: nowrap;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.85rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .hero-register-btn:hover {
          background: #f07d2a;
          transform: translateY(-2px);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-content-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 768px) {
          .hero-title-line { display: inline !important; }
          .hero-title { font-size: clamp(2rem, 8vw, 3rem) !important; }
          .hero-content-wrapper {
            padding-top: 0 !important;
            padding-bottom: 4rem !important;
            margin-top: auto;
            display: flex; flex-direction: column;
            justify-content: flex-end;
            min-height: calc(100vh - 128px);
          }
          .hero-content-grid { gap: 1.5rem !important; }
          .hero-cta-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.75rem !important;
          }
          .hero-cta-row > .hero-fee-card {
            width: 100% !important;
            justify-content: space-between !important;
          }
          .hero-register-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .hero-content-wrapper {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
      `}</style>

      {/* Diagonal pattern overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        opacity: 0.04, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(45deg, #ea6c1a 0, #ea6c1a 1px, transparent 0, transparent 50%)",
        backgroundSize: "32px 32px",
      }} />

      {/* Dark tint */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "rgba(8,24,16,0.55)",
      }} />

      {/* Bottom vignette */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: 280, zIndex: 3, pointerEvents: "none",
        background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.85) 100%)",
      }} />

      {/* Slideshow */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          style={{
            position: "absolute", inset: 0, zIndex: 1,
            transition: "opacity 1s ease-in-out",
            opacity: activeSlide === i ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ))}

      {/* Content */}
      <div
        className="hero-content-wrapper"
        style={{
          position: "relative", zIndex: 4,
          maxWidth: 1200, margin: "0 auto", width: "100%",
          padding: "0 2rem 5rem",
        }}
      >
        <div className="hero-content-grid">

          {/* ── Left: Title ── */}
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">
                33% महिलाओं एवं सरकारी कर्मचारियों के लिए आरक्षित
              </span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-line" style={{ display: "block" }}>धोलेरा </span>
              <span className="hero-title-line" style={{ display: "block", fontStyle: "italic", color: "#f5a54a" }}>
                आवास योजना
              </span>
            </h1>

            <div style={{
              width: 56, height: 3, marginTop: "1.2rem",
              background: "linear-gradient(90deg, #ea6c1a, #f5a54a)",
              borderRadius: 2,
            }} />
          </div>

          {/* ── Right: Description + CTA ── */}
          <div>
            <p style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              color: "rgba(255,255,255,0.72)",
              fontSize: "1rem", lineHeight: 1.8,
              marginBottom: "1.8rem",
            }}>
              धोलेरा SIR, गुजरात में फ्रीहोल्ड आवासीय प्लॉट। स्पष्ट मूल्य निर्धारण,
              निर्धारित भुगतान योजनाओं और दीर्घकालिक बुनियादी ढांचा-आधारित विकास क्षमता के साथ उपलब्ध।
            </p>

            <div className="hero-cta-row">
              <FeeCard />
              <a href="/register" className="hero-register-btn">
                अभी पंजीकरण करें
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FeeCard() {
  return (
    <div
      className="hero-fee-card"
      style={{
        background: "#1a3a6b",
        border: "1px solid rgba(201,144,26,0.50)",
        borderRadius: 12,
        padding: "0.9rem 1.6rem",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.8rem",
        boxShadow: "0 0 24px 6px rgba(201,144,26,0.25), 0 4px 16px rgba(0,0,0,0.3)",
      }}
    >
      <span style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
        color: "#ffffff", fontSize: "0.72rem",
        fontWeight: 500, letterSpacing: "0.1em",
      }}>
        आवेदन शुल्क
      </span>

      <span style={{
        width: 1, height: 28,
        background: "rgba(201,144,26,0.40)",
        display: "inline-block", flexShrink: 0,
      }} />

      <span style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
        color: "#f5a54a", fontSize: "1.5rem", fontWeight: 700,
      }}>
        ₹11,500
      </span>

      <span style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
        color: "#ffffff", fontSize: "0.72rem", fontWeight: 600,
        background: "rgba(201,144,26,0.15)",
        border: "1px solid rgba(201,144,26,0.30)",
        padding: "0.2rem 0.6rem", borderRadius: 999,
        whiteSpace: "nowrap",
      }}>
        ✓ वापसी योग्य
      </span>
    </div>
  );
}