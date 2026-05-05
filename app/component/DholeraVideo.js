"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { num: "920 km²", label: "कुल क्षेत्रफल",  sub: "नियोजित विकास क्षेत्र" },
  { num: "2 लाख+", label: "रोजगार लक्ष्य",  sub: "प्रत्यक्ष एवं अप्रत्यक्ष" },
  { num: "109 km",  label: "अहमदाबाद दूरी",  sub: "एक्सप्रेसवे से" },
  { num: "₹7,200", label: "प्रबंधन दर",      sub: "प्रति वर्ग गज" },
];

function IconPlay({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" style={{ marginLeft: 3 }}>
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}

function IconPause({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <rect x="5" y="4" width="4" height="16" rx="1" />
      <rect x="15" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function IconMuted() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function IconUnmuted() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
    </svg>
  );
}

export default function DholeraVideo() {
  const sectionRef = useRef(null);
  const videoRef   = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted,   setIsMuted]   = useState(true);
  const [progress,  setProgress]  = useState(0);

  // Reveal on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Progress tracking
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => {
      if (video.duration) setProgress((video.currentTime / video.duration) * 100);
    };
    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, [isVisible]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { video.play(); setIsPlaying(true); }
    else              { video.pause(); setIsPlaying(false); }
  };

  const handleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e) => {
    const rect  = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const video = videoRef.current;
    if (video?.duration) video.currentTime = ratio * video.duration;
  };

  const handleVideoEnd = () => { setIsPlaying(false); setProgress(0); };

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#eaf2ff",
        padding: "7rem 0",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap');

        @keyframes dv-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dv-pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        @keyframes dv-shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position:  400px 0; }
        }

        .dv-animate   { animation: dv-fade-up 0.7s ease both; }
        .dv-delay-1   { animation-delay: 0.05s; }
        .dv-delay-2   { animation-delay: 0.15s; }
        .dv-delay-3   { animation-delay: 0.25s; }

        /* ── Video wrapper hover reveals controls ── */
        .dv-video-wrap { position: relative; cursor: pointer; }
        .dv-controls {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 1.2rem 1.8rem;
          background: linear-gradient(transparent, rgba(26,58,107,0.55));
          display: flex; align-items: center; gap: 1rem;
          z-index: 5;
          opacity: 0; transition: opacity 0.3s;
        }
        .dv-video-wrap:hover .dv-controls { opacity: 1; }

        /* ── Play button ── */
        .dv-play-btn {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 82px; height: 82px; border-radius: 50%;
          background: rgba(234,108,26,0.92);
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s, background 0.25s, box-shadow 0.25s;
          z-index: 4;
          box-shadow: 0 8px 40px rgba(234,108,26,0.45);
        }
        .dv-play-btn::before {
          content: '';
          position: absolute; inset: 0; border-radius: 50%;
          border: 2px solid rgba(234,108,26,0.5);
          animation: dv-pulse-ring 1.8s ease-out infinite;
        }
        .dv-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.10);
          background: #f07d2a;
          box-shadow: 0 12px 56px rgba(234,108,26,0.60);
        }

        /* ── Overlay dims video until playing ── */
        .dv-overlay {
          position: absolute; inset: 0;
          background: rgba(26,58,107,0.10);
          transition: opacity 0.4s; z-index: 2;
        }
        .dv-overlay.playing { opacity: 0; pointer-events: none; }

        /* ── Skeleton shimmer ── */
        .dv-skeleton {
          background: linear-gradient(90deg, #cfe0f5 25%, #ddeafc 50%, #cfe0f5 75%);
          background-size: 800px 100%;
          animation: dv-shimmer 1.4s infinite linear;
        }

        /* ── Stat cards ── */
        .dv-stat-card {
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .dv-stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(234,108,26,0.18) !important;
        }

        /* ── Progress bar ── */
        .dv-progress-track {
          flex: 1; height: 3px;
          background: rgba(255,255,255,0.40);
          border-radius: 99px; cursor: pointer; overflow: hidden;
        }
        .dv-progress-fill {
          height: 100%; border-radius: 99px; background: #ea6c1a;
          transition: width 0.1s linear;
        }

        /* ── Mute button ── */
        .dv-mute-btn {
          background: rgba(255,255,255,0.25);
          border: 1px solid rgba(255,255,255,0.40);
          border-radius: 50%; width: 32px; height: 32px;
          display: flex; align-items: center; justify-content: center;
          color: white; cursor: pointer;
          transition: background 0.2s; flex-shrink: 0;
        }
        .dv-mute-btn:hover { background: rgba(255,255,255,0.40); }

        .dv-ctrl-btn {
          background: none; border: none; color: white;
          cursor: pointer; display: flex; align-items: center; padding: 0;
        }

        @media (max-width: 768px) {
          .dv-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .dv-heading    { font-size: clamp(2rem, 7vw, 3rem) !important; }
        }
        @media (max-width: 480px) {
          .dv-play-btn { width: 64px !important; height: 64px !important; }
        }
      `}</style>

      {/* Ambient radial glow */}
      <div style={{
        position: "absolute", top: "35%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "70vw", height: "40vw",
        background: "radial-gradient(ellipse, rgba(26,58,107,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Top gold rule */}
      <GoldRule pos="top" />

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>

        {/* Eyebrow label */}
        <div className="dv-animate dv-delay-1" style={{ marginBottom: "0.5rem" }}>
          <span style={{
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "#ea6c1a",
          }}>
            धोलेरा स्मार्ट सिटी
          </span>
        </div>

        {/* Heading row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "flex-end",
          gap: "2rem",
          marginBottom: "3rem",
        }}>
          <h2
            className="dv-animate dv-delay-2 dv-heading"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 700, color: "#1a3a6b",
              lineHeight: 1.1, margin: 0,
            }}
          >
            भारत का पहला
            <br />
            <span style={{ fontStyle: "italic", color: "#ea6c1a" }}>ग्रीनफील्ड स्मार्ट सिटी</span>
          </h2>

          <p className="dv-animate dv-delay-3" style={{
            fontSize: "0.88rem", color: "rgba(26,58,107,0.55)",
            maxWidth: 320, lineHeight: 1.75,
            margin: 0, textAlign: "right",
          }}>
            900 वर्ग किमी में फैला धोलेरा, DMIC का प्रमुख नोड — देखें यह भविष्य की नगरी कैसे आकार ले रही है।
          </p>
        </div>

        {/* ── Video ── */}
        <div
          className="dv-animate dv-delay-3 dv-video-wrap"
          onClick={handlePlayPause}
          style={{
            borderRadius: 20,
            overflow: "hidden",
            background: "#d0e4f8",
            aspectRatio: "16/9",
            boxShadow: "0 24px 64px rgba(26,58,107,0.18), 0 0 0 1px rgba(26,58,107,0.08)",
            marginBottom: "3rem",
          }}
        >
          {/* Skeleton */}
          {!isVisible && <div className="dv-skeleton" style={{ position: "absolute", inset: 0 }} />}

          {/* Video element */}
          {isVisible && (
            <video
              ref={videoRef}
              src="https://dholera.gujarat.gov.in/dicdl_homepage_video/static/src/video/Dholera_AV_Mar_2025.mp4"
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onEnded={handleVideoEnd}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          )}

          {/* Tint overlay */}
          <div className={`dv-overlay${isPlaying ? " playing" : ""}`} />

          {/* Centre play button */}
          {!isPlaying && (
            <button className="dv-play-btn" aria-label="वीडियो चलाएं">
              <IconPlay />
            </button>
          )}

          {/* Bottom controls bar */}
          <div className="dv-controls" onClick={(e) => e.stopPropagation()}>
            <button className="dv-ctrl-btn" onClick={handlePlayPause} aria-label="play/pause">
              {isPlaying ? <IconPause size={18} /> : <IconPlay size={18} />}
            </button>

            <div className="dv-progress-track" onClick={handleSeek}>
              <div className="dv-progress-fill" style={{ width: `${progress}%` }} />
            </div>

            <button className="dv-mute-btn" onClick={handleMute} aria-label="mute toggle">
              {isMuted ? <IconMuted /> : <IconUnmuted />}
            </button>
          </div>

          {/* Corner badge */}
          <div style={{
            position: "absolute", top: 20, right: 20, zIndex: 6,
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(234,108,26,0.30)",
            borderRadius: 8, padding: "0.4rem 0.9rem",
            display: "flex", alignItems: "center", gap: "0.5rem",
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#ea6c1a", display: "block",
              boxShadow: "0 0 6px #ea6c1a",
            }} />
            <span style={{
              fontSize: "0.62rem", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#1a3a6b",
            }}>
              आधिकारिक फुटेज
            </span>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div
          className="dv-stats-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="dv-stat-card"
              style={{
                background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(26,58,107,0.10)",
                borderTop: "2px solid #ea6c1a",
                borderRadius: 14,
                padding: "1.6rem 1.4rem",
                boxShadow: "0 2px 12px rgba(26,58,107,0.08)",
              }}
            >
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                fontWeight: 700, color: "#1a3a6b",
                lineHeight: 1, marginBottom: "0.4rem",
              }}>
                {stat.num}
              </div>
              <div style={{
                fontSize: "0.72rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#ea6c1a", marginBottom: "0.2rem",
              }}>
                {stat.label}
              </div>
              <div style={{ fontSize: "0.68rem", color: "rgba(26,58,107,0.45)", lineHeight: 1.5 }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gold rule */}
      <GoldRule pos="bottom" />
    </section>
  );
}

function GoldRule({ pos }) {
  return (
    <div style={{
      position: "absolute",
      [pos]: 0, left: 0, right: 0,
      height: 3,
      background: "linear-gradient(90deg, transparent, #ea6c1a 30%, #f5a54a 60%, transparent)",
    }} />
  );
}