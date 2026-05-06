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
    <section style={{ fontFamily: '"Times New Roman", Times, serif', background: "#f0f0f0" }}>
      <style>{`
        .loc-tricolor { display: flex; height: 8px; width: 100%; }
        .loc-tricolor span:nth-child(1) { flex: 1; background: #FF9933; }
        .loc-tricolor span:nth-child(2) { flex: 1; background: #ffffff; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; }
        .loc-tricolor span:nth-child(3) { flex: 1; background: #138808; }

        .loc-marquee-wrap {
          background: #00308F; color: #FFD700;
          padding: 5px 0; overflow: hidden;
          border-top: 2px solid #FFD700; border-bottom: 2px solid #FFD700;
          font-size: 13px; font-weight: bold;
          letter-spacing: 0.04em; white-space: nowrap;
        }
        .loc-marquee-inner {
          display: inline-block;
          animation: loc-scroll 28s linear infinite;
          padding-left: 100%;
        }
        @keyframes loc-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }

        .loc-section-head {
          background: #00308F; color: #fff;
          padding: 8px 16px; font-size: 14px;
          font-weight: bold; border-left: 6px solid #FF9933;
          letter-spacing: 0.03em; text-transform: uppercase;
        }

        .loc-notice {
          background: #fffde7; border: 1px solid #f9a825;
          border-left: 5px solid #f57f17;
          padding: 9px 14px; font-size: 13px;
          color: #333; margin-bottom: 12px;
        }

        .loc-two-col {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 0;
          background: #fff;
          border: 1px solid #aab;
          border-top: none;
        }

        .loc-feature-row {
          border-bottom: 1px solid #ccc;
          padding: 12px 14px;
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 13px; color: #111; line-height: 1.6;
          background: #fff; transition: background 0.15s;
        }
        .loc-feature-row:nth-child(even) { background: #e8eef8; }
        .loc-feature-row:hover { background: #d0daf0; }
        .loc-feature-row:last-child { border-bottom: none; }

        .loc-gallery {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          border: 1px solid #aab;
          border-top: 2px solid #00308F;
          overflow: hidden;
        }
        .loc-gallery-thumb {
          position: relative;
          padding-top: 75%;
          overflow: hidden;
          cursor: pointer;
          border-right: 1px solid #aab;
        }
        .loc-gallery-thumb:last-child { border-right: none; }
        .loc-gallery-thumb img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }
        .loc-gallery-thumb:hover img { transform: scale(1.08); }
        .loc-gallery-overlay {
          position: absolute; inset: 0;
          background: rgba(0,48,143,0);
          transition: background 0.3s;
          display: flex; align-items: center; justify-content: center;
        }
        .loc-gallery-thumb:hover .loc-gallery-overlay {
          background: rgba(0,48,143,0.45);
        }
        .loc-gallery-icon { opacity: 0; transition: opacity 0.3s; }
        .loc-gallery-thumb:hover .loc-gallery-icon { opacity: 1; }

        .loc-gov-btn {
          display: inline-block; background: #138808; color: #fff;
          border: 2px outset #1aaa0a; padding: 7px 20px;
          font-size: 13px; font-weight: bold; text-decoration: none;
          cursor: pointer; font-family: "Times New Roman", serif;
          letter-spacing: 0.03em; transition: background 0.15s;
        }
        .loc-gov-btn:hover { background: #0d6e06; border-style: inset; }
        .loc-gov-btn-red { background: #b71c1c; border-color: #8b0000; }
        .loc-gov-btn-red:hover { background: #8b0000; }

        .loc-stats-row { display: flex; gap: 0; border: 1px solid #aab; overflow: hidden; }
        .loc-stat-cell {
          flex: 1; text-align: center; padding: 10px 6px;
          border-right: 1px solid #aab; background: #fff;
        }
        .loc-stat-cell:last-child { border-right: none; }
        .loc-stat-cell:nth-child(even) { background: #e8eef8; }

        .loc-footer-strip {
          background: #00308F; color: #fff; font-size: 12px;
          padding: 10px 16px; display: flex;
          justify-content: space-between; align-items: center;
          border-top: 3px solid #FF9933; flex-wrap: wrap; gap: 8px;
        }

        .loc-table {
          width: 100%; border-collapse: collapse; font-size: 13px; background: #fff;
        }
        .loc-table th {
          background: #00308F; color: #FFD700;
          padding: 7px 10px; text-align: left;
          border: 1px solid #003580; font-size: 11px;
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .loc-table td {
          padding: 7px 10px; border: 1px solid #bbb;
          vertical-align: top; color: #111; line-height: 1.5;
        }
        .loc-table tr:nth-child(even) td { background: #e8eef8; }
        .loc-table tr:hover td { background: #d0daf0; }

        @media (max-width: 1024px) {
          .loc-two-col { grid-template-columns: 1fr !important; }
          .loc-left-col { border-right: none !important; border-bottom: 1px solid #ccc; }
        }
        @media (max-width: 600px) {
          .loc-gallery { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 400px) {
          .loc-gallery { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* Tricolor top */}
      <div className="loc-tricolor"><span /><span /><span /></div>

      {/* Marquee */}
      <div className="loc-marquee-wrap">
        <div className="loc-marquee-inner">
          ★ धोलेरा में निवेश क्यों करें ★ गुजरात सरकार अनुमोदित ★ DMIC परियोजना ★ सीमित प्लॉट उपलब्ध ★ NA प्लॉट ★ फ्रीहोल्ड संपत्ति ★ अभी पंजीकरण करें ★&nbsp;&nbsp;&nbsp;★ धोलेरा में निवेश क्यों करें ★ गुजरात सरकार अनुमोदित ★ DMIC परियोजना ★ सीमित प्लॉट उपलब्ध ★ NA प्लॉट ★ फ्रीहोल्ड संपत्ति ★ अभी पंजीकरण करें ★
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px 0" }}>

        {/* Notice */}
        <div className="loc-notice">
          <strong>⚠ सूचना:</strong> धोलेरा आवास योजना में निवेश के लिए नीचे दी गई जानकारी देखें। प्रबंधन कोटा में केवल <strong>235 प्लॉट शेष</strong> हैं। आवेदन शुल्क <strong>₹11,500</strong> (पूर्णतः वापसी योग्य)।
        </div>

        {/* Section heading */}
        <div className="loc-section-head">
          अनुभाग: लोकेशन लाभ — दीर्घकालिक भूमि निवेश के लिए सही स्थान
        </div>

        {/* Two col layout */}
        <div className="loc-two-col">

          {/* LEFT: Text content */}
          <div className="loc-left-col" style={{ padding: "16px", borderRight: "1px solid #ccc" }}>
            <div style={{
              fontSize: 11, fontWeight: "bold", color: "#00308F",
              textTransform: "uppercase", letterSpacing: "0.06em",
              borderBottom: "2px solid #FF9933", paddingBottom: 4, marginBottom: 12,
            }}>
              ► परियोजना विवरण
            </div>

            <p style={{ fontSize: 13, color: "#333", lineHeight: 1.75, margin: "0 0 12px" }}>
              धोलेरा प्लॉट में निवेश सट्टेबाजी वाली रियल एस्टेट खरीद से मौलिक रूप से अलग है। यहाँ मूल्य सरकारी योजना, बुनियादी ढाँचे की समयसीमाओं और राष्ट्रीय औद्योगिक रणनीति में निहित है। धोलेरा गुजरात प्रोजेक्ट अफवाहों पर नहीं — बल्कि क्रियान्वयन पर आधारित है।
            </p>

            <div style={{
              background: "#fffde7",
              borderLeft: "5px solid #FF9933",
              padding: "8px 12px",
              fontSize: 13, color: "#333",
              lineHeight: 1.7, marginBottom: 14,
              fontStyle: "italic",
            }}>
              "शुरुआती निवेशकों को सबसे अधिक लाभ मिलता है क्योंकि धोलेरा मेट्रो सिटी का बुनियादी ढाँचा, हवाई अड्डा कनेक्टिविटी और औद्योगिक क्षेत्र योजना से संचालन की ओर बढ़ रहे हैं।"
            </div>

            <table className="loc-table">
              <tbody>
                {[
                  ["परियोजना", "धोलेरा आवास योजना"],
                  ["स्थान", "धोलेरा SIR, गुजरात"],
                  ["दूरी (अहमदाबाद)", "109 किमी एक्सप्रेसवे"],
                  ["स्वीकृति", "DMIC / केंद्र सरकार"],
                  ["प्लॉट प्रकार", "NA फ्रीहोल्ड"],
                  ["BSP दर", "₹7,500 / वर्ग गज"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ fontWeight: "bold", background: "#eef1f8", width: "45%" }}>{k}</td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* RIGHT: Feature rows */}
          <div>
            <div style={{
              background: "#00308F", color: "#FFD700",
              padding: "5px 10px", fontSize: 11, fontWeight: "bold",
              textTransform: "uppercase", letterSpacing: "0.06em",
            }}>
              निवेश लाभ सूची
            </div>

            {features.map((feat, i) => (
              <div className="loc-feature-row" key={i}>
                <span style={{
                  minWidth: 22, fontSize: 11,
                  color: "#FF9933", fontWeight: "bold", paddingTop: 1,
                }}>
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span>
                  <span style={{
                    display: "inline-block", fontSize: 10,
                    padding: "1px 7px",
                    border: "1px solid #aac4e8",
                    background: "#e8f0fb", color: "#00308F",
                    marginBottom: 3, fontWeight: "bold", letterSpacing: "0.04em",
                  }}>
                    लाभ
                  </span>
                  <br />
                  <span style={{ fontSize: 13, color: "#00308F", fontWeight: "bold", lineHeight: 1.5 }}>
                    {feat}
                  </span>
                </span>
              </div>
            ))}

            {/* Infrastructure table */}
            <div style={{ padding: "12px 14px" }}>
              <div style={{
                fontSize: 11, fontWeight: "bold", color: "#00308F",
                textTransform: "uppercase", letterSpacing: "0.06em",
                borderBottom: "2px solid #FF9933", paddingBottom: 4, marginBottom: 8,
              }}>
                ► आगामी बुनियादी ढाँचा
              </div>
              <table className="loc-table">
                <thead>
                  <tr>
                    <th>परियोजना</th>
                    <th>स्थिति</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["अंतर्राष्ट्रीय हवाई अड्डा", "✔ प्रस्तावित"],
                    ["6-लेन एक्सप्रेसवे", "✔ निर्माणाधीन"],
                    ["मेट्रो रेल लिंक", "✔ नियोजित"],
                    ["सौर ऊर्जा पार्क", "✔ चालू"],
                    ["DFC फ्रेट कॉरिडोर", "✔ निर्माणाधीन"],
                  ].map(([k, v]) => (
                    <tr key={k}>
                      <td>{k}</td>
                      <td style={{ color: "#138808", fontWeight: "bold", fontSize: 12 }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Gallery heading */}
        <div style={{
          background: "#e8eef8", padding: "6px 12px",
          fontSize: 11, fontWeight: "bold", color: "#00308F",
          textTransform: "uppercase", letterSpacing: "0.06em",
          border: "1px solid #aab", borderTop: "2px solid #00308F",
          borderBottom: "none",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginTop: 16,
        }}>
          <span>► फोटो गैलरी — Location Gallery</span>
          <span style={{ color: "#888", fontWeight: "normal" }}>{slides.length} चित्र | क्लिक करें बड़ा देखने के लिए</span>
        </div>

        {/* Gallery grid */}
        <div className="loc-gallery">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="loc-gallery-thumb"
              onClick={() => openLightbox(i)}
            >
              <img src={slide.src} alt={slide.alt} />
              <div className="loc-gallery-overlay">
                <svg className="loc-gallery-icon" width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="white" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
                </svg>
              </div>
              {/* Caption bar */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "rgba(0,48,143,0.82)",
                color: "#FFD700", fontSize: 9, fontWeight: "bold",
                padding: "3px 6px", letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}>
                {slide.alt}
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="loc-stats-row" style={{ borderTop: "2px solid #00308F" }}>
          {[
            { val: "920", label: "कुल क्षेत्र (km²)" },
            { val: "109 km", label: "अहमदाबाद दूरी" },
            { val: "235", label: "शेष प्लॉट" },
            { val: "₹11,500", label: "आवेदन शुल्क" },
            { val: "100%", label: "वापसी योग्य" },
          ].map(s => (
            <div className="loc-stat-cell" key={s.label}>
              <div style={{ fontSize: 18, fontWeight: "bold", color: "#b71c1c", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{ border: "2px solid #b71c1c", background: "#fff", marginTop: 16 }}>
          <div style={{
            background: "#b71c1c", color: "#fff", padding: "6px 14px",
            fontSize: 13, fontWeight: "bold", textTransform: "uppercase",
            letterSpacing: "0.06em", display: "flex", alignItems: "center", gap: 8,
          }}>
            <span style={{ fontSize: 16 }}>⚠</span>
            अंतिम अवसर सूचना — काउंटडाउन खत्म, अवसर खत्म
          </div>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 18px", flexWrap: "wrap", gap: 12,
          }}>
            <div>
              <p style={{ fontSize: 14, color: "#111", margin: "0 0 4px", fontWeight: "bold" }}>
                प्रबंधन कोटा में केवल <span style={{ color: "#b71c1c", fontSize: 18 }}>235</span> प्लॉट शेष हैं।
              </p>
              <p style={{ fontSize: 12, color: "#555", margin: 0 }}>
                आवेदन शुल्क: <strong style={{ color: "#00308F" }}>₹11,500</strong>&nbsp;
                <span style={{ color: "#138808" }}>★ पूर्णतः वापसी योग्य</span>
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="/register" className="loc-gov-btn">▶ अपनी रुचि दर्ज करें</a>
              <a href="/register" className="loc-gov-btn loc-gov-btn-red">☎ संपर्क करें</a>
            </div>
          </div>
        </div>

      </div>

      {/* Footer strip */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div className="loc-footer-strip">
          <span>© धोलेरा SIR निवेश पोर्टल | लोकेशन लाभ</span>
          <span style={{ fontSize: 11, color: "#aac" }}>अंतिम अद्यतन: मार्च 2026 | DMIC अनुमोदित</span>
        </div>
      </div>

      {/* Tricolor bottom */}
      <div className="loc-tricolor"><span /><span /><span /></div>

      {/* LIGHTBOX — kept functional, styled to match */}
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
          {/* Top bar */}
          <div style={{
            position: "fixed", top: 0, left: 0, right: 0,
            background: "#00308F", color: "#FFD700",
            padding: "6px 16px", fontSize: 12, fontWeight: "bold",
            letterSpacing: "0.06em", textTransform: "uppercase",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            zIndex: 10001,
          }}>
            <span>धोलेरा SIR — फोटो गैलरी ({lightboxIndex + 1}/{slides.length})</span>
            <span style={{ color: "#ccc", fontSize: 11 }}>{slides[lightboxIndex].alt}</span>
          </div>

          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "88vw", maxHeight: "80vh",
              border: "2px solid #00308F",
              cursor: "default",
            }}
          >
            <img
              src={slides[lightboxIndex].src}
              alt={slides[lightboxIndex].alt}
              style={{
                display: "block",
                maxWidth: "88vw", maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Prev */}
          <button onClick={e => { e.stopPropagation(); prevSlide(); }} style={{
            position: "fixed", left: 16, top: "50%", transform: "translateY(-50%)",
            background: "#00308F", border: "2px outset #003580",
            color: "#FFD700", cursor: "pointer", zIndex: 10000,
            padding: "8px 12px", fontSize: 18, fontWeight: "bold",
            fontFamily: '"Times New Roman", serif',
          }}>◀</button>

          {/* Next */}
          <button onClick={e => { e.stopPropagation(); nextSlide(); }} style={{
            position: "fixed", right: 16, top: "50%", transform: "translateY(-50%)",
            background: "#00308F", border: "2px outset #003580",
            color: "#FFD700", cursor: "pointer", zIndex: 10000,
            padding: "8px 12px", fontSize: 18, fontWeight: "bold",
            fontFamily: '"Times New Roman", serif',
          }}>▶</button>

          {/* Close */}
          <button onClick={closeLightbox} style={{
            position: "fixed", top: 40, right: 16,
            background: "#b71c1c", border: "2px outset #8b0000",
            color: "#fff", cursor: "pointer", zIndex: 10000,
            padding: "6px 12px", fontSize: 13, fontWeight: "bold",
            fontFamily: '"Times New Roman", serif',
          }}>✕ बंद करें</button>

          {/* Dot navigation */}
          <div style={{
            position: "fixed", bottom: 16, left: "50%", transform: "translateX(-50%)",
            display: "flex", gap: 6, zIndex: 10000,
          }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setLightboxIndex(i); }}
                style={{
                  width: 10, height: 10,
                  background: i === lightboxIndex ? "#FFD700" : "rgba(255,255,255,0.4)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  cursor: "pointer", padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}