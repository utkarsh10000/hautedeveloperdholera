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
    <section
      id="payment"
      style={{
        background: "#ffffff",
        padding: "6rem 0",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <p style={styles.eyebrow}>पारदर्शी मूल्य निर्धारण</p>
        <h2 style={styles.title}>स्पष्ट मूल्य। कोई अनुमान नहीं।</h2>
        <div style={styles.ruleWrap}>
          <div style={styles.ruleLine} />
          <div style={styles.ruleDiamond} />
          <div style={styles.ruleLine} />
        </div>

        {/* BSP Block */}
        <div style={styles.bspBlock} className="bsp-block">
          <div style={styles.bspLabelCell}>
            <div style={styles.bspLabelEyebrow}>आधार</div>
            <div style={styles.bspLabelText}>बेसिक सेल प्राइस</div>
          </div>
          <div style={styles.bspPriceCell}>
            <div style={styles.bspPriceMain}>INR 7,500/- प्रति वर्ग गज</div>
            <div style={styles.bspPriceOfferRow}>
              <div style={styles.bspPriceOffer}>INR 7,200/- प्रति वर्ग गज</div>
              <span style={styles.bspBadge}>प्रबंधन कोटा</span>
            </div>
            <div style={styles.bspEffective}>05 मार्च 2026 से प्रभावी</div>
          </div>
        </div>

        {/* Other Charges */}
        <h3 style={styles.sectionTitle}>अन्य शुल्क</h3>
        <div style={styles.chargesTable}>
          {charges.map((row, i) => (
            <div
              key={row.label}
              className="charge-row"
              style={{
                ...styles.chargeRow,
                background: i % 2 === 1 ? "#f9f8f5" : "#ffffff",
                borderBottom: i < charges.length - 1 ? "0.5px solid rgba(0,0,0,0.07)" : "none",
              }}
            >
              <div style={styles.chargeLabel}>{row.label}</div>
              <div style={styles.chargeValue}>{row.value}</div>
            </div>
          ))}
        </div>

        {/* Payment Plans */}
        <h2 style={styles.plansHeading}>भुगतान योजनाएं</h2>
        <div style={styles.plansGrid} className="plans-grid">

          {/* TSP Plan */}
          <div style={styles.planCard}>
            <div style={styles.planCardHeader}>
              <div style={styles.planCardTitle}>कुल बिक्री मूल्य</div>
              <div style={styles.planCardPill}>मानक</div>
            </div>
            <div style={styles.planCardBody}>
              <div style={styles.planBookingRow}>
                <span style={styles.planBookingLabel}>बुकिंग राशि</span>
                <span style={styles.planBookingValue}>TSP का 25%</span>
              </div>
              <div style={styles.installmentsLabel}>किस्तें (अंदर)</div>
              {tspInstallments.map((row, i) => (
                <div
                  key={row.period}
                  style={{
                    ...styles.planRow,
                    borderBottom: i < tspInstallments.length - 1
                      ? "0.5px solid rgba(255,255,255,0.05)"
                      : "none",
                  }}
                >
                  <span style={styles.planRowPeriod}>{row.period}</span>
                  <span style={styles.planRowPct}>{row.pct}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Management Quota Plan */}
          <div style={styles.planCard}>
            <div style={styles.planCardHeader}>
              <div style={styles.planCardTitle}>प्रबंधन कोटा</div>
              <div style={styles.planCardPill}>प्राथमिक पहुंच</div>
            </div>
            <div style={styles.planCardBody}>
              <div style={styles.planBookingRow}>
                <span style={styles.planBookingLabel}>बुकिंग राशि</span>
                <span style={styles.planBookingValue}>बुकिंग के समय 25%</span>
              </div>
              <div style={styles.installmentsLabel}>किस्तें (अंदर)</div>
              <div style={{ ...styles.planRow, borderBottom: "none" }}>
                <span style={styles.planRowPeriod}>60 दिन</span>
                <span style={styles.planRowPct}>TSP का 100%</span>
              </div>
              <div style={styles.planNote}>
                पसंदीदा मूल्य निर्धारण के साथ फास्ट-ट्रैक बुकिंग।{" "}
                <strong style={{ color: "#f5a54a", fontWeight: 500 }}>
                  केवल 5 प्लॉट शेष
                </strong>{" "}
                प्रबंधन कोटा के तहत। यह अवसर बंद होने से पहले कदम उठाएं।
              </div>
            </div>
          </div>
        </div>

        {/* Footer Strip */}
        <div style={styles.footerStrip} className="footer-strip">
          <div>
            <div style={styles.footerStripTitle}>
              यह चरण पूर्ण क्षमता की ओर बढ़ रहा है।
            </div>
            <div style={styles.footerStripSub}>
              प्लॉट आरक्षण हेतु आवेदन शुल्क रु. 11,500/-
            </div>
          </div>
          <div style={styles.refundBadge}>
            <div style={styles.refundDot} />
            पूर्णतः वापसी योग्य
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@400;500&display=swap');

        @media (max-width: 640px) {
          .plans-grid { grid-template-columns: 1fr !important; }
          .bsp-block { grid-template-columns: 1fr !important; }
          .charge-row { grid-template-columns: 1fr !important; gap: 4px !important; }
          .footer-strip { flex-direction: column !important; align-items: flex-start !important; }
          #payment { padding: 3rem 0 !important; }
        }

        @media (max-width: 480px) {
          #payment h2 { font-size: 1.6rem !important; }
        }
      `}</style>
    </section>
  );
}

const styles = {
  eyebrow: {
    textAlign: "center",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#6b7280",
    margin: "0 0 10px",
  },
  title: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: "clamp(2rem, 4vw, 2.8rem)",
    fontWeight: 500,
    textAlign: "center",
    color: "#1c1c1c",
    lineHeight: 1.15,
    margin: "0 0 12px",
  },
  ruleWrap: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    justifyContent: "center",
    marginBottom: "3rem",
  },
  ruleLine: { width: 48, height: 0.5, background: "rgba(0,0,0,0.15)" },
  ruleDiamond: { width: 6, height: 6, background: "#ea6c1a", transform: "rotate(45deg)", flexShrink: 0 },
  bspBlock: {
    border: "0.5px solid rgba(0,0,0,0.1)",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: "2.5rem",
    display: "grid",
    gridTemplateColumns: "180px 1fr",
  },
  bspLabelCell: {
    background: "#1a3a6b",
    padding: "1.8rem 1.4rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 4,
  },
  bspLabelEyebrow: {
    fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
    color: "rgba(245,212,131,0.55)", marginBottom: 2,
  },
  bspLabelText: { fontSize: 13, fontWeight: 500, color: "#f5a54a", lineHeight: 1.35 },
  bspPriceCell: {
    padding: "1.6rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    background: "#f9f8f5",
  },
  bspPriceMain: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: "clamp(1.2rem, 2.5vw, 1.9rem)",
    fontWeight: 500,
    color: "#9ca3af",
    textDecoration: "line-through",
    textDecorationColor: "rgba(0,0,0,0.2)",
  },
  bspPriceOfferRow: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" },
  bspPriceOffer: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
    fontWeight: 600,
    color: "#c45c1a",
  },
  bspBadge: {
    fontSize: 10, fontWeight: 500, letterSpacing: "0.06em",
    color: "#7a5010",
    background: "rgba(201,144,26,0.12)",
    border: "0.5px solid rgba(201,144,26,0.35)",
    borderRadius: 999,
    padding: "3px 10px",
  },
  bspEffective: { fontSize: 11, color: "#9ca3af", fontStyle: "italic" },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: "1.5rem",
    fontWeight: 500,
    color: "#1c1c1c",
    margin: "0 0 1rem",
  },
  chargesTable: {
    border: "0.5px solid rgba(0,0,0,0.08)",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: "2.5rem",
  },
  chargeRow: {
    display: "grid",
    gridTemplateColumns: "200px 1fr",
    padding: "1rem 1.4rem",
    alignItems: "center",
  },
  chargeLabel: {
    fontSize: 11, fontWeight: 500, letterSpacing: "0.1em",
    textTransform: "uppercase", color: "#6b7280",
  },
  chargeValue: { fontSize: 14, color: "#1c1c1c" },
  plansHeading: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: "1.8rem", fontWeight: 500,
    textAlign: "center", color: "#1c1c1c",
    margin: "0 0 1.6rem",
  },
  plansGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.2rem",
    marginBottom: "2.5rem",
  },
  planCard: { background: "#1a3a6b", borderRadius: 12, overflow: "hidden" },
  planCardHeader: {
    display: "flex", alignItems: "center",
    justifyContent: "space-between",
    padding: "0.9rem 1.4rem",
    borderBottom: "0.5px solid rgba(255,255,255,0.08)",
  },
  planCardTitle: {
    fontSize: 11, fontWeight: 500, letterSpacing: "0.12em",
    textTransform: "uppercase", color: "#f5a54a",
  },
  planCardPill: {
    fontSize: 10, fontWeight: 600, letterSpacing: "0.06em",
    color: "#f5a54a",
    background: "rgba(245,212,131,0.18)",
    border: "1px solid rgba(245,212,131,0.6)",
    borderRadius: 999, padding: "2px 10px",
  },
  planCardBody: { padding: "1.4rem" },
  planBookingRow: {
    display: "flex", alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "1rem", marginBottom: "1rem",
    borderBottom: "0.5px solid rgba(255,255,255,0.08)",
  },
  planBookingLabel: { fontSize: 12, color: "rgba(255,255,255,0.45)" },
  planBookingValue: { fontSize: 13, fontWeight: 500, color: "#f5a54a" },
  installmentsLabel: {
    fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
    textTransform: "uppercase", color: "#ea6c1a",
    marginBottom: "0.7rem",
  },
  planRow: {
    display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "0.55rem 0",
  },
  planRowPeriod: { fontSize: 13, color: "rgba(255,255,255,0.5)" },
  planRowPct: { fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.85)" },
  planNote: {
    marginTop: "1.2rem", padding: "1rem",
    background: "rgba(201,144,26,0.07)",
    border: "0.5px solid rgba(201,144,26,0.2)",
    borderRadius: 8, fontSize: 12,
    color: "rgba(255,255,255,0.5)", lineHeight: 1.7,
  },
  footerStrip: {
    background: "#f9f8f5",
    border: "0.5px solid rgba(0,0,0,0.08)",
    borderRadius: 12,
    padding: "1.6rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
  },
  footerStripTitle: { fontSize: 14, fontWeight: 500, color: "#1c1c1c", marginBottom: 4 },
  footerStripSub: { fontSize: 12, color: "#6b7280" },
  refundBadge: {
    display: "inline-flex", alignItems: "center", gap: 6,
    background: "rgba(15,110,86,0.08)",
    border: "0.5px solid rgba(15,110,86,0.25)",
    borderRadius: 999, padding: "5px 14px",
    fontSize: 11, fontWeight: 500, color: "#0f6e56", flexShrink: 0,
  },
  refundDot: { width: 5, height: 5, borderRadius: "50%", background: "#0f6e56", flexShrink: 0 },
};