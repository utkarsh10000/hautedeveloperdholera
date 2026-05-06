"use client";

export default function ProjectSnapshot() {
  const stats = [
    {
      label: "परियोजना प्रकार",
      value: "आवासीय प्लॉटेड विकास",
      sub: "धोलेरा एसआईआर, गुजरात",
      code: "P-01",
    },
    {
      label: "प्लॉट आकार",
      value: "121 वर्ग गज और उससे अधिक",
      sub: "अनेक विन्यास उपलब्ध",
      code: "P-02",
    },
    {
      label: "स्वामित्व",
      value: "फ्रीहोल्ड",
      sub: "पूर्ण कानूनी स्वामित्व हस्तांतरण",
      code: "P-03",
    },
    {
      label: "पंजीकरण",
      value: "लागू प्रक्रिया अनुसार",
      sub: "सरकारी दस्तावेज़ीकरण",
      code: "P-04",
    },
    {
      label: "योजना मूल्य",
      value: "₹7,500 / वर्ग गज",
      sub: "आवेदन शुल्क ₹11,500 वापसी योग्य",
      code: "P-05",
    },
    {
      label: "महिला कोटा",
      value: "33% आरक्षित",
      sub: "महिलाएं और सरकारी कर्मचारी",
      code: "P-06",
    },
  ];

  const logos = [
    { src: "/Gov-logo.png",                          alt: "Government of Gujarat" },
    { src: "/Smart-City-1.webp",                     alt: "Smart City Mission" },
    { src: "/amrut.webp",                            alt: "AMRUT" },
    { src: "/Gujarat-Urban-Development-Mission.webp", alt: "Gujarat Urban Development" },
  ];

  return (
    <section id="project" style={{ fontFamily: '"Times New Roman", Times, serif', background: "#f0f0f0" }}>
      <style>{`
        .ps-tricolor { display: flex; height: 8px; width: 100%; }
        .ps-tricolor span:nth-child(1) { flex: 1; background: #FF9933; }
        .ps-tricolor span:nth-child(2) { flex: 1; background: #ffffff; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; }
        .ps-tricolor span:nth-child(3) { flex: 1; background: #138808; }

        .ps-marquee-wrap {
          background: #00308F; color: #FFD700;
          padding: 5px 0; overflow: hidden;
          border-top: 2px solid #FFD700; border-bottom: 2px solid #FFD700;
          font-size: 13px; font-weight: bold;
          letter-spacing: 0.04em; white-space: nowrap;
        }
        .ps-marquee-inner {
          display: inline-block;
          animation: ps-scroll 28s linear infinite;
          padding-left: 100%;
        }
        @keyframes ps-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }

        .ps-section-head {
          background: #00308F; color: #fff;
          padding: 8px 16px; font-size: 14px;
          font-weight: bold; border-left: 6px solid #FF9933;
          letter-spacing: 0.03em; text-transform: uppercase;
        }

        .ps-notice {
          background: #fffde7; border: 1px solid #f9a825;
          border-left: 5px solid #f57f17;
          padding: 9px 14px; font-size: 13px;
          color: #333; margin-bottom: 12px;
        }

        .ps-logos-strip {
          background: #00308F;
          border: 1px solid #003580;
          border-top: none;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .ps-logo-box {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 6px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ps-logo-box img {
          height: 50px;
          width: auto;
          object-fit: contain;
        }
        .ps-logos-label {
          font-size: 10px; font-weight: bold;
          color: #FFD700; letter-spacing: 0.12em;
          text-transform: uppercase; width: 100%;
          text-align: center; margin-bottom: 6px;
        }

        .ps-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: 1px solid #aab;
          border-top: none;
          overflow: hidden;
        }
        .ps-card {
          background: #fff;
          border-right: 1px solid #bbb;
          border-bottom: 1px solid #bbb;
          padding: 14px 12px;
          transition: background 0.15s;
        }
        .ps-card:hover { background: #e8eef8; }
        .ps-card-code {
          font-size: 9px; color: #FF9933; font-weight: bold;
          letter-spacing: 0.08em; font-family: "Courier New", monospace;
          margin-bottom: 4px;
        }
        .ps-card-label {
          font-size: 10px; font-weight: bold; color: #00308F;
          text-transform: uppercase; letter-spacing: 0.06em;
          margin-bottom: 4px;
        }
        .ps-card-value {
          font-size: 14px; font-weight: bold; color: #111;
          line-height: 1.3; margin-bottom: 3px;
        }
        .ps-card-sub {
          font-size: 11px; color: #666; line-height: 1.5;
        }

        .ps-table {
          width: 100%; border-collapse: collapse; font-size: 13px; background: #fff;
        }
        .ps-table th {
          background: #00308F; color: #FFD700;
          padding: 7px 10px; text-align: left;
          border: 1px solid #003580; font-size: 11px;
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .ps-table td {
          padding: 7px 10px; border: 1px solid #bbb;
          vertical-align: top; color: #111; line-height: 1.5;
        }
        .ps-table tr:nth-child(even) td { background: #e8eef8; }
        .ps-table tr:hover td { background: #d0daf0; }

        .ps-stats-row { display: flex; gap: 0; border: 1px solid #aab; overflow: hidden; }
        .ps-stat-cell {
          flex: 1; text-align: center; padding: 10px 6px;
          border-right: 1px solid #aab; background: #fff;
        }
        .ps-stat-cell:last-child { border-right: none; }
        .ps-stat-cell:nth-child(even) { background: #e8eef8; }

        .ps-gov-btn {
          display: inline-block; background: #138808; color: #fff;
          border: 2px outset #1aaa0a; padding: 7px 20px;
          font-size: 13px; font-weight: bold; text-decoration: none;
          cursor: pointer; font-family: "Times New Roman", serif;
          letter-spacing: 0.03em; transition: background 0.15s;
        }
        .ps-gov-btn:hover { background: #0d6e06; border-style: inset; }

        .ps-footer-strip {
          background: #00308F; color: #fff; font-size: 12px;
          padding: 10px 16px; display: flex;
          justify-content: space-between; align-items: center;
          border-top: 3px solid #FF9933; flex-wrap: wrap; gap: 8px;
        }

        @media (max-width: 768px) {
          .ps-card-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .ps-card-grid { grid-template-columns: 1fr !important; }
          .ps-logo-box img { height: 36px !important; }
        }
      `}</style>

      {/* Tricolor top */}
      <div className="ps-tricolor"><span /><span /><span /></div>

      {/* Marquee */}
      <div className="ps-marquee-wrap">
        <div className="ps-marquee-inner">
          ★ परियोजना स्नैपशॉट ★ धोलेरा SIR ★ आवासीय प्लॉटेड विकास ★ फ्रीहोल्ड संपत्ति ★ गुजरात सरकार अनुमोदित ★ DMIC परियोजना ★ ₹7,500/वर्ग गज ★ अभी पंजीकरण करें ★&nbsp;&nbsp;&nbsp;★ परियोजना स्नैपशॉट ★ धोलेरा SIR ★ आवासीय प्लॉटेड विकास ★ फ्रीहोल्ड संपत्ति ★ गुजरात सरकार अनुमोदित ★ DMIC परियोजना ★ ₹7,500/वर्ग गज ★ अभी पंजीकरण करें ★
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px 0" }}>

        {/* Notice */}
        <div className="ps-notice">
          <strong>⚠ सूचना:</strong> धोलेरा आवास योजना एक सरकार समर्थित ग्रीनफील्ड स्मार्ट सिटी परियोजना है। प्रबंधन कोटा में केवल <strong>235 प्लॉट शेष</strong> हैं। आवेदन शुल्क <strong>₹11,500</strong> (पूर्णतः वापसी योग्य)।
        </div>

        {/* Section heading */}
        <div className="ps-section-head">
          अनुभाग: परियोजना स्नैपशॉट — Project Snapshot
        </div>

        {/* Govt logos strip */}
        <div className="ps-logos-strip">
          <div className="ps-logos-label">★ गर्व से समर्थित — Proudly Supported By ★</div>
          {logos.map(logo => (
            <div key={logo.alt} className="ps-logo-box">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>

        {/* Grid heading bar */}
        <div style={{
          background: "#e8eef8", padding: "6px 12px",
          fontSize: 11, fontWeight: "bold", color: "#00308F",
          textTransform: "uppercase", letterSpacing: "0.06em",
          border: "1px solid #aab", borderTop: "2px solid #00308F",
          borderBottom: "none",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span>► परियोजना विवरण — Project Details</span>
          <span style={{ color: "#888", fontWeight: "normal" }}>कुल: {stats.length} विवरण</span>
        </div>

        {/* Cards grid */}
        <div className="ps-card-grid">
          {stats.map((stat) => (
            <div className="ps-card" key={stat.label}>
              <div className="ps-card-code">{stat.code}</div>
              <div className="ps-card-label">{stat.label}</div>
              <div className="ps-card-value">{stat.value}</div>
              <div className="ps-card-sub">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Summary table */}
        <div style={{
          background: "#e8eef8", padding: "6px 12px",
          fontSize: 11, fontWeight: "bold", color: "#00308F",
          textTransform: "uppercase", letterSpacing: "0.06em",
          border: "1px solid #aab", borderTop: "2px solid #00308F",
          borderBottom: "none", marginTop: 16,
        }}>
          ► परियोजना पहचान — Project Identification
        </div>
        <table className="ps-table">
          <tbody>
            {[
              ["परियोजना का नाम", "धोलेरा आवास योजना"],
              ["राज्य", "गुजरात"],
              ["जिला", "अहमदाबाद / भावनगर"],
              ["श्रेणी", "ग्रीनफील्ड स्मार्ट सिटी"],
              ["स्वीकृति", "केंद्र सरकार / DMIC"],
              ["अहमदाबाद से दूरी", "109 किमी (एक्सप्रेसवे)"],
              ["हवाई अड्डा", "प्रस्तावित अंतर्राष्ट्रीय हवाई अड्डा"],
              ["NA स्थिति", "✔ गैर-कृषि अनुमोदित"],
            ].map(([k, v]) => (
              <tr key={k}>
                <td style={{ fontWeight: "bold", background: "#eef1f8", width: "40%" }}>{k}</td>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Stats strip */}
        <div className="ps-stats-row" style={{ borderTop: "2px solid #00308F" }}>
          {[
            { val: "121+", label: "न्यूनतम वर्ग गज" },
            { val: "33%", label: "महिला कोटा" },
            { val: "235", label: "शेष प्लॉट" },
            { val: "₹7,500", label: "BSP दर" },
            { val: "₹11,500", label: "आवेदन शुल्क" },
          ].map(s => (
            <div className="ps-stat-cell" key={s.label}>
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
            अंतिम अवसर सूचना — Limited Period Offer
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
            <a href="/register" className="ps-gov-btn">▶ अभी पंजीकरण करें</a>
          </div>
        </div>

      </div>

      {/* Footer strip */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div className="ps-footer-strip">
          <span>© धोलेरा SIR निवेश पोर्टल | परियोजना स्नैपशॉट</span>
          <span style={{ fontSize: 11, color: "#aac" }}>अंतिम अद्यतन: मार्च 2026 | DMIC अनुमोदित</span>
        </div>
      </div>

      {/* Tricolor bottom */}
      <div className="ps-tricolor"><span /><span /><span /></div>

    </section>
  );
}