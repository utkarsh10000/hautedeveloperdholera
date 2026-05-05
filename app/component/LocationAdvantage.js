"use client";

import { useState, useEffect, useCallback } from "react";

export default function LocationAdvantage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const slides = [
    { src: "/RRG-Aerowalk-Location-.jpg",                alt: "RRG एरोवॉक लोकेशन मैप" },
    { src: "/Ahmedabad-Dholera-Expressway-300x158.jpg",  alt: "अहमदाबाद-धोलेरा एक्सप्रेसवे" },
    { src: "/Dholera-International-Airport-300x158.jpg", alt: "धोलेरा अंतर्राष्ट्रीय हवाई अड्डा" },
    { src: "/DMIC.jpg",                                  alt: "DMIC फ्रेट कॉरिडोर मैप" },
    { src: "/ABCD-Building.jpg",                         alt: "ABCD बिल्डिंग धोलेरा" },
  ];

  const features = [
    "उचित परिश्रम सहायता के साथ स्पष्ट-शीर्षक NA प्लॉट",
    "धोलेरा भूमि मूल्य बेंचमार्क के अनुरूप पारदर्शी मूल्य निर्धारण",
    "साइट विजिट से पंजीकरण तक मार्गदर्शन",
  ];

  const openLightbox  = (i) => setLightboxIndex(i);
  const closeLightbox = ()  => setLightboxIndex(null);
  const prevSlide = useCallback(() => setLightboxIndex((p) => (p - 1 + slides.length) % slides.length), [slides.length]);
  const nextSlide = useCallback(() => setLightboxIndex((p) => (p + 1) % slides.length), [slides.length]);
  const goTo      = (i) => setLightboxIndex(i);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft")  prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape")     closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prevSlide, nextSlide]);

  return (
    <section style={{
      background: "#f8f5ef",
      padding: "6rem 0 5rem",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'DM Sans', system-ui, sans-serif",
    }}>
      {/* Top gold rule */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg, transparent, #ea6c1a 30%, #f5a54a 60%, transparent)",
      }} />

      {/* Background watermark */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: "clamp(8rem, 18vw, 18rem)",
        fontWeight: 700, color: "rgba(13,47,36,0.04)",
        whiteSpace: "nowrap", pointerEvents: "none",
        userSelect: "none", letterSpacing: "-0.02em", zIndex: 0,
      }}>धोलेरा</div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>

        {/* Label */}
        <div style={{ marginBottom: "0.6rem" }}>
          <span style={{
            fontSize: "0.72rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase", color: "#ea6c1a",
          }}>धोलेरा में निवेश क्यों करें</span>
        </div>

        {/* TWO-COLUMN */}
        <div className="loc-two-col" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.15fr",
          gap: "5rem",
          alignItems: "stretch",
          marginBottom: "2.5rem",
        }}>
          {/* LEFT */}
          <div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 700, color: "#1a3a6b", lineHeight: 1.1,
              margin: "0 0 1.8rem",
            }}>
              दीर्घकालिक भूमि<br />निवेश के लिए<br />सही स्थान
            </h2>

            <p style={{
              fontSize: "0.95rem", color: "rgba(13,47,36,0.65)",
              lineHeight: 1.85, margin: "0 0 1rem",
            }}>
              धोलेरा प्लॉट में निवेश सट्टेबाजी वाली रियल एस्टेट खरीद से मौलिक रूप से अलग है। यहाँ मूल्य सरकारी योजना, बुनियादी ढाँचे की समयसीमाओं और राष्ट्रीय औद्योगिक रणनीति में निहित है। धोलेरा गुजरात प्रोजेक्ट अफवाहों पर नहीं — बल्कि क्रियान्वयन पर आधारित है।
            </p>

            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.05rem", fontStyle: "italic",
              color: "#1a3a6b", lineHeight: 1.75,
              margin: "0",
              paddingLeft: "1.2rem",
              borderLeft: "3px solid #ea6c1a",
            }}>
              "शुरुआती निवेशकों को सबसे अधिक लाभ मिलता है क्योंकि धोलेरा मेट्रो सिटी का बुनियादी ढाँचा, हवाई अड्डा कनेक्टिविटी और औद्योगिक क्षेत्र योजना से संचालन की ओर बढ़ रहे हैं।"
            </p>
          </div>

          {/* RIGHT: feature boxes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "0.3rem", justifyContent: "center", height: "100%" }}>
            {features.map((feat, i) => (
              <div
                key={i}
                style={{
                  background: "#1a3a6b", borderRadius: 10,
                  padding: "1.6rem 1.8rem",
                  borderLeft: "4px solid #ea6c1a",
                  cursor: "default", transition: "all 0.3s",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#1e4580";
                  e.currentTarget.style.transform = "translateX(6px)";
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(201,144,26,0.18)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "#1a3a6b";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
                }}
              >
                <span style={{
                  fontSize: "0.8rem", fontWeight: 800,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#ffffff", lineHeight: 1.5,
                }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE GALLERY STRIP */}
        <div className="loc-gallery" style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "8px",
          width: "100%",
          marginBottom: "3.5rem",
        }}>
          {slides.map((slide, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              style={{
                position: "relative",
                paddingTop: "75%",
                overflow: "hidden",
                borderRadius: 8,
                cursor: "pointer",
              }}
              className="gallery-thumb"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                  display: "block",
                }}
                className="gallery-img"
              />
              <div className="gallery-overlay" style={{
                position: "absolute", inset: 0,
                background: "rgba(13,47,36,0)",
                transition: "background 0.3s",
                borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg className="gallery-icon" width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="white" strokeWidth="2"
                  style={{ opacity: 0, transition: "opacity 0.3s" }}
                >
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{
          background: "linear-gradient(135deg, #1a3a6b 0%, #1e4580 100%)",
          borderRadius: 20, padding: "2rem 2rem",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontStyle: "italic", color: "#ffffff",
              margin: "0 0 0.5rem", lineHeight: 1.3,
            }}>काउंटडाउन खत्म, अवसर खत्म।</p>
            <p style={{ fontSize: "0.85rem", color: "#ffffff", margin: 0 }}>
              आवेदन शुल्क <strong style={{ color: "#f5a54a" }}>रु. 11,500</strong>
              <span style={{ color: "#ffffff", marginLeft: "0.5rem" }}>*वापसी योग्य</span>
            </p>
          </div>
          <a href="/register" style={{
            position: "relative", zIndex: 1,
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            background: "#ea6c1a", color: "#ffffff",
            padding: "1rem 2.6rem", borderRadius: 6,
            fontSize: "0.85rem", fontWeight: 700,
            letterSpacing: "0.09em", textTransform: "uppercase",
            textDecoration: "none", transition: "all 0.3s",
            whiteSpace: "nowrap", flexShrink: 0,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#f07d2a"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#ea6c1a"; }}
            className="loc-cta-btn"
          >
            अपनी रुचि दर्ज करें
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "88vw", maxHeight: "85vh",
              borderRadius: 12, overflow: "hidden",
              cursor: "default",
            }}
          >
            <img
              src={slides[lightboxIndex].src}
              alt={slides[lightboxIndex].alt}
              style={{
                display: "block",
                maxWidth: "88vw", maxHeight: "85vh",
                objectFit: "contain",
              }}
            />
          </div>

          <button onClick={e => { e.stopPropagation(); prevSlide(); }} style={{
            position: "fixed", left: 20, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "50%", width: 52, height: 52,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", cursor: "pointer", zIndex: 10000,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <button onClick={e => { e.stopPropagation(); nextSlide(); }} style={{
            position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "50%", width: 52, height: 52,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", cursor: "pointer", zIndex: 10000,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <button onClick={closeLightbox} style={{
            position: "fixed", top: 20, right: 20,
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "50%", width: 44, height: 44,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", cursor: "pointer", zIndex: 10000,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
      )}

      <style>{`
        .gallery-thumb:hover .gallery-img { transform: scale(1.08); }
        .gallery-thumb:hover .gallery-overlay { background: rgba(13,47,36,0.4) !important; }
        .gallery-thumb:hover .gallery-icon { opacity: 1 !important; }

        @media (max-width: 1024px) {
          .loc-two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 600px) {
          .loc-gallery { grid-template-columns: repeat(3, 1fr) !important; }
          .loc-cta-btn { width: 100% !important; }
        }
        @media (max-width: 400px) {
          .loc-gallery { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}