"use client";

import { useState } from "react";

const faqs = [
  {
    q: "धोलेरा आवास योजना क्या है?",
    a: "धोलेरा आवास योजना गुजरात में धोलेरा ग्रीनफील्ड स्मार्ट सिटी में स्थित एक किफायती आवास परियोजना है। यह दिल्ली-मुंबई औद्योगिक गलियारे (DMIC) के तहत विकसित भारत के पहले नियोजित स्मार्ट शहर का हिस्सा है, जो आधुनिक बुनियादी ढांचे और मजबूत भविष्य की विकास संभावनाओं के साथ आवासीय भूखंड प्रदान करता है।",
    tag: "Overview",
  },
  {
    q: "क्या धोलेरा स्मार्ट सिटी एक सरकारी परियोजना है?",
    a: "हाँ। धोलेरा स्मार्ट सिटी दिल्ली-मुंबई औद्योगिक गलियारे (DMIC) पहल के तहत एक सरकार द्वारा नियोजित ग्रीनफील्ड शहर है, जो केंद्र और राज्य सरकार की नीतियों द्वारा समर्थित है।",
    tag: "Legality",
  },
  {
    q: "धोलेरा में भूखंड की वर्तमान कीमत क्या है?",
    a: "भूखंड की कीमत स्थान, आकार और योजना के अनुसार भिन्न होती है। वर्तमान BSP रु. 7,500 प्रति वर्ग गज है, जबकि प्रबंधन कोटे की दर रु. 7,200 प्रति वर्ग गज है (05 मार्च 2026 से प्रभावी)।",
    tag: "Pricing",
  },
  {
    q: "क्या धोलेरा दीर्घकालिक निवेश के लिए अच्छा है?",
    a: "दीर्घकालिक मूल्य वृद्धि की तलाश करने वाले निवेशकों के लिए धोलेरा एक आकर्षक विकल्प प्रस्तुत करता है। धोलेरा अंतर्राष्ट्रीय हवाई अड्डा, 6-लेन एक्सप्रेसवे, मेट्रो रेल, सौर पार्क और समर्पित माल ढुलाई गलियारे जैसे आगामी बुनियादी ढांचे से भूमि मूल्य में उल्लेखनीय वृद्धि होने की उम्मीद है।",
    tag: "Investment",
  },
  {
    q: "क्या भूखंड कानूनी रूप से अनुमोदित हैं?",
    a: "भूखंड NA (गैर-कृषि) स्थिति और उचित दस्तावेज़ीकरण के साथ पेश किए जाते हैं। खरीदारों को खरीद से पहले स्वतंत्र उचित परिश्रम करने की सलाह दी जाती है।",
    tag: "Legality",
  },
  {
    q: "मुझे धोलेरा आवास योजना के भूखंडों में निवेश क्यों करना चाहिए?",
    a: "यहाँ निवेश सरकार समर्थित सुरक्षा, किफायती मूल्य निर्धारण, आधुनिक सुविधाएं, लचीले भुगतान विकल्प और DMIC के तहत भारत के सबसे बड़े ग्रीनफील्ड स्मार्ट सिटी विकास द्वारा संचालित मजबूत भविष्य की सराहना प्रदान करता है।",
    tag: "Investment",
  },
  {
    q: "धोलेरा आवास योजना में कौन सी सुविधाएं उपलब्ध हैं?",
    a: "निवासियों को क्लब हाउस, जॉगिंग ट्रैक, बहुउद्देशीय कोर्ट, बच्चों का खेल क्षेत्र, वरिष्ठ नागरिक क्षेत्र, इनडोर गेम्स, क्लब हाउस में रेस्तरां, हरा-भरा पार्क, वृक्षारोपण, भव्य प्रवेश द्वार, सुरक्षा केबिन और खुला एम्फीथिएटर जैसी सुविधाएं मिलेंगी।",
    tag: "Amenities",
  },
  {
    q: "क्या मैं धोलेरा आवास योजना के भूखंड पर कई मंजिलें बना सकता हूँ?",
    a: "हाँ। खरीदार अतिरिक्त मंजिलें बनाने के लिए अनुमोदन के लिए आवेदन कर सकते हैं। स्वतंत्र मंजिल पंजीकरण और लचीली निर्माण नीतियां संपत्ति मालिकों को संपत्ति का मूल्य बढ़ाने और समय के साथ किराया आय उत्पन्न करने की अनुमति देती हैं।",
    tag: "Construction",
  },
  {
    q: "क्या लचीले भुगतान विकल्प उपलब्ध हैं?",
    a: "हाँ। हम दो योजनाएं प्रदान करते हैं: 180 दिनों में फैला 6-किस्त TSP योजना (10% बुकिंग + 6x15%), और एक तेज़ प्रबंधन कोटा योजना (10% बुकिंग + 30 दिनों के भीतर 90%) एक प्राथमिकता दर पर। आवेदन शुल्क रु. 11,500 है — पूरी तरह वापसी योग्य।",
    tag: "Pricing",
  },
  {
    q: "क्या धोलेरा आवास योजना में निवेश सुरक्षित है?",
    a: "यह परियोजना सरकार समर्थित धोलेरा स्मार्ट सिटी विकास का हिस्सा है जिसमें विनियमित योजना और बुनियादी ढांचा है। किसी भी रियल एस्टेट निवेश की तरह, खरीदारों को खरीद से पहले स्वतंत्र सत्यापन करने के लिए प्रोत्साहित किया जाता है।",
    tag: "Legality",
  },
];

const tagColors = {
  Overview:     { bg: "#e8f0fb", text: "#00308F", border: "#aac4e8" },
  Legality:     { bg: "#e8f5e9", text: "#1b5e20", border: "#a5d6a7" },
  Pricing:      { bg: "#fff8e1", text: "#e65100", border: "#ffcc80" },
  Investment:   { bg: "#e3f2fd", text: "#0d47a1", border: "#90caf9" },
  Amenities:    { bg: "#f3e5f5", text: "#4a148c", border: "#ce93d8" },
  Construction: { bg: "#fce4ec", text: "#880e4f", border: "#f48fb1" },
};

const tagLabels = {
  Overview: "सामान्य",
  Legality: "कानूनी",
  Pricing: "मूल्य",
  Investment: "निवेश",
  Amenities: "सुविधाएं",
  Construction: "निर्माण",
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTag, setActiveTag] = useState("All");
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const allTags = ["All", ...Object.keys(tagColors)];
  const filtered = activeTag === "All" ? faqs : faqs.filter(f => f.tag === activeTag);

  return (
    <section id="faqs" style={{ fontFamily: '"Times New Roman", Times, serif', background: "#f0f0f0" }}>

      <style>{`
        .faq-tricolor { display: flex; height: 8px; width: 100%; }
        .faq-tricolor span:nth-child(1) { flex: 1; background: #FF9933; }
        .faq-tricolor span:nth-child(2) { flex: 1; background: #ffffff; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; }
        .faq-tricolor span:nth-child(3) { flex: 1; background: #138808; }

        .faq-marquee-wrap {
          background: #00308F; color: #FFD700;
          padding: 5px 0; overflow: hidden;
          border-top: 2px solid #FFD700; border-bottom: 2px solid #FFD700;
          font-size: 13px; font-weight: bold;
          letter-spacing: 0.04em; white-space: nowrap;
        }
        .faq-marquee-inner {
          display: inline-block;
          animation: faq-scroll 30s linear infinite;
          padding-left: 100%;
        }
        @keyframes faq-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }

        .faq-section-head {
          background: #00308F; color: #fff;
          padding: 8px 16px; font-size: 14px;
          font-weight: bold; border-left: 6px solid #FF9933;
          letter-spacing: 0.03em; text-transform: uppercase;
        }

        .faq-notice {
          background: #fffde7; border: 1px solid #f9a825;
          border-left: 5px solid #f57f17;
          padding: 9px 14px; font-size: 13px;
          color: #333; margin-bottom: 12px;
        }

        .faq-filter-bar {
          display: flex; flex-wrap: wrap; gap: 6px;
          padding: 10px 14px; background: #e8eef8;
          border-bottom: 1px solid #aab; align-items: center;
        }
        .faq-filter-label {
          font-size: 11px; color: #555; font-weight: bold;
          text-transform: uppercase; letter-spacing: 0.06em; margin-right: 4px;
        }
        .faq-filter-btn {
          font-family: "Times New Roman", serif; font-size: 11px;
          padding: 3px 10px; border: 1px solid #aab;
          background: #fff; color: #00308F;
          cursor: pointer; font-weight: bold;
          letter-spacing: 0.04em; transition: background 0.15s;
        }
        .faq-filter-btn.faq-active { background: #00308F; color: #FFD700; border-color: #00308F; }
        .faq-filter-btn:hover { background: #d0daf0; color: #00308F; }
        .faq-filter-btn.faq-active:hover { background: #00308F; color: #FFD700; }

        .faq-row { border-bottom: 1px solid #ccc; background: #fff; transition: background 0.15s; }
        .faq-row:nth-child(even) { background: #f5f7fc; }
        .faq-row:hover { background: #e8eef8; }

        .faq-question-btn {
          width: 100%; text-align: left; background: none;
          border: none; padding: 10px 14px; cursor: pointer;
          display: flex; align-items: flex-start; gap: 10px;
          font-family: "Times New Roman", serif;
        }

        .faq-answer { overflow: hidden; transition: max-height 0.35s ease; }
        .faq-answer-inner {
          padding: 10px 14px 12px calc(14px + 22px + 10px);
          font-size: 13px; color: #333; line-height: 1.75;
          border-top: 1px dashed #ccc; background: #fffde7;
        }

        .faq-stats-row { display: flex; gap: 0; border: 1px solid #aab; overflow: hidden; }
        .faq-stat-cell {
          flex: 1; text-align: center; padding: 10px 6px;
          border-right: 1px solid #aab; background: #fff;
        }
        .faq-stat-cell:last-child { border-right: none; }
        .faq-stat-cell:nth-child(even) { background: #e8eef8; }

        .faq-gov-btn {
          display: inline-block; background: #138808; color: #fff;
          border: 2px outset #1aaa0a; padding: 7px 20px;
          font-size: 13px; font-weight: bold; text-decoration: none;
          cursor: pointer; font-family: "Times New Roman", serif;
          letter-spacing: 0.03em; transition: background 0.15s;
        }
        .faq-gov-btn:hover { background: #0d6e06; border-style: inset; }
        .faq-gov-btn-red { background: #b71c1c; border-color: #8b0000; }
        .faq-gov-btn-red:hover { background: #8b0000; }

        .faq-sidebar-btn {
          font-family: "Times New Roman", serif; font-size: 12px;
          padding: 5px 10px; border: 1px solid #aab;
          cursor: pointer; font-weight: bold; text-align: left;
          letter-spacing: 0.03em; width: 100%;
          display: flex; justify-content: space-between; align-items: center;
          transition: background 0.15s;
        }
        .faq-sidebar-btn.faq-active { background: #00308F; color: #FFD700; border-color: #00308F; }
        .faq-sidebar-btn:not(.faq-active) { background: #f5f7fc; color: #00308F; }
        .faq-sidebar-btn:not(.faq-active):hover { background: #d0daf0; }

        .faq-footer-strip {
          background: #00308F; color: #fff; font-size: 12px;
          padding: 10px 16px; display: flex;
          justify-content: space-between; align-items: center;
          border-top: 3px solid #FF9933; flex-wrap: wrap; gap: 8px;
        }

        @media (max-width: 768px) {
          .faq-layout { grid-template-columns: 1fr !important; }
          .faq-sidebar { border-right: none !important; border-bottom: 1px solid #ccc; }
        }
      `}</style>

      {/* Tricolor top */}
      <div className="faq-tricolor"><span /><span /><span /></div>

      {/* Marquee */}
      <div className="faq-marquee-wrap">
        <div className="faq-marquee-inner">
          ★ अक्सर पूछे जाने वाले प्रश्न (FAQ) ★ धोलेरा SIR ★ गुजरात सरकार अनुमोदित ★ DMIC परियोजना ★ सीमित प्लॉट उपलब्ध ★ अभी पंजीकरण करें ★&nbsp;&nbsp;&nbsp;★ अक्सर पूछे जाने वाले प्रश्न (FAQ) ★ धोलेरा SIR ★ गुजरात सरकार अनुमोदित ★ DMIC परियोजना ★ सीमित प्लॉट उपलब्ध ★ अभी पंजीकरण करें ★
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px 0" }}>

        {/* Notice */}
        <div className="faq-notice">
          <strong>⚠ सूचना:</strong> नीचे दिए गए प्रश्न धोलेरा आवास योजना से संबंधित हैं। किसी भी अतिरिक्त जानकारी के लिए कृपया हमारे कार्यालय से संपर्क करें। आवेदन शुल्क <strong>₹11,500</strong> (पूर्णतः वापसी योग्य)।
        </div>

        {/* Section heading */}
        <div className="faq-section-head">
          अनुभाग: अक्सर पूछे जाने वाले प्रश्न — Frequently Asked Questions (FAQ)
        </div>

        {/* Two col layout */}
        <div
          className="faq-layout"
          style={{ display: "grid", gridTemplateColumns: "260px 1fr", background: "#fff", border: "1px solid #aab", borderTop: "none" }}
        >
          {/* LEFT sidebar */}
          <div className="faq-sidebar" style={{ borderRight: "1px solid #ccc", padding: "14px" }}>
            <div style={{
              background: "#00308F", color: "#FFD700",
              padding: "5px 10px", fontSize: 11, fontWeight: "bold",
              textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8,
            }}>
              विषय अनुसार फ़िल्टर
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`faq-sidebar-btn${activeTag === tag ? " faq-active" : ""}`}
                  onClick={() => { setActiveTag(tag); setOpenIndex(null); }}
                >
                  <span>{tag === "All" ? "★ सभी प्रश्न" : `▶ ${tagLabels[tag] || tag}`}</span>
                  <span style={{ fontSize: 10, opacity: 0.7 }}>
                    ({tag === "All" ? faqs.length : faqs.filter(f => f.tag === tag).length})
                  </span>
                </button>
              ))}
            </div>

            {/* Quick stats */}
            <div style={{ marginTop: 14 }}>
              <div style={{
                background: "#00308F", color: "#FFD700",
                padding: "5px 10px", fontSize: 11, fontWeight: "bold",
                textTransform: "uppercase", letterSpacing: "0.06em",
              }}>
                त्वरित तथ्य
              </div>
              {[
                ["कुल FAQ", `${faqs.length}`],
                ["श्रेणियाँ", "6"],
                ["BSP दर", "₹7,500/वर्ग गज"],
                ["MQ दर", "₹7,200/वर्ग गज"],
                ["शेष प्लॉट", "235"],
              ].map(([k, v]) => (
                <div key={k} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "5px 8px", fontSize: 12,
                  borderBottom: "1px dotted #ccc", background: "#fff",
                }}>
                  <span style={{ color: "#555" }}>{k}</span>
                  <span style={{ fontWeight: "bold", color: "#00308F" }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
              <a href="/register" className="faq-gov-btn" style={{ textAlign: "center" }}>▶ अभी आवेदन करें</a>
              <a href="/register" className="faq-gov-btn faq-gov-btn-red" style={{ textAlign: "center" }}>☎ संपर्क करें</a>
            </div>
          </div>

          {/* RIGHT: FAQ list */}
          <div style={{ padding: 0 }}>
            {/* Filter bar */}
            <div className="faq-filter-bar">
              <span className="faq-filter-label">फ़िल्टर:</span>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`faq-filter-btn${activeTag === tag ? " faq-active" : ""}`}
                  onClick={() => { setActiveTag(tag); setOpenIndex(null); }}
                >
                  {tag === "All" ? "सभी" : tagLabels[tag] || tag}
                </button>
              ))}
              <span style={{ marginLeft: "auto", fontSize: 11, color: "#888" }}>
                {filtered.length} प्रश्न
              </span>
            </div>

            {/* FAQ rows */}
            {filtered.map((faq) => {
              const realIndex = faqs.indexOf(faq);
              const isOpen = openIndex === realIndex;
              const tagStyle = tagColors[faq.tag] || tagColors.Overview;

              return (
                <div className="faq-row" key={realIndex}>
                  <button className="faq-question-btn" onClick={() => toggle(realIndex)}>
                    <span style={{ fontSize: 11, color: "#888", minWidth: 22, paddingTop: 2, fontWeight: "bold" }}>
                      {String(realIndex + 1).padStart(2, "0")}.
                    </span>
                    <span style={{ flex: 1 }}>
                      <span style={{
                        display: "inline-block", fontSize: 10,
                        padding: "1px 7px", border: `1px solid ${tagStyle.border}`,
                        background: tagStyle.bg, color: tagStyle.text,
                        marginBottom: 3, fontWeight: "bold", letterSpacing: "0.04em",
                      }}>
                        {tagLabels[faq.tag] || faq.tag}
                      </span>
                      <br />
                      <span style={{ fontSize: 13, color: "#00308F", fontWeight: "bold", lineHeight: 1.5 }}>
                        {faq.q}
                      </span>
                    </span>
                    <span style={{ fontSize: 11, color: isOpen ? "#FF9933" : "#888", marginTop: 2, flexShrink: 0 }}>
                      {isOpen ? "▲ बंद करें" : "▼ देखें"}
                    </span>
                  </button>

                  <div className="faq-answer" style={{ maxHeight: isOpen ? 300 : 0 }}>
                    <div className="faq-answer-inner">
                      <strong style={{ color: "#b71c1c", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        उत्तर:
                      </strong>
                      <br />
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div style={{ padding: 20, fontSize: 13, color: "#888", textAlign: "center", fontStyle: "italic" }}>
                इस श्रेणी में कोई प्रश्न नहीं मिला।
              </div>
            )}

            {/* Stats strip */}
            <div className="faq-stats-row" style={{ borderTop: "2px solid #00308F" }}>
              {[
                { val: "10", label: "कुल प्रश्न" },
                { val: "6", label: "श्रेणियाँ" },
                { val: "235", label: "शेष प्लॉट" },
                { val: "₹11,500", label: "आवेदन शुल्क" },
              ].map(s => (
                <div className="faq-stat-cell" key={s.label}>
                  <div style={{ fontSize: 18, fontWeight: "bold", color: "#b71c1c", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
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
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="/register" className="faq-gov-btn">▶ अभी पंजीकरण करें</a>
              <a href="/register" className="faq-gov-btn faq-gov-btn-red">☎ संपर्क करें</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div className="faq-footer-strip">
          <span>© धोलेरा SIR निवेश पोर्टल | अक्सर पूछे जाने वाले प्रश्न</span>
          <span style={{ fontSize: 11, color: "#aac" }}>अंतिम अद्यतन: मार्च 2026 | प्रश्न संख्या: {faqs.length}</span>
        </div>
      </div>

      {/* Tricolor bottom */}
      <div className="faq-tricolor"><span /><span /><span /></div>

    </section>
  );
}