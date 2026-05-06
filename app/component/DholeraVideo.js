"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { num: "920 km²", label: "कुल क्षेत्रफल", sub: "नियोजित विकास क्षेत्र" },
  { num: "2 लाख+", label: "रोजगार लक्ष्य", sub: "प्रत्यक्ष एवं अप्रत्यक्ष" },
  { num: "109 km", label: "अहमदाबाद दूरी", sub: "एक्सप्रेसवे से" },
  { num: "₹7,200", label: "प्रबंधन दर", sub: "प्रति वर्ग गज" },
];

export default function DholeraVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => {
      if (video.duration) setProgress((video.currentTime / video.duration) * 100);
    };
    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { video.play(); setIsPlaying(true); }
    else { video.pause(); setIsPlaying(false); }
  };

  const handleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const video = videoRef.current;
    if (video?.duration) video.currentTime = ratio * video.duration;
  };

  return (
    <section style={{ fontFamily: '"Times New Roman", Times, serif', background: "#f0f0f0" }}>
      <style>{`
        .dv-tricolor { display: flex; height: 8px; width: 100%; }
        .dv-tricolor span:nth-child(1) { flex: 1; background: #FF9933; }
        .dv-tricolor span:nth-child(2) { flex: 1; background: #ffffff; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; }
        .dv-tricolor span:nth-child(3) { flex: 1; background: #138808; }

        .dv-marquee-wrap {
          background: #00308F; color: #FFD700;
          padding: 5px 0; overflow: hidden;
          border-top: 2px solid #FFD700; border-bottom: 2px solid #FFD700;
          font-size: 13px; font-weight: bold;
          letter-spacing: 0.04em; white-space: nowrap;
        }
        .dv-marquee-inner {
          display: inline-block;
          animation: dv-scroll 28s linear infinite;
          padding-left: 100%;
        }
        @keyframes dv-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }

        .dv-section-head {
          background: #00308F; color: #fff;
          padding: 8px 16px; font-size: 14px;
          font-weight: bold; border-left: 6px solid #FF9933;
          letter-spacing: 0.03em; text-transform: uppercase;
        }

        .dv-notice {
          background: #fffde7; border: 1px solid #f9a825;
          border-left: 5px solid #f57f17;
          padding: 9px 14px; font-size: 13px;
          color: #333; margin-bottom: 12px;
        }

        .dv-video-wrap {
          position: relative; cursor: pointer;
          background: #1a3a6b;
          aspect-ratio: 16/9; overflow: hidden;
        }
        .dv-video-wrap:hover .dv-controls { opacity: 1 !important; }

        .dv-controls {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 8px 12px;
          background: rgba(0,48,143,0.75);
          display: flex; align-items: center; gap: 8px;
          z-index: 5; opacity: 0; transition: opacity 0.3s;
        }

        .dv-play-btn {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 72px; height: 72px; border-radius: 50%;
          background: #b71c1c;
          border: 3px outset #8b0000;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          z-index: 4;
        }

        .dv-prog-track {
          flex: 1; height: 6px;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.4);
        }
        .dv-prog-fill {
          height: 100%; background: #FF9933;
          transition: width 0.1s linear;
        }

        .dv-mute-btn {
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.4);
          color: #fff; cursor: pointer;
          padding: 2px 6px; font-size: 10px; font-weight: bold;
          font-family: "Times New Roman", serif;
        }

        .dv-ctrl-btn {
          background: #b71c1c; border: 1px outset #8b0000;
          color: #fff; cursor: pointer;
          padding: 2px 8px; font-family: "Times New Roman", serif;
          font-size: 11px; font-weight: bold;
        }

        .dv-gov-btn {
          display: block; background: #138808; color: #fff;
          border: 2px outset #1aaa0a; padding: 6px 10px;
          font-size: 12px; font-weight: bold; text-decoration: none;
          text-align: center; font-family: "Times New Roman", serif;
          letter-spacing: 0.03em; cursor: pointer;
        }
        .dv-gov-btn:hover { background: #0d6e06; border-style: inset; }
        .dv-gov-btn-red { background: #b71c1c; border-color: #8b0000; }
        .dv-gov-btn-red:hover { background: #8b0000; }

        .dv-stats-row { display: flex; gap: 0; border: 1px solid #aab; overflow: hidden; }
        .dv-stat-cell {
          flex: 1; text-align: center; padding: 10px 6px;
          border-right: 1px solid #aab; background: #fff;
        }
        .dv-stat-cell:last-child { border-right: none; }
        .dv-stat-cell:nth-child(even) { background: #e8eef8; }

        .dv-footer-strip {
          background: #00308F; color: #fff; font-size: 12px;
          padding: 10px 16px; display: flex;
          justify-content: space-between; align-items: center;
          border-top: 3px solid #FF9933; flex-wrap: wrap; gap: 8px;
        }

        .dv-layout { display: grid; grid-template-columns: 1fr 260px; background: #fff; border: 1px solid #aab; border-top: none; }

        @media (max-width: 768px) {
          .dv-layout { grid-template-columns: 1fr !important; }
          .dv-sidebar { border-right: none !important; border-bottom: 1px solid #ccc; }
        }
      `}</style>

      {/* Tricolor top */}
      <div className="dv-tricolor"><span /><span /><span /></div>

      {/* Marquee */}
      <div className="dv-marquee-wrap">
        <div className="dv-marquee-inner">
          ★ धोलेरा स्पेशल इन्वेस्टमेंट रीजन (DSIR) ★ गुजरात सरकार अनुमोदित ★ DMIC परियोजना ★ राष्ट्रीय महत्व की परियोजना ★ सीमित प्लॉट उपलब्ध ★ अभी पंजीकरण करें ★&nbsp;&nbsp;&nbsp;★ धोलेरा स्पेशल इन्वेस्टमेंट रीजन (DSIR) ★ गुजरात सरकार अनुमोदित ★ DMIC परियोजना ★ राष्ट्रीय महत्व की परियोजना ★ सीमित प्लॉट उपलब्ध ★ अभी पंजीकरण करें ★
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px 0" }}>

        {/* Notice */}
        <div className="dv-notice">
          <strong>⚠ सूचना:</strong> नीचे प्रस्तुत वीडियो धोलेरा SIR का आधिकारिक फुटेज है। प्रबंधन कोटा में केवल <strong>235 प्लॉट शेष</strong> हैं। आवेदन शुल्क <strong>₹11,500</strong> (पूर्णतः वापसी योग्य)।
        </div>

        {/* Section heading */}
        <div className="dv-section-head">
          अनुभाग: आधिकारिक वीडियो — भारत का पहला ग्रीनफील्ड स्मार्ट सिटी
        </div>

        {/* Two col layout */}
        <div className="dv-layout">

          {/* LEFT: Video */}
          <div className="dv-sidebar" style={{ borderRight: "1px solid #ccc" }}>
            <div style={{
              background: "#e8eef8", padding: "6px 12px",
              fontSize: 11, fontWeight: "bold", color: "#00308F",
              textTransform: "uppercase", letterSpacing: "0.06em",
              borderBottom: "1px solid #aab",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span>► आधिकारिक फुटेज — Official Video Footage</span>
              <span style={{ background: "#138808", color: "#fff", padding: "1px 8px", fontSize: 10, fontWeight: "bold", letterSpacing: "0.06em" }}>● LIVE</span>
            </div>

            <div className="dv-video-wrap" onClick={handlePlayPause}>
              <video
                ref={videoRef}
                src="https://dholera.gujarat.gov.in/dicdl_homepage_video/static/src/video/Dholera_AV_Mar_2025.mp4"
                muted
                playsInline
                autoPlay
                loop
                preload="metadata"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />

              {/* Top bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, zIndex: 6,
                background: "#00308F", color: "#FFD700",
                padding: "4px 10px", fontSize: 10, fontWeight: "bold",
                letterSpacing: "0.06em", textTransform: "uppercase",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                pointerEvents: "none",
              }}>
                <span>धोलेरा SIR — आधिकारिक फुटेज</span>
                <span style={{ background: "#b71c1c", color: "#fff", padding: "1px 6px", fontSize: 9, fontWeight: "bold" }}>गुजरात सरकार</span>
              </div>


              {/* Controls */}
              <div className="dv-controls" onClick={(e) => e.stopPropagation()}>
                <button className="dv-ctrl-btn" onClick={handlePlayPause}>
                  {isPlaying ? "⏸ रोकें" : "▶ चलाएं"}
                </button>
                <div className="dv-prog-track" onClick={handleSeek}>
                  <div className="dv-prog-fill" style={{ width: `${progress}%` }} />
                </div>
                <button className="dv-mute-btn" onClick={handleMute}>
                  {isMuted ? "🔇" : "🔊"}
                </button>
              </div>
            </div>

            {/* Video caption */}
            <div style={{
              background: "#f5f5f5", borderTop: "1px solid #ccc",
              padding: "6px 10px", fontSize: 11, color: "#555",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ fontStyle: "italic" }}>स्रोत: dholera.gujarat.gov.in | मार्च 2025</span>
              <span style={{ background: "#00308F", color: "#FFD700", padding: "1px 7px", fontSize: 10, fontWeight: "bold", letterSpacing: "0.04em" }}>DMIC अनुमोदित</span>
            </div>

            <div style={{ padding: "10px 12px", fontSize: 12, color: "#333", lineHeight: 1.7, borderTop: "1px dotted #ccc" }}>
              900 वर्ग किमी में फैला धोलेरा, DMIC का प्रमुख नोड — यह भविष्य की नगरी कैसे आकार ले रही है, इस आधिकारिक वीडियो में देखें।
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div>
            <div style={{
              background: "#00308F", color: "#FFD700",
              padding: "5px 10px", fontSize: 11, fontWeight: "bold",
              textTransform: "uppercase", letterSpacing: "0.06em",
            }}>
              त्वरित तथ्य
            </div>

            {STATS.map((stat, i) => (
              <div key={stat.label} style={{
                padding: "10px 12px", borderBottom: "1px solid #ccc",
                background: i % 2 === 0 ? "#fff" : "#e8eef8",
              }}>
                <div style={{ fontSize: 18, fontWeight: "bold", color: "#b71c1c", lineHeight: 1 }}>{stat.num}</div>
                <div style={{ fontSize: 11, fontWeight: "bold", color: "#00308F", textTransform: "uppercase", letterSpacing: "0.06em", margin: "2px 0" }}>{stat.label}</div>
                <div style={{ fontSize: 10, color: "#555" }}>{stat.sub}</div>
              </div>
            ))}

            <div style={{ padding: "10px 12px", borderTop: "2px solid #00308F" }}>
              <div style={{ fontSize: 11, fontWeight: "bold", color: "#00308F", textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid #ccc", paddingBottom: 4, marginBottom: 8 }}>
                परियोजना पहचान
              </div>
              {[
                ["राज्य", "गुजरात"],
                ["श्रेणी", "ग्रीनफील्ड"],
                ["स्वीकृति", "DMIC / केंद्र"],
                ["हवाई अड्डा", "प्रस्तावित"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 11, borderBottom: "1px dotted #ddd" }}>
                  <span style={{ color: "#555" }}>{k}</span>
                  <span style={{ fontWeight: "bold", color: "#00308F" }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
              <a href="/register" className="dv-gov-btn">▶ अभी आवेदन करें</a>
              <a href="/register" className="dv-gov-btn dv-gov-btn-red">☎ संपर्क करें</a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="dv-stats-row" style={{ borderTop: "2px solid #00308F" }}>
          {[
            { val: "920", label: "कुल क्षेत्र (km²)" },
            { val: "2M+", label: "नियोजित निवासी" },
            { val: "235", label: "शेष प्लॉट" },
            { val: "₹11,500", label: "आवेदन शुल्क" },
          ].map(s => (
            <div className="dv-stat-cell" key={s.label}>
              <div style={{ fontSize: 18, fontWeight: "bold", color: "#b71c1c", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{ border: "2px solid #b71c1c", background: "#fff", marginTop: 16 }}>
          <div style={{ background: "#b71c1c", color: "#fff", padding: "6px 14px", fontSize: 13, fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.06em", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 16 }}>⚠</span>
            अंतिम अवसर सूचना — Limited Period Offer
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", flexWrap: "wrap", gap: 12 }}>
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
              <a href="/register" className="dv-gov-btn" style={{ display: "inline-block" }}>▶ अभी पंजीकरण करें</a>
              <a href="/register" className="dv-gov-btn dv-gov-btn-red" style={{ display: "inline-block" }}>☎ संपर्क करें</a>
            </div>
          </div>
        </div>

      </div>

      {/* Footer strip */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div className="dv-footer-strip">
          <span>© धोलेरा SIR निवेश पोर्टल | आधिकारिक वीडियो</span>
          <span style={{ fontSize: 11, color: "#aac" }}>अंतिम अद्यतन: मार्च 2026 | स्रोत: गुजरात सरकार</span>
        </div>
      </div>

      {/* Tricolor bottom */}
      <div className="dv-tricolor"><span /><span /><span /></div>

    </section>
  );
}