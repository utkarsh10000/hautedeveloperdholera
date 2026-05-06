"use client";
import { useEffect, useRef, useState } from 'react';

export default function ManagementQuota() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const savings = 7500 - 7200;

  const stats = [
    {
      num: '646',
      label: 'कुल उपलब्ध प्लॉट',
      desc: 'इस चरण में प्रबंधन कोटा के तहत स्वीकृत कुल प्लॉट।',
      progress: null,
      progressLabel: null,
      progressColor: null,
      tag: 'कुल',
      tagBg: '#e8f0fb', tagText: '#00308F', tagBorder: '#aac4e8',
    },
    {
      num: '411',
      label: 'आवंटित प्लॉट',
      desc: '646 में से 411 प्लॉट पहले ही आवंटित हो चुके हैं। मांग तेजी से बढ़ रही है।',
      progress: 64,
      progressLabel: '64% आवंटित',
      progressColor: '#b71c1c',
      tag: 'आवंटित',
      tagBg: '#fce4ec', tagText: '#880e4f', tagBorder: '#f48fb1',
    },
    {
      num: '235',
      label: 'उपलब्ध इन्वेंटरी',
      desc: 'केवल 235 प्लॉट अभी भी पंजीकरण के लिए खुले हैं। सीमित अवसर।',
      progress: 36,
      progressLabel: '36% शेष',
      progressColor: '#138808',
      tag: 'शेष',
      tagBg: '#e8f5e9', tagText: '#1b5e20', tagBorder: '#a5d6a7',
    },
  ];

  return (
    <section ref={ref} style={{ fontFamily: '"Times New Roman", Times, serif', background: '#f0f0f0' }}>
      <style>{`
        .mq-tricolor { display: flex; height: 8px; width: 100%; }
        .mq-tricolor span:nth-child(1) { flex: 1; background: #FF9933; }
        .mq-tricolor span:nth-child(2) { flex: 1; background: #ffffff; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; }
        .mq-tricolor span:nth-child(3) { flex: 1; background: #138808; }

        .mq-marquee-wrap {
          background: #00308F; color: #FFD700;
          padding: 5px 0; overflow: hidden;
          border-top: 2px solid #FFD700; border-bottom: 2px solid #FFD700;
          font-size: 13px; font-weight: bold;
          letter-spacing: 0.04em; white-space: nowrap;
        }
        .mq-marquee-inner {
          display: inline-block;
          animation: mq-scroll 28s linear infinite;
          padding-left: 100%;
        }
        @keyframes mq-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }

        .mq-section-head {
          background: #00308F; color: #fff;
          padding: 8px 16px; font-size: 14px;
          font-weight: bold; border-left: 6px solid #FF9933;
          letter-spacing: 0.03em; text-transform: uppercase;
        }

        .mq-notice {
          background: #fffde7; border: 1px solid #f9a825;
          border-left: 5px solid #f57f17;
          padding: 9px 14px; font-size: 13px;
          color: #333; margin-bottom: 12px;
        }

        .mq-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          background: #fff;
          border: 1px solid #aab;
          border-top: none;
        }

        .mq-stat-row {
          border-bottom: 1px solid #ccc;
          padding: 12px 14px;
          background: #fff;
          transition: background 0.15s;
        }
        .mq-stat-row:nth-child(even) { background: #e8eef8; }
        .mq-stat-row:hover { background: #d0daf0; }
        .mq-stat-row:last-child { border-bottom: none; }

        .mq-prog-track {
          height: 8px; background: rgba(0,0,0,0.08);
          border: 1px solid #ccc; overflow: hidden; margin-top: 6px;
        }
        .mq-prog-fill {
          height: 100%;
          transition: width 1.6s cubic-bezier(0.4,0,0.2,1);
        }

        .mq-gov-btn {
          display: inline-block; background: #138808; color: #fff;
          border: 2px outset #1aaa0a; padding: 7px 20px;
          font-size: 13px; font-weight: bold; text-decoration: none;
          cursor: pointer; font-family: "Times New Roman", serif;
          letter-spacing: 0.03em; transition: background 0.15s;
        }
        .mq-gov-btn:hover { background: #0d6e06; border-style: inset; }
        .mq-gov-btn-red { background: #b71c1c; border-color: #8b0000; }
        .mq-gov-btn-red:hover { background: #8b0000; }

        .mq-stats-strip { display: flex; gap: 0; border: 1px solid #aab; overflow: hidden; }
        .mq-stat-cell {
          flex: 1; text-align: center; padding: 10px 6px;
          border-right: 1px solid #aab; background: #fff;
        }
        .mq-stat-cell:last-child { border-right: none; }
        .mq-stat-cell:nth-child(even) { background: #e8eef8; }

        .mq-footer-strip {
          background: #00308F; color: #fff; font-size: 12px;
          padding: 10px 16px; display: flex;
          justify-content: space-between; align-items: center;
          border-top: 3px solid #FF9933; flex-wrap: wrap; gap: 8px;
        }

        .mq-table {
          width: 100%; border-collapse: collapse; font-size: 13px; background: #fff;
        }
        .mq-table th {
          background: #00308F; color: #FFD700;
          padding: 7px 10px; text-align: left;
          border: 1px solid #003580; font-size: 11px;
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .mq-table td {
          padding: 7px 10px; border: 1px solid #bbb;
          vertical-align: top; color: #111; line-height: 1.5;
        }
        .mq-table tr:nth-child(even) td { background: #e8eef8; }
        .mq-table tr:hover td { background: #d0daf0; }

        @media (max-width: 768px) {
          .mq-layout { grid-template-columns: 1fr !important; }
          .mq-left-col { border-right: none !important; border-bottom: 1px solid #ccc; }
        }
      `}</style>

      {/* Tricolor top */}
      <div className="mq-tricolor"><span /><span /><span /></div>

      {/* Marquee */}
      <div className="mq-marquee-wrap">
        <div className="mq-marquee-inner">
          ★ प्रबंधन कोटा ★ सीमित प्लॉट उपलब्ध ★ धोलेरा SIR ★ गुजरात सरकार अनुमोदित ★ DMIC परियोजना ★ ₹7,200/वर्ग गज ★ अभी पंजीकरण करें ★&nbsp;&nbsp;&nbsp;★ प्रबंधन कोटा ★ सीमित प्लॉट उपलब्ध ★ धोलेरा SIR ★ गुजरात सरकार अनुमोदित ★ DMIC परियोजना ★ ₹7,200/वर्ग गज ★ अभी पंजीकरण करें ★
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 16px 0' }}>

        {/* Notice */}
        <div className="mq-notice">
          <strong>⚠ सूचना:</strong> प्रबंधन कोटा में केवल <strong>235 प्लॉट शेष</strong> हैं। दर <strong>₹7,200/वर्ग गज</strong>, 05 मार्च 2026 से प्रभावी। आवेदन शुल्क <strong>₹11,500</strong> (पूर्णतः वापसी योग्य)।
        </div>

        {/* Section heading */}
        <div className="mq-section-head">
          अनुभाग: प्रबंधन कोटा — विशेष प्लॉट प्राथमिक दर पर
        </div>

        {/* Two col layout */}
        <div className="mq-layout">

          {/* LEFT: Rate comparison */}
          <div className="mq-left-col" style={{ borderRight: '1px solid #ccc' }}>
            <div style={{
              background: '#00308F', color: '#FFD700',
              padding: '5px 10px', fontSize: 11, fontWeight: 'bold',
              textTransform: 'uppercase', letterSpacing: '0.06em',
            }}>
              दर तुलना
            </div>

            {/* MQ Rate */}
            <div style={{ padding: '16px 14px', borderBottom: '1px solid #ccc', background: '#fff' }}>
              <div style={{ fontSize: 10, fontWeight: 'bold', color: '#FF9933', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                ★ प्रबंधन कोटा दर
              </div>
              <div style={{ fontSize: 32, fontWeight: 'bold', color: '#b71c1c', lineHeight: 1 }}>₹7,200</div>
              <div style={{ fontSize: 11, color: '#555', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>प्रति वर्ग गज</div>
            </div>

            {/* General rate */}
            <div style={{ padding: '12px 14px', borderBottom: '1px solid #ccc', background: '#e8eef8' }}>
              <div style={{ fontSize: 10, fontWeight: 'bold', color: '#888', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                सामान्य कोटा दर
              </div>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#aaa', lineHeight: 1, textDecoration: 'line-through' }}>₹7,500</div>
              <div style={{ fontSize: 11, color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>प्रति वर्ग गज</div>
            </div>

            {/* Savings */}
            <div style={{ padding: '12px 14px', borderBottom: '1px solid #ccc', background: '#fffde7', border: '1px solid #f9a825' }}>
              <div style={{ fontSize: 10, fontWeight: 'bold', color: '#138808', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                ✔ बचत
              </div>
              <div style={{ fontSize: 22, fontWeight: 'bold', color: '#138808', lineHeight: 1 }}>₹{savings}/वर्ग गज</div>
              <div style={{ fontSize: 11, color: '#555', marginTop: 2 }}>सामान्य कोटा की तुलना में</div>
            </div>

            {/* Rate table */}
            <div style={{ padding: '12px 14px' }}>
              <div style={{ fontSize: 11, fontWeight: 'bold', color: '#00308F', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid #FF9933', paddingBottom: 4, marginBottom: 8 }}>
                भुगतान योजना
              </div>
              <table className="mq-table">
                <thead>
                  <tr><th>किस्त</th><th>प्रतिशत</th><th>समय</th></tr>
                </thead>
                <tbody>
                  {[
                    ['बुकिंग', '10%', 'तुरंत'],
                    ['किस्त 1–6', '15% × 6', '180 दिन'],
                    ['MQ बुकिंग', '10%', 'तुरंत'],
                    ['MQ शेष', '90%', '30 दिन'],
                  ].map(([a, b, c]) => (
                    <tr key={a}>
                      <td>{a}</td>
                      <td style={{ fontWeight: 'bold', color: '#00308F' }}>{b}</td>
                      <td style={{ color: '#555' }}>{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <a href="/register" className="mq-gov-btn" style={{ textAlign: 'center' }}>▶ अभी आवेदन करें</a>
              <a href="/register" className="mq-gov-btn mq-gov-btn-red" style={{ textAlign: 'center' }}>☎ संपर्क करें</a>
            </div>
          </div>

          {/* RIGHT: Stats rows */}
          <div>
            <div style={{
              background: '#e8eef8', padding: '6px 12px',
              fontSize: 11, fontWeight: 'bold', color: '#00308F',
              textTransform: 'uppercase', letterSpacing: '0.06em',
              borderBottom: '1px solid #aab',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span>► प्लॉट उपलब्धता विवरण</span>
              <span style={{ color: '#888', fontWeight: 'normal' }}>05 मार्च 2026 से प्रभावी</span>
            </div>

            {stats.map((item, i) => (
              <div className="mq-stat-row" key={item.label} style={{ background: i % 2 === 0 ? '#fff' : '#e8eef8' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontSize: 11, color: '#888', minWidth: 22, paddingTop: 2, fontWeight: 'bold' }}>
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{
                        display: 'inline-block', fontSize: 10,
                        padding: '1px 7px',
                        border: `1px solid ${item.tagBorder}`,
                        background: item.tagBg, color: item.tagText,
                        fontWeight: 'bold', letterSpacing: '0.04em',
                      }}>
                        {item.tag}
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 'bold', color: '#00308F' }}>{item.label}</span>
                      <span style={{ marginLeft: 'auto', fontSize: 28, fontWeight: 'bold', color: '#b71c1c', lineHeight: 1, opacity: 0.7 }}>{item.num}</span>
                    </div>
                    <div style={{ fontSize: 12, color: '#555', lineHeight: 1.6 }}>{item.desc}</div>
                    {item.progress && (
                      <div style={{ marginTop: 8 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                          <span style={{ fontSize: 10, fontWeight: 'bold', color: item.progressColor, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                            {item.progressLabel}
                          </span>
                          <span style={{ fontSize: 10, color: '#888' }}>{item.progress}%</span>
                        </div>
                        <div className="mq-prog-track">
                          <div
                            className="mq-prog-fill"
                            style={{
                              background: item.progressColor,
                              width: animated ? `${item.progress}%` : '0%',
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Infobox */}
            <div style={{ padding: '12px 14px', borderTop: '2px solid #00308F' }}>
              <div style={{ fontSize: 11, fontWeight: 'bold', color: '#00308F', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid #FF9933', paddingBottom: 4, marginBottom: 8 }}>
                ► आवेदन विवरण
              </div>
              {[
                ['कोटा प्रकार', 'प्रबंधन कोटा'],
                ['कुल प्लॉट', '646'],
                ['आवंटित', '411'],
                ['शेष उपलब्ध', '235'],
                ['MQ दर', '₹7,200/वर्ग गज'],
                ['आवेदन शुल्क', '₹11,500'],
                ['वापसी', 'हाँ, पूर्णतः'],
                ['प्रभावी तिथि', '05 मार्च 2026'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: 12, borderBottom: '1px dotted #ccc' }}>
                  <span style={{ color: '#555' }}>{k}</span>
                  <span style={{ fontWeight: 'bold', color: '#00308F' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mq-stats-strip" style={{ borderTop: '2px solid #00308F' }}>
          {[
            { val: '646', label: 'कुल प्लॉट' },
            { val: '411', label: 'आवंटित' },
            { val: '235', label: 'शेष' },
            { val: '₹7,200', label: 'MQ दर' },
            { val: '₹11,500', label: 'आवेदन शुल्क' },
          ].map(s => (
            <div className="mq-stat-cell" key={s.label}>
              <div style={{ fontSize: 18, fontWeight: 'bold', color: '#b71c1c', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 10, color: '#555', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{ border: '2px solid #b71c1c', background: '#fff', marginTop: 16 }}>
          <div style={{
            background: '#b71c1c', color: '#fff', padding: '6px 14px',
            fontSize: 13, fontWeight: 'bold', textTransform: 'uppercase',
            letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ fontSize: 16 }}>⚠</span>
            अंतिम अवसर — प्रबंधन कोटा में केवल 235 प्लॉट शेष
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 18px', flexWrap: 'wrap', gap: 12,
          }}>
            <div>
              <p style={{ fontSize: 14, color: '#111', margin: '0 0 4px', fontWeight: 'bold' }}>
                प्रबंधन कोटा में केवल <span style={{ color: '#b71c1c', fontSize: 18 }}>235</span> प्लॉट शेष हैं।
              </p>
              <p style={{ fontSize: 12, color: '#555', margin: 0 }}>
                आवेदन शुल्क: <strong style={{ color: '#00308F' }}>₹11,500</strong>&nbsp;
                <span style={{ color: '#138808' }}>★ पूर्णतः वापसी योग्य</span>
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="/register" className="mq-gov-btn">▶ अभी पंजीकरण करें</a>
              <a href="/register" className="mq-gov-btn mq-gov-btn-red">☎ संपर्क करें</a>
            </div>
          </div>
        </div>

        {/* Fine print */}
        <p style={{ fontSize: 11, color: '#888', textAlign: 'center', marginTop: 10, lineHeight: 1.7 }}>
          *प्रबंधन कोटा मूल्य ₹7,200/वर्ग गज, 05 मार्च 2026 से प्रभावी। पंजीकरण के समय उपलब्धता के अधीन। रिफंड नीति लागू होती है।
        </p>

      </div>

      {/* Footer strip */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
        <div className="mq-footer-strip">
          <span>© धोलेरा SIR निवेश पोर्टल | प्रबंधन कोटा</span>
          <span style={{ fontSize: 11, color: '#aac' }}>अंतिम अद्यतन: मार्च 2026 | संस्करण 2.1.4</span>
        </div>
      </div>

      {/* Tricolor bottom */}
      <div className="mq-tricolor"><span /><span /><span /></div>

    </section>
  );
}