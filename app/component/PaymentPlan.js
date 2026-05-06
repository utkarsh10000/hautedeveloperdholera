"use client";

const charges = [
  { label: "PLC", value: "कोने के लिए 10% / पार्क के लिए 5%" },
  { label: "विकास शुल्क", value: "रु. 1500/- प्रति वर्ग गज" },
];

const tspInstallments = [
  { period: "30 दिन", pct: "TSP का 25%" },
  { period: "60 दिन", pct: "TSP का 50%" },
];

export default function PaymentPlan() {
  return (
    <section id="payment" style={{ fontFamily: '"Times New Roman", Times, serif', background: "#f0f0f0" }}>
      <style>{`
        .pp-tricolor { display: flex; height: 8px; width: 100%; }
        .pp-tricolor span:nth-child(1) { flex: 1; background: #FF9933; }
        .pp-tricolor span:nth-child(2) { flex: 1; background: #ffffff; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; }
        .pp-tricolor span:nth-child(3) { flex: 1; background: #138808; }

        .pp-marquee-wrap {
          background: #00308F; color: #FFD700;
          padding: 5px 0; overflow: hidden;
          border-top: 2px solid #FFD700; border-bottom: 2px solid #FFD700;
          font-size: 13px; font-weight: bold;
          letter-spacing: 0.04em; white-space: nowrap;
        }
        .pp-marquee-inner {
          display: inline-block;
          animation: pp-scroll 28s linear infinite;
          padding-left: 100%;
        }
        @keyframes pp-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }

        .pp-section-head {
          background: #00308F; color: #fff;
          padding: 8px 16px; font-size: 14px;
          font-weight: bold; border-left: 6px solid #FF9933;
          letter-spacing: 0.03em; text-transform: uppercase;
        }

        .pp-notice {
          background: #fffde7; border: 1px solid #f9a825;
          border-left: 5px solid #f57f17;
          padding: 9px 14px; font-size: 13px;
          color: #333; margin-bottom: 12px;
        }

        .pp-table {
          width: 100%; border-collapse: collapse; font-size: 13px; background: #fff;
        }
        .pp-table th {
          background: #00308F; color: #FFD700;
          padding: 7px 10px; text-align: left;
          border: 1px solid #003580; font-size: 11px;
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .pp-table td {
          padding: 7px 10px; border: 1px solid #bbb;
          vertical-align: top; color: #111; line-height: 1.5;
        }
        .pp-table tr:nth-child(even) td { background: #e8eef8; }
        .pp-table tr:hover td { background: #d0daf0; }

        .pp-plans-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid #aab;
          border-top: 2px solid #00308F;
          overflow: hidden;
        }
        .pp-plan-col {
          padding: 0;
          border-right: 1px solid #aab;
        }
        .pp-plan-col:last-child { border-right: none; }

        .pp-plan-head {
          background: #00308F; color: #FFD700;
          padding: 6px 12px; font-size: 11px; font-weight: bold;
          text-transform: uppercase; letter-spacing: 0.06em;
          display: flex; justify-content: space-between; align-items: center;
          border-bottom: 1px solid #003580;
        }

        .pp-plan-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 8px 12px; border-bottom: 1px solid #ccc;
          font-size: 13px; background: #fff;
        }
        .pp-plan-row:nth-child(even) { background: #e8eef8; }
        .pp-plan-row:last-child { border-bottom: none; }

        .pp-stats-row { display: flex; gap: 0; border: 1px solid #aab; overflow: hidden; }
        .pp-stat-cell {
          flex: 1; text-align: center; padding: 10px 6px;
          border-right: 1px solid #aab; background: #fff;
        }
        .pp-stat-cell:last-child { border-right: none; }
        .pp-stat-cell:nth-child(even) { background: #e8eef8; }

        .pp-gov-btn {
          display: inline-block; background: #138808; color: #fff;
          border: 2px outset #1aaa0a; padding: 7px 20px;
          font-size: 13px; font-weight: bold; text-decoration: none;
          cursor: pointer; font-family: "Times New Roman", serif;
          letter-spacing: 0.03em; transition: background 0.15s;
        }
        .pp-gov-btn:hover { background: #0d6e06; border-style: inset; }

        .pp-footer-strip {
          background: #00308F; color: #fff; font-size: 12px;
          padding: 10px 16px; display: flex;
          justify-content: space-between; align-items: center;
          border-top: 3px solid #FF9933; flex-wrap: wrap; gap: 8px;
        }

        @media (max-width: 640px) {
          .pp-plans-grid { grid-template-columns: 1fr !important; }
          .pp-plan-col { border-right: none !important; border-bottom: 1px solid #aab; }
          .pp-bsp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Tricolor top */}
      <div className="pp-tricolor"><span /><span /><span /></div>

      {/* Marquee */}
      <div className="pp-marquee-wrap">
        <div className="pp-marquee-inner">
          ★ पारदर्शी मूल्य निर्धारण ★ धोलेरा आवास योजना ★ BSP ₹7,500/वर्ग गज ★ MQ दर ₹7,200/वर्ग गज ★ आवेदन शुल्क ₹11,500 ★ पूर्णतः वापसी योग्य ★ अभी पंजीकरण करें ★&nbsp;&nbsp;&nbsp;★ पारदर्शी मूल्य निर्धारण ★ धोलेरा आवास योजना ★ BSP ₹7,500/वर्ग गज ★ MQ दर ₹7,200/वर्ग गज ★ आवेदन शुल्क ₹11,500 ★ पूर्णतः वापसी योग्य ★ अभी पंजीकरण करें ★
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px 0" }}>

        {/* Notice */}
        <div className="pp-notice">
          <strong>⚠ सूचना:</strong> नीचे दिए गए मूल्य 05 मार्च 2026 से प्रभावी हैं। प्रबंधन कोटा दर <strong>₹7,200/वर्ग गज</strong> उपलब्धता के अधीन है। आवेदन शुल्क <strong>₹11,500</strong> (पूर्णतः वापसी योग्य)।
        </div>

        {/* Section heading */}
        <div className="pp-section-head">
          अनुभाग: भुगतान योजना — स्पष्ट मूल्य, कोई अनुमान नहीं
        </div>

        {/* BSP Block */}
        <div className="pp-bsp-grid" style={{
          display: "grid", gridTemplateColumns: "180px 1fr",
          border: "1px solid #aab", borderTop: "none", background: "#fff",
        }}>
          <div style={{ background: "#00308F", padding: "16px 14px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 4 }}>
            <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,215,0,0.55)", marginBottom: 2 }}>आधार</div>
            <div style={{ fontSize: 13, fontWeight: "bold", color: "#FFD700", lineHeight: 1.35 }}>बेसिक सेल प्राइस</div>
          </div>
          <div style={{ padding: "14px 18px", display: "flex", flexDirection: "column", gap: 8, background: "#f5f7fc" }}>
            <div style={{ fontSize: 16, color: "#aaa", textDecoration: "line-through", fontWeight: "bold" }}>
              INR 7,500/- प्रति वर्ग गज
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <div style={{ fontSize: 20, fontWeight: "bold", color: "#b71c1c" }}>INR 7,200/- प्रति वर्ग गज</div>
              <span style={{
                fontSize: 10, fontWeight: "bold", letterSpacing: "0.06em",
                color: "#00308F", background: "#e8f0fb",
                border: "1px solid #aac4e8", padding: "2px 10px",
              }}>प्रबंधन कोटा</span>
            </div>
            <div style={{ fontSize: 11, color: "#888", fontStyle: "italic" }}>05 मार्च 2026 से प्रभावी</div>
          </div>
        </div>

        {/* Other Charges */}
        <div style={{
          background: "#e8eef8", padding: "6px 12px",
          fontSize: 11, fontWeight: "bold", color: "#00308F",
          textTransform: "uppercase", letterSpacing: "0.06em",
          border: "1px solid #aab", borderTop: "2px solid #00308F",
          borderBottom: "none", marginTop: 16,
        }}>
          ► अन्य शुल्क — Additional Charges
        </div>
        <table className="pp-table" style={{ marginBottom: 0 }}>
          <thead>
            <tr>
              <th style={{ width: "40%" }}>शुल्क का प्रकार</th>
              <th>विवरण</th>
            </tr>
          </thead>
          <tbody>
            {charges.map(row => (
              <tr key={row.label}>
                <td style={{ fontWeight: "bold" }}>{row.label}</td>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Payment Plans heading */}
        <div style={{
          background: "#e8eef8", padding: "6px 12px",
          fontSize: 11, fontWeight: "bold", color: "#00308F",
          textTransform: "uppercase", letterSpacing: "0.06em",
          border: "1px solid #aab", borderTop: "2px solid #00308F",
          borderBottom: "none", marginTop: 16,
        }}>
          ► भुगतान योजनाएं — Payment Plans
        </div>

        {/* Plans grid */}
        <div className="pp-plans-grid">

          {/* TSP Plan */}
          <div className="pp-plan-col">
            <div className="pp-plan-head">
              <span>कुल बिक्री मूल्य (TSP)</span>
              <span style={{
                fontSize: 10, background: "rgba(255,215,0,0.15)",
                border: "1px solid rgba(255,215,0,0.4)",
                padding: "1px 8px", fontWeight: "bold",
              }}>मानक</span>
            </div>
            <div className="pp-plan-row" style={{ background: "#fffde7" }}>
              <span style={{ color: "#555", fontSize: 12 }}>बुकिंग राशि</span>
              <span style={{ fontWeight: "bold", color: "#b71c1c" }}>TSP का 25%</span>
            </div>
            <div style={{ padding: "6px 12px", fontSize: 10, fontWeight: "bold", color: "#FF9933", textTransform: "uppercase", letterSpacing: "0.06em", background: "#e8eef8", borderBottom: "1px solid #ccc" }}>
              किस्तें (अंदर)
            </div>
            {tspInstallments.map((row, i) => (
              <div className="pp-plan-row" key={row.period} style={{ background: i % 2 === 0 ? "#fff" : "#e8eef8" }}>
                <span style={{ color: "#555" }}>{row.period}</span>
                <span style={{ fontWeight: "bold", color: "#00308F" }}>{row.pct}</span>
              </div>
            ))}
          </div>

          {/* MQ Plan */}
          <div className="pp-plan-col">
            <div className="pp-plan-head">
              <span>प्रबंधन कोटा (MQ)</span>
              <span style={{
                fontSize: 10, background: "rgba(255,215,0,0.15)",
                border: "1px solid rgba(255,215,0,0.4)",
                padding: "1px 8px", fontWeight: "bold",
              }}>प्राथमिक पहुंच</span>
            </div>
            <div className="pp-plan-row" style={{ background: "#fffde7" }}>
              <span style={{ color: "#555", fontSize: 12 }}>बुकिंग राशि</span>
              <span style={{ fontWeight: "bold", color: "#b71c1c" }}>बुकिंग के समय 25%</span>
            </div>
            <div style={{ padding: "6px 12px", fontSize: 10, fontWeight: "bold", color: "#FF9933", textTransform: "uppercase", letterSpacing: "0.06em", background: "#e8eef8", borderBottom: "1px solid #ccc" }}>
              किस्तें (अंदर)
            </div>
            <div className="pp-plan-row">
              <span style={{ color: "#555" }}>60 दिन</span>
              <span style={{ fontWeight: "bold", color: "#00308F" }}>TSP का 100%</span>
            </div>
            <div style={{ padding: "10px 12px", background: "#fffde7", borderTop: "1px solid #f9a825", fontSize: 12, color: "#333", lineHeight: 1.7 }}>
              <strong style={{ color: "#b71c1c" }}>⚠ केवल 5 प्लॉट शेष</strong> प्रबंधन कोटा के तहत। पसंदीदा मूल्य निर्धारण के साथ फास्ट-ट्रैक बुकिंग। यह अवसर बंद होने से पहले कदम उठाएं।
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="pp-stats-row" style={{ borderTop: "2px solid #00308F" }}>
          {[
            { val: "₹7,500", label: "BSP दर" },
            { val: "₹7,200", label: "MQ दर" },
            { val: "₹1,500", label: "विकास शुल्क/वर्ग गज" },
            { val: "₹11,500", label: "आवेदन शुल्क" },
            { val: "100%", label: "वापसी योग्य" },
          ].map(s => (
            <div className="pp-stat-cell" key={s.label}>
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
            यह चरण पूर्ण क्षमता की ओर बढ़ रहा है
          </div>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 18px", flexWrap: "wrap", gap: 12,
          }}>
            <div>
              <p style={{ fontSize: 14, color: "#111", margin: "0 0 4px", fontWeight: "bold" }}>
                प्लॉट आरक्षण हेतु आवेदन शुल्क <span style={{ color: "#00308F" }}>₹11,500</span>
              </p>
              <p style={{ fontSize: 12, color: "#555", margin: 0 }}>
                <span style={{ color: "#138808" }}>★ पूर्णतः वापसी योग्य</span>
                &nbsp;· उपलब्धता के अधीन
              </p>
            </div>
            <a href="/register" className="pp-gov-btn">▶ अभी पंजीकरण करें</a>
          </div>
        </div>

      </div>

      {/* Footer strip */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div className="pp-footer-strip">
          <span>© धोलेरा SIR निवेश पोर्टल | भुगतान योजना</span>
          <span style={{ fontSize: 11, color: "#aac" }}>अंतिम अद्यतन: मार्च 2026 | 05 मार्च 2026 से प्रभावी</span>
        </div>
      </div>

      {/* Tricolor bottom */}
      <div className="pp-tricolor"><span /><span /><span /></div>

    </section>
  );
}