"use client";

import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    number: "01",
    title: "स्पष्ट-शीर्षक NA प्लॉट",
    subtitle: "उचित परिश्रम सहायता के साथ",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "पारदर्शी मूल्य निर्धारण",
    subtitle: "धोलेरा भूमि बेंचमार्क के अनुरूप",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "संपूर्ण मार्गदर्शन",
    subtitle: "साइट विज़िट से पंजीकरण तक",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const cityFacts = [
  {
    stat: "920",
    unit: "वर्ग किमी",
    label: "कुल परियोजना क्षेत्र",
    detail: "एक संरचित मास्टर प्लान के तहत 567.39 वर्ग किमी विकास योग्य क्षेत्र के रूप में निर्धारित।",
  },
  {
    stat: "2M",
    unit: "निवासी",
    label: "नियोजित जनसंख्या",
    detail: "औद्योगिक, वाणिज्यिक और सेवा क्षेत्रों में लगभग 8,00,000 रोजगार के अवसर सृजित होंगे।",
  },
  {
    stat: "4",
    unit: "ज़ोन",
    label: "उच्च-पहुँच शहरी कॉरिडोर",
    detail: "सिटी सेंटर, औद्योगिक, लॉजिस्टिक्स, ज्ञान और आईटी ज़ोन के साथ मनोरंजन, खेल और एंटरटेनमेंट जिले।",
  },
  {
    stat: "3",
    unit: "महानगर",
    label: "निर्बाध कनेक्टिविटी",
    detail: "केंद्रीय स्पाइन एक्सप्रेसवे, प्रस्तावित मेट्रो रेल और अहमदाबाद, भावनगर व वडोदरा से जुड़ाव।",
  },
  {
    stat: "1",
    unit: "DFC लिंक",
    label: "वैश्विक व्यापार पहुँच",
    detail: "अंतर्राष्ट्रीय हवाई अड्डा, समुद्री बंदरगाह और डेडिकेटेड फ्रेट कॉरिडोर धोलेरा की वैश्विक लॉजिस्टिक्स भूमिका को मजबूत करते हैं।",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function WhyInvest() {
  const [activeFactIndex, setActiveFactIndex] = useState(0);
  const [sectionRef, sectionInView] = useInView(0.1);
  const [visionRef, visionInView] = useInView(0.1);
  const [marqueeText] = useState(
    "★ धोलेरा स्पेशल इन्वेस्टमेंट रीजन (DSIR) ★ गुजरात सरकार अनुमोदित ★ DMIC परियोजना ★ राष्ट्रीय महत्व की परियोजना ★ सीमित प्लॉट उपलब्ध ★ अभी पंजीकरण करें ★"
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi&display=swap');

        .gov-section {
          font-family: "Times New Roman", Times, serif;
          background: #f0f0f0;
        }

        /* ── Tricolor header bar ── */
        .gov-tricolor {
          display: flex;
          height: 8px;
          width: 100%;
        }
        .gov-tricolor span:nth-child(1) { flex: 1; background: #FF9933; }
        .gov-tricolor span:nth-child(2) { flex: 1; background: #ffffff; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; }
        .gov-tricolor span:nth-child(3) { flex: 1; background: #138808; }

        /* ── Marquee ── */
        .gov-marquee-wrap {
          background: #00308F;
          color: #FFD700;
          padding: 5px 0;
          overflow: hidden;
          border-top: 2px solid #FFD700;
          border-bottom: 2px solid #FFD700;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .gov-marquee-inner {
          display: inline-block;
          animation: gov-scroll 28s linear infinite;
          padding-left: 100%;
        }
        @keyframes gov-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }

        /* ── Section heading banner ── */
        .gov-section-head {
          background: #00308F;
          color: #fff;
          padding: 8px 16px;
          font-size: 16px;
          font-weight: bold;
          border-left: 6px solid #FF9933;
          letter-spacing: 0.03em;
          margin-bottom: 0;
          text-transform: uppercase;
        }

        /* ── Table styles ── */
        .gov-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
          background: #fff;
        }
        .gov-table th {
          background: #00308F;
          color: #FFD700;
          padding: 7px 10px;
          text-align: left;
          border: 1px solid #003580;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .gov-table td {
          padding: 7px 10px;
          border: 1px solid #bbb;
          vertical-align: top;
          color: #111;
          line-height: 1.5;
        }
        .gov-table tr:nth-child(even) td { background: #e8eef8; }
        .gov-table tr:hover td { background: #d0daf0; }

        /* ── Info box ── */
        .gov-infobox {
          border: 2px solid #00308F;
          background: #fff;
          padding: 0;
          font-size: 13px;
        }
        .gov-infobox-head {
          background: #00308F;
          color: #FFD700;
          padding: 6px 12px;
          font-weight: bold;
          font-size: 13px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .gov-infobox-body {
          padding: 10px 14px;
        }
        .gov-infobox-row {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dotted #aaa;
          padding: 5px 0;
          font-size: 13px;
          color: #111;
        }
        .gov-infobox-row:last-child { border-bottom: none; }
        .gov-infobox-label { color: #555; }
        .gov-infobox-val { font-weight: bold; color: #00308F; }

        /* ── Notice box ── */
        .gov-notice {
          background: #fffde7;
          border: 1px solid #f9a825;
          border-left: 5px solid #f57f17;
          padding: 10px 14px;
          font-size: 13px;
          color: #333;
          margin-bottom: 12px;
        }
        .gov-notice strong { color: #b71c1c; }

        /* ── Bullet list ── */
        .gov-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 13px;
          color: #222;
        }
        .gov-list li {
          padding: 5px 0 5px 18px;
          border-bottom: 1px dotted #ccc;
          position: relative;
          line-height: 1.5;
        }
        .gov-list li::before {
          content: "▶";
          position: absolute;
          left: 0;
          color: #FF9933;
          font-size: 9px;
          top: 8px;
        }
        .gov-list li:last-child { border-bottom: none; }

        /* ── CTA button ── */
        .gov-btn {
          display: inline-block;
          background: #138808;
          color: #fff;
          border: 2px outset #1aaa0a;
          padding: 8px 22px;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          cursor: pointer;
          font-family: "Times New Roman", serif;
          letter-spacing: 0.03em;
          transition: background 0.15s;
        }
        .gov-btn:hover { background: #0d6e06; border-style: inset; }

        .gov-btn-red {
          background: #b71c1c;
          border-color: #8b0000;
        }
        .gov-btn-red:hover { background: #8b0000; }

        /* ── Footer strip ── */
        .gov-footer-strip {
          background: #00308F;
          color: #fff;
          font-size: 12px;
          padding: 10px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 3px solid #FF9933;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* ── Accordion ── */
        .gov-accord-btn {
          width: 100%;
          text-align: left;
          background: #e8eef8;
          border: 1px solid #aab;
          border-bottom: none;
          padding: 7px 12px;
          font-size: 13px;
          font-family: "Times New Roman", serif;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #00308F;
          font-weight: bold;
        }
        .gov-accord-btn.active {
          background: #00308F;
          color: #FFD700;
          border-color: #00308F;
        }
        .gov-accord-body {
          border: 1px solid #aab;
          border-top: none;
          padding: 8px 12px;
          background: #fff;
          font-size: 13px;
          color: #333;
          line-height: 1.6;
          display: none;
        }
        .gov-accord-body.open { display: block; }

        /* ── Watermark ── */
        .gov-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-30deg);
          font-size: 5rem;
          font-weight: bold;
          color: rgba(0,48,143,0.04);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .gov-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .gov-three-col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        @media (max-width: 768px) {
          .gov-two-col { grid-template-columns: 1fr !important; }
          .gov-three-col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <div className="gov-section">

        {/* Tricolor top */}
        <div className="gov-tricolor">
          <span /><span /><span />
        </div>

        {/* Marquee */}
        <div className="gov-marquee-wrap">
          <div className="gov-marquee-inner">{marqueeText}&nbsp;&nbsp;&nbsp;{marqueeText}</div>
        </div>

        {/* ════════════════════════════════════
            SECTION 1 — निवेश क्यों करें
        ════════════════════════════════════ */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px", position: "relative" }}>
          <div className="gov-watermark">DSIR</div>

          {/* Notice */}
          <div className="gov-notice">
            <strong>⚠ महत्वपूर्ण सूचना:</strong> प्रबंधन कोटा में केवल <strong>235 प्लॉट शेष</strong> हैं। पंजीकरण की अंतिम तिथि से पहले आवेदन करें। आवेदन शुल्क ₹11,500 (पूर्णतः वापसी योग्य)।
          </div>

          {/* Section heading */}
          <div className="gov-section-head">धोलेरा SIR में निवेश क्यों करें — विस्तृत जानकारी</div>

          <div className="gov-two-col" style={{ marginTop: 0, background: "#fff", border: "1px solid #aab" }}>

            {/* LEFT */}
            <div style={{ padding: "14px", borderRight: "1px solid #ccc" }}>
              <p style={{ fontSize: 13, color: "#222", lineHeight: 1.7, marginBottom: 10 }}>
                धोलेरा प्लॉट में निवेश करना सट्टा रियल एस्टेट खरीद से मौलिक रूप से अलग है। यहाँ मूल्य सरकारी योजना, बुनियादी ढाँचे की समयसीमा और राष्ट्रीय औद्योगिक रणनीति पर आधारित है।
              </p>

              <blockquote style={{
                borderLeft: "4px solid #FF9933",
                paddingLeft: 10,
                margin: "10px 0",
                fontSize: 13,
                color: "#444",
                fontStyle: "italic",
                lineHeight: 1.65,
                background: "#fffde7",
                padding: "8px 12px",
              }}>
                "शुरुआती निवेशकों को सबसे अधिक लाभ होता है क्योंकि धोलेरा मेट्रो सिटी का बुनियादी ढाँचा, हवाई अड्डे की कनेक्टिविटी और औद्योगिक क्षेत्र योजना से संचालन की ओर बढ़ रहे हैं।"
              </blockquote>

              {/* Stat table */}
              <table className="gov-table" style={{ marginTop: 10 }}>
                <thead>
                  <tr>
                    <th>विवरण</th>
                    <th>आँकड़ा</th>
                    <th>इकाई</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["परियोजना क्षेत्र", "920", "वर्ग किमी"],
                    ["नियोजित जनसंख्या", "2,000,000", "निवासी"],
                    ["रोजगार लक्ष्य", "8,00,000", "नौकरियाँ"],
                    ["प्रबंधन कोटा दर", "₹7,200", "प्रति वर्ग गज"],
                    ["आवेदन शुल्क", "₹11,500", "वापसी योग्य"],
                  ].map(([label, val, unit]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td style={{ fontWeight: "bold", color: "#00308F" }}>{val}</td>
                      <td style={{ color: "#555" }}>{unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* RIGHT */}
            <div style={{ padding: "14px" }}>
              <div style={{
                background: "#00308F", color: "#FFD700",
                padding: "5px 10px", fontSize: 12,
                fontWeight: "bold", textTransform: "uppercase",
                letterSpacing: "0.06em", marginBottom: 8,
              }}>
                निवेश लाभ सूची
              </div>
              <ul className="gov-list">
                {reasons.map((r) => (
                  <li key={r.number}>
                    <strong style={{ color: "#00308F" }}>{r.number}. {r.title}</strong>
                    <br />
                    <span style={{ color: "#555", fontSize: 12 }}>{r.subtitle}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 14 }}>
                <div className="gov-infobox">
                  <div className="gov-infobox-head">आवेदन विवरण</div>
                  <div className="gov-infobox-body">
                    {[
                      ["कोटा प्रकार", "प्रबंधन कोटा"],
                      ["कुल प्लॉट", "646"],
                      ["आवंटित", "411"],
                      ["शेष उपलब्ध", "235"],
                      ["दर", "₹7,200/वर्ग गज"],
                      ["आवेदन शुल्क", "₹11,500"],
                      ["वापसी", "हाँ, पूर्णतः"],
                      ["स्थिति", "खुला है"],
                    ].map(([k, v]) => (
                      <div className="gov-infobox-row" key={k}>
                        <span className="gov-infobox-label">{k}</span>
                        <span className="gov-infobox-val">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <a href="/register" className="gov-btn">▶ अभी आवेदन करें</a>
                <a href="/register" className="gov-btn gov-btn-red">⚠ सीमित सीटें</a>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════
            SECTION 2 — स्मार्ट सिटी विज़न
        ════════════════════════════════════ */}
        <div style={{ background: "#e4e8f0", borderTop: "3px double #00308F", borderBottom: "3px double #00308F", marginTop: 24 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px" }}>

            <div className="gov-section-head">धोलेरा स्मार्ट सिटी — तथ्य एवं आँकड़े (Facts &amp; Figures)</div>

            <div className="gov-two-col" style={{ marginTop: 0, background: "#fff", border: "1px solid #aab" }}>

              {/* LEFT: image + caption */}
              <div style={{ padding: 0, borderRight: "1px solid #ccc" }}>
                <img
                  src="/Dholera-smart-city.jpg"
                  alt="धोलेरा स्मार्ट सिटी हवाई दृश्य"
                  style={{ width: "100%", display: "block", height: 220, objectFit: "cover" }}
                />
                <div style={{
                  background: "#f5f5f5",
                  borderTop: "1px solid #ccc",
                  padding: "6px 10px",
                  fontSize: 11,
                  color: "#555",
                  textAlign: "center",
                  fontStyle: "italic",
                }}>
                  चित्र: धोलेरा स्पेशल इन्वेस्टमेंट रीजन का प्रस्तावित हवाई दृश्य
                </div>

                <div style={{ padding: "12px 14px" }}>
                  <div style={{
                    fontSize: 12, fontWeight: "bold", color: "#00308F",
                    textTransform: "uppercase", letterSpacing: "0.05em",
                    borderBottom: "1px solid #ccc", paddingBottom: 4, marginBottom: 8,
                  }}>
                    परियोजना पहचान
                  </div>
                  <table className="gov-table">
                    <tbody>
                      {[
                        ["परियोजना का नाम", "धोलेरा SIR"],
                        ["राज्य", "गुजरात"],
                        ["स्वीकृति", "केंद्र सरकार / DMIC"],
                        ["श्रेणी", "ग्रीनफील्ड स्मार्ट सिटी"],
                        ["अहमदाबाद से दूरी", "109 किमी"],
                        ["हवाई अड्डा", "प्रस्तावित अंतर्राष्ट्रीय"],
                      ].map(([k, v]) => (
                        <tr key={k}>
                          <td style={{ fontWeight: "bold", width: "45%", background: "#eef1f8" }}>{k}</td>
                          <td>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* RIGHT: accordion facts */}
              <div style={{ padding: "14px" }}>
                <div style={{
                  fontSize: 12, fontWeight: "bold", color: "#00308F",
                  textTransform: "uppercase", letterSpacing: "0.05em",
                  borderBottom: "2px solid #FF9933", paddingBottom: 4, marginBottom: 10,
                }}>
                  ► मुख्य तथ्य — विस्तार से देखें
                </div>

                {cityFacts.map((fact, i) => (
                  <div key={i}>
                    <button
                      className={`gov-accord-btn${activeFactIndex === i ? " active" : ""}`}
                      onClick={() => setActiveFactIndex(activeFactIndex === i ? -1 : i)}
                    >
                      <span>
                        <strong style={{ color: activeFactIndex === i ? "#FFD700" : "#b71c1c" }}>
                          {fact.stat} {fact.unit}
                        </strong>
                        {" — "}{fact.label}
                      </span>
                      <span style={{ fontSize: 11 }}>{activeFactIndex === i ? "▲" : "▼"}</span>
                    </button>
                    <div className={`gov-accord-body${activeFactIndex === i ? " open" : ""}`}>
                      {fact.detail}
                    </div>
                  </div>
                ))}

                {/* Stats grid */}
                <div className="gov-three-col" style={{ marginTop: 14 }}>
                  {[
                    { val: "920", unit: "वर्ग किमी", label: "परियोजना क्षेत्र" },
                    { val: "2M+", unit: "निवासी", label: "नियोजित क्षमता" },
                    { val: "800K", unit: "नौकरियाँ", label: "रोजगार लक्ष्य" },
                  ].map((s) => (
                    <div key={s.label} style={{
                      border: "2px solid #00308F",
                      textAlign: "center",
                      padding: "8px 4px",
                      background: "#fff",
                    }}>
                      <div style={{ fontSize: 22, fontWeight: "bold", color: "#b71c1c", lineHeight: 1 }}>{s.val}</div>
                      <div style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", margin: "2px 0" }}>{s.unit}</div>
                      <div style={{ fontSize: 11, color: "#333" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════
            FOOTER STRIP — Last Chance
        ════════════════════════════════════ */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 16px 24px" }}>
          <div style={{
            border: "2px solid #b71c1c",
            background: "#fff",
          }}>
            <div style={{
              background: "#b71c1c",
              color: "#fff",
              padding: "6px 14px",
              fontSize: 13,
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <span style={{ fontSize: 16 }}>⚠</span>
              अंतिम अवसर सूचना — Last Chance Notice
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 18px",
              flexWrap: "wrap",
              gap: 12,
            }}>
              <div>
                <p style={{ fontSize: 14, color: "#111", margin: "0 0 6px", fontWeight: "bold" }}>
                  प्रबंधन कोटा में केवल <span style={{ color: "#b71c1c", fontSize: 18 }}>235</span> प्लॉट शेष हैं।
                </p>
                <p style={{ fontSize: 12, color: "#555", margin: 0 }}>
                  आवेदन शुल्क: <strong style={{ color: "#00308F" }}>₹11,500</strong>&nbsp;
                  <span style={{ color: "#138808" }}>★ पूर्णतः वापसी योग्य</span>
                </p>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="/register" className="gov-btn" style={{ fontSize: 13 }}>
                  ▶ अभी पंजीकरण करें
                </a>
                <a href="/register" className="gov-btn gov-btn-red" style={{ fontSize: 13 }}>
                  ☎ संपर्क करें
                </a>
              </div>
            </div>
          </div>

          {/* Gov footer strip */}
          <div className="gov-footer-strip" style={{ marginTop: 0 }}>
            <span>© धोलेरा SIR निवेश पोर्टल | गुजरात सरकार अनुमोदित</span>
            <span style={{ fontSize: 11, color: "#aac" }}>
              अंतिम अद्यतन: मार्च 2026 | संस्करण 2.1.4
            </span>
          </div>
        </div>

        {/* Bottom tricolor */}
        <div className="gov-tricolor">
          <span /><span /><span />
        </div>

      </div>
    </>
  );
}