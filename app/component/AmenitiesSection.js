"use client";

export default function Amenities() {
  const amenities = [
    {
      label: "क्लब हाउस",
      desc: "प्रीमियम सामाजिक और मनोरंजन केंद्र",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      label: "जॉगिंग ट्रैक",
      desc: "सुंदर वृक्षों से घिरे दौड़ने के रास्ते",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13" cy="5" r="2" />
          <path d="M15 14l-3-3-4 4" />
          <path d="M9 11l-3 6h12l-2-4" />
        </svg>
      ),
    },
    {
      label: "बहुउद्देशीय कोर्ट",
      desc: "बास्केटबॉल, बैडमिंटन और अधिक",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      ),
    },
    {
      label: "बच्चों का खेल क्षेत्र",
      desc: "बच्चों के लिए सुरक्षित और आनंदमय स्थान",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      label: "वरिष्ठ नागरिक क्षेत्र",
      desc: "बुजुर्गों के लिए शांतिपूर्ण स्वास्थ्य कोना",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v8" />
          <path d="M9 10h6" />
          <path d="M10 15l-2 5" />
          <path d="M14 15l2 5" />
        </svg>
      ),
    },
    {
      label: "इनडोर गेम्स",
      desc: "टेबल टेनिस, शतरंज और मनोरंजन",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M12 12h.01" />
          <path d="M7 12h.01" />
          <path d="M17 12h.01" />
        </svg>
      ),
    },
    {
      label: "पार्टी लॉन",
      desc: "पार्टी, अवसर और समारोह",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22 L12 2 L22 12 Z" />
          <line x1="12" y1="2" x2="2" y2="22" />
          <line x1="7" y1="12" x2="17" y2="7" />
          <circle cx="18" cy="5" r="1" fill="currentColor" stroke="none" />
          <circle cx="20" cy="9" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="15" cy="3" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "हरा-भरा पार्क",
      desc: "हरे-भरे भूदृश्य वाले खुले स्थान",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8C8 10 5.9 16.17 3.82 19.82A2 2 0 005.6 22h12.8a2 2 0 001.78-2.18C19.6 15.9 18 12 17 8z" />
          <path d="M12 22V12" />
        </svg>
      ),
    },
    {
      label: "वृक्षारोपण",
      desc: "पर्यावरण के प्रति सचेत हरित गलियारे",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V12" />
          <path d="M5 12H2l10-10 10 10h-3" />
          <path d="M5 17H2l10-10 10 10h-3" />
        </svg>
      ),
    },
    {
      label: "भव्य प्रवेश द्वार",
      desc: "प्रतिष्ठित लैंडमार्क प्रवेश द्वार",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="1" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
          <line x1="12" y1="14" x2="12" y2="17" />
        </svg>
      ),
    },
    {
      label: "सुरक्षा केबिन",
      desc: "24/7 गेटेड समुदाय सुरक्षा",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      label: "खुला एम्फीथिएटर",
      desc: "तारों की छाँव में सामुदायिक कार्यक्रम",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20" />
          <path d="M4 20V10a8 8 0 0116 0v10" />
          <path d="M8 20v-6a4 4 0 018 0v6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "7rem 0",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* Subtle background gradients */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle at 15% 50%, rgba(234,108,26,0.05) 0%, transparent 55%), radial-gradient(circle at 85% 15%, rgba(26,58,107,0.08) 0%, transparent 50%)",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            {/* Eyebrow pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(234,108,26,0.10)",
                border: "1px solid rgba(234,108,26,0.22)",
                borderRadius: 999,
                padding: "0.3rem 1rem",
                marginBottom: "1.2rem",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#ea6c1a",
                  display: "block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#c05a14",
                }}
              >
                विश्व स्तरीय सुविधाएं
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                fontWeight: 600,
                color: "#0d1f3c",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              जीवन की कला के लिए
              <br />
              <span style={{ fontStyle: "italic", color: "#ea6c1a" }}>
                डिज़ाइन किया गया
              </span>
            </h2>

            <div
              style={{
                width: 48,
                height: 2.5,
                marginTop: "1.2rem",
                background: "linear-gradient(90deg, #ea6c1a, #f5a54a)",
                borderRadius: 2,
              }}
            />
          </div>

          <p
            style={{
              fontSize: "0.92rem",
              color: "rgba(0,0,0,0.48)",
              lineHeight: 1.8,
              maxWidth: 340,
              margin: 0,
            }}
          >
            धोलेरा आवास योजना का हर विवरण रोज़मर्रा की जिंदगी को बेहतर बनाने
            के लिए तैयार किया गया है — सुबह की सैर से लेकर शाम की सभाओं तक।
          </p>
        </div>

        {/* ── Amenities Grid ── */}
        <div
          className="amenities-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(0,0,0,0.07)",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {amenities.map((item) => (
            <AmenityCard key={item.label} item={item} />
          ))}
        </div>

        {/* ── CTA Strip ── */}
        <div
          style={{
            marginTop: "4rem",
            background: "linear-gradient(135deg, #0d1f3c 0%, #1a3a6b 100%)",
            border: "1px solid rgba(234,108,26,0.18)",
            borderRadius: 16,
            padding: "2.5rem 3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.6rem",
                fontWeight: 600,
                color: "#ffffff",
                margin: "0 0 0.35rem",
                lineHeight: 1.2,
              }}
            >
              यह पंजीकरण चक्र जल्द बंद हो रहा है।
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.65)",
                margin: 0,
              }}
            >
              आवेदन शुल्क{" "}
              <strong style={{ color: "#f5a54a" }}>रु. 11,500</strong>
              <span style={{ marginLeft: "0.4rem", color: "rgba(255,255,255,0.45)" }}>
                *वापसी योग्य
              </span>
            </p>
          </div>

          <CTAButton href="/register" label="अभी आवेदन करें" />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap');

        .amenities-grid { grid-template-columns: repeat(4, 1fr); }

        @media (max-width: 1024px) {
          .amenities-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .amenities-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        .amenity-card {
          background: #1a3a6b;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          cursor: default;
          transition: background 0.25s ease;
          position: relative;
        }
        .amenity-card:hover {
          background: #1e4580;
        }
        .amenity-card:hover .amenity-top-line {
          opacity: 1;
        }

        .amenity-top-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #ea6c1a, #f5a54a);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .amenity-icon {
          width: 50px;
          height: 50px;
          border-radius: 13px;
          background: rgba(234,108,26,0.10);
          border: 1px solid rgba(234,108,26,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ea6c1a;
          flex-shrink: 0;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .amenity-card:hover .amenity-icon {
          background: rgba(234,108,26,0.16);
          border-color: rgba(234,108,26,0.30);
        }

        .amenity-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }
        .amenity-desc {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.38);
          line-height: 1.55;
          transition: color 0.25s ease;
        }
        .amenity-card:hover .amenity-desc {
          color: rgba(255,255,255,0.52);
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #ea6c1a;
          color: #ffffff;
          padding: 0.95rem 2.4rem;
          border-radius: 6px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.25s ease;
          white-space: nowrap;
          flex-shrink: 0;
          border: none;
          cursor: pointer;
        }
        .cta-btn:hover {
          background: #f07d2a;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}

function AmenityCard({ item }) {
  return (
    <div className="amenity-card">
      <div className="amenity-top-line" />
      <div className="amenity-icon">{item.icon}</div>
      <div>
        <div className="amenity-label">{item.label}</div>
        <div className="amenity-desc">{item.desc}</div>
      </div>
    </div>
  );
}

function CTAButton({ href, label }) {
  return (
    <a href={href} className="cta-btn">
      {label}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}