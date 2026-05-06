"use client";

export default function Amenities() {
  const amenities = [
    {
      label: "क्लब हाउस",
      desc: "प्रीमियम सामाजिक और मनोरंजन केंद्र",
      code: "A-01",
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
      code: "A-02",
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
      code: "A-03",
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
      code: "A-04",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      label: "वरिष्ठ नागरिक क्षेत्र",
      desc: "बुजुर्गों के लिए शांतिपूर्ण स्वास्थ्य कोना",
      code: "A-05",
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
      code: "A-06",
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
      code: "A-07",
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
      code: "A-08",
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
      code: "A-09",
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
      code: "A-10",
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
      code: "A-11",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      label: "खुला एम्फीथिएटर",
      desc: "तारों की छाँव में सामुदायिक कार्यक्रम",
      code: "A-12",
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
    <section style={{ fontFamily: '"Times New Roman", Times, serif', background: "#f0f0f0" }}>

      <style>{`
        .am-tricolor { display: flex; height: 8px; width: 100%; }
        .am-tricolor span:nth-child(1) { flex: 1; background: #FF9933; }
        .am-tricolor span:nth-child(2) { flex: 1; background: #ffffff; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; }
        .am-tricolor span:nth-child(3) { flex: 1; background: #138808; }

        .am-marquee-wrap {
          background: #00308F; color: #FFD700;
          padding: 5px 0; overflow: hidden;
          border-top: 2px solid #FFD700; border-bottom: 2px solid #FFD700;
          font-size: 13px; font-weight: bold;
          letter-spacing: 0.04em; white-space: nowrap;
        }
        .am-marquee-inner {
          display: inline-block;
          animation: am-scroll 28s linear infinite;
          padding-left: 100%;
        }
        @keyframes am-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }

        .am-section-head {
          background: #00308F; color: #fff;
          padding: 8px 16px; font-size: 14px;
          font-weight: bold; border-left: 6px solid #FF9933;
          letter-spacing: 0.03em; text-transform: uppercase;
        }

        .am-notice {
          background: #fffde7; border: 1px solid #f9a825;
          border-left: 5px solid #f57f17;
          padding: 9px 14px; font-size: 13px;
          color: #333; margin-bottom: 12px;
        }

        /* Table grid for amenities */
        .am-table {
          width: 100%; border-collapse: collapse;
          font-size: 13px; background: #fff;
        }
        .am-table th {
          background: #00308F; color: #FFD700;
          padding: 7px 10px; text-align: left;
          border: 1px solid #003580; font-size: 11px;
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .am-table td {
          padding: 8px 10px; border: 1px solid #bbb;
          vertical-align: middle; color: #111; line-height: 1.5;
        }
        .am-table tr:nth-child(even) td { background: #e8eef8; }
        .am-table tr:hover td { background: #d0daf0; cursor: default; }

        .am-code-badge {
          display: inline-block;
          background: #00308F; color: #FFD700;
          font-size: 10px; font-weight: bold;
          padding: 1px 6px; letter-spacing: 0.06em;
          font-family: "Courier New", monospace;
        }

        .am-icon-cell {
          width: 36px; height: 36px;
          background: #e8eef8;
          border: 1px solid #aab;
          display: flex; align-items: center; justify-content: center;
          color: #00308F;
        }

        /* Card grid for wider screens */
        .am-card-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid #aab;
          overflow: hidden;
        }
        .am-card {
          background: #fff;
          border-right: 1px solid #bbb;
          border-bottom: 1px solid #bbb;
          padding: 12px 10px;
          display: flex;
          gap: 10px;
          align-items: flex-start;
          transition: background 0.15s;
        }
        .am-card:hover { background: #e8eef8; }
        .am-card-icon {
          width: 38px; height: 38px; flex-shrink: 0;
          background: #e8eef8; border: 1px solid #aab;
          display: flex; align-items: center; justify-content: center;
          color: #00308F;
        }
        .am-card-label {
          font-size: 13px; font-weight: bold;
          color: #00308F; line-height: 1.3;
        }
        .am-card-desc {
          font-size: 11px; color: #666; line-height: 1.5; margin-top: 2px;
        }
        .am-card-code {
          font-size: 9px; color: #FF9933; font-weight: bold;
          letter-spacing: 0.08em; font-family: "Courier New", monospace;
          margin-top: 2px;
        }

        .am-gov-btn {
          display: inline-block; background: #138808; color: #fff;
          border: 2px outset #1aaa0a; padding: 7px 20px;
          font-size: 13px; font-weight: bold; text-decoration: none;
          cursor: pointer; font-family: "Times New Roman", serif;
          letter-spacing: 0.03em; transition: background 0.15s;
        }
        .am-gov-btn:hover { background: #0d6e06; border-style: inset; }
        .am-gov-btn-red { background: #b71c1c; border-color: #8b0000; }
        .am-gov-btn-red:hover { background: #8b0000; }

        .am-footer-strip {
          background: #00308F; color: #fff; font-size: 12px;
          padding: 10px 16px; display: flex;
          justify-content: space-between; align-items: center;
          border-top: 3px solid #FF9933; flex-wrap: wrap; gap: 8px;
        }

        .am-stats-row { display: flex; gap: 0; border: 1px solid #aab; overflow: hidden; }
        .am-stat-cell {
          flex: 1; text-align: center; padding: 10px 6px;
          border-right: 1px solid #aab; background: #fff;
        }
        .am-stat-cell:last-child { border-right: none; }
        .am-stat-cell:nth-child(even) { background: #e8eef8; }

        @media (max-width: 1024px) {
          .am-card-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .am-card-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .am-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Tricolor top */}
      <div className="am-tricolor"><span /><span /><span /></div>

      {/* Marquee */}
      <div className="am-marquee-wrap">
        <div className="am-marquee-inner">
          ★ विश्व स्तरीय सुविधाएं ★ धोलेरा आवास योजना ★ 12 प्रीमियम सुविधाएं ★ गुजरात सरकार अनुमोदित ★ DMIC परियोजना ★ अभी पंजीकरण करें ★&nbsp;&nbsp;&nbsp;★ विश्व स्तरीय सुविधाएं ★ धोलेरा आवास योजना ★ 12 प्रीमियम सुविधाएं ★ गुजरात सरकार अनुमोदित ★ DMIC परियोजना ★ अभी पंजीकरण करें ★
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px 0" }}>

        {/* Notice */}
        <div className="am-notice">
          <strong>⚠ सूचना:</strong> नीचे सूचीबद्ध सुविधाएं धोलेरा आवास योजना के अंतर्गत उपलब्ध हैं। सुविधाओं की उपलब्धता चरण के अनुसार भिन्न हो सकती है। आवेदन शुल्क <strong>₹11,500</strong> (पूर्णतः वापसी योग्य)।
        </div>

        {/* Section heading */}
        <div className="am-section-head">
          अनुभाग: उपलब्ध सुविधाएं — Available Amenities (कुल: 12)
        </div>

        {/* Two col: summary left, stats right */}
        <div
          className="am-layout"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, background: "#fff", border: "1px solid #aab", borderTop: "none", marginBottom: 0 }}
        >
          <div style={{ padding: "14px 16px", borderRight: "1px solid #ccc" }}>
            <div style={{ fontSize: 11, fontWeight: "bold", color: "#00308F", textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "2px solid #FF9933", paddingBottom: 4, marginBottom: 10 }}>
              ► परियोजना विवरण
            </div>
            <p style={{ fontSize: 13, color: "#333", lineHeight: 1.75, margin: "0 0 10px" }}>
              धोलेरा आवास योजना का हर विवरण रोज़मर्रा की जिंदगी को बेहतर बनाने के लिए तैयार किया गया है — सुबह की सैर से लेकर शाम की सभाओं तक।
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <tbody>
                {[
                  ["परियोजना", "धोलेरा आवास योजना"],
                  ["कुल सुविधाएं", "12 (बारह)"],
                  ["स्थिति", "✔ उपलब्ध"],
                  ["रखरखाव", "24/7 प्रबंधन"],
                  ["सुरक्षा", "गेटेड समुदाय"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ padding: "5px 8px", border: "1px solid #ddd", background: "#eef1f8", fontWeight: "bold", width: "45%" }}>{k}</td>
                    <td style={{ padding: "5px 8px", border: "1px solid #ddd" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ padding: "14px 16px" }}>
            <div style={{ fontSize: 11, fontWeight: "bold", color: "#00308F", textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "2px solid #FF9933", paddingBottom: 4, marginBottom: 10 }}>
              ► श्रेणी अनुसार सुविधाएं
            </div>
            <table className="am-table">
              <thead>
                <tr>
                  <th>श्रेणी</th>
                  <th>संख्या</th>
                  <th>स्थिति</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["खेल एवं मनोरंजन", "4", "✔ उपलब्ध"],
                  ["हरित एवं पर्यावरण", "2", "✔ उपलब्ध"],
                  ["सामाजिक एवं सामुदायिक", "3", "✔ उपलब्ध"],
                  ["सुरक्षा एवं बुनियादी", "3", "✔ उपलब्ध"],
                ].map(([k, v, s]) => (
                  <tr key={k}>
                    <td>{k}</td>
                    <td style={{ fontWeight: "bold", color: "#00308F", textAlign: "center" }}>{v}</td>
                    <td style={{ color: "#138808", fontWeight: "bold", fontSize: 12 }}>{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Amenities card grid */}
        <div style={{ border: "1px solid #aab", borderTop: "2px solid #00308F" }}>
          <div style={{
            background: "#e8eef8", padding: "6px 12px",
            fontSize: 11, fontWeight: "bold", color: "#00308F",
            textTransform: "uppercase", letterSpacing: "0.06em",
            borderBottom: "1px solid #aab",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span>► सुविधा सूची — Amenity List</span>
            <span style={{ color: "#888", fontWeight: "normal" }}>कुल: {amenities.length} सुविधाएं</span>
          </div>
          <div className="am-card-grid">
            {amenities.map((item) => (
              <div className="am-card" key={item.label}>
                <div className="am-card-icon">{item.icon}</div>
                <div>
                  <div className="am-card-code">{item.code}</div>
                  <div className="am-card-label">{item.label}</div>
                  <div className="am-card-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="am-stats-row" style={{ borderTop: "2px solid #00308F", marginTop: 0 }}>
          {[
            { val: "12", label: "कुल सुविधाएं" },
            { val: "24/7", label: "सुरक्षा" },
            { val: "235", label: "शेष प्लॉट" },
            { val: "₹11,500", label: "आवेदन शुल्क" },
            { val: "100%", label: "वापसी योग्य" },
          ].map(s => (
            <div className="am-stat-cell" key={s.label}>
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
            यह पंजीकरण चक्र जल्द बंद हो रहा है — Limited Registration Open
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
              <a href="/register" className="am-gov-btn">▶ अभी आवेदन करें</a>
              <a href="/register" className="am-gov-btn am-gov-btn-red">☎ संपर्क करें</a>
            </div>
          </div>
        </div>

      </div>

      {/* Footer strip */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div className="am-footer-strip">
          <span>© धोलेरा SIR निवेश पोर्टल | सुविधा सूची</span>
          <span style={{ fontSize: 11, color: "#aac" }}>अंतिम अद्यतन: मार्च 2026 | कुल सुविधाएं: 12</span>
        </div>
      </div>

      {/* Tricolor bottom */}
      <div className="am-tricolor"><span /><span /><span /></div>

    </section>
  );
}