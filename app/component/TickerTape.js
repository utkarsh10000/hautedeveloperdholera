"use client";

export default function TickerTape() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1001,
      background: '#ea6c1a',
      padding: '0.4rem 0',
      overflow: 'hidden',
      height: 40,
      display: 'flex',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'ticker-scroll 22s linear infinite',
      }}>
        {[...Array(2)].map((_, ri) => (
          <div key={ri} style={{ display: 'flex' }}>
            {[
              'महिलाओं के लिए 33% आरक्षित',
              '◆',
              'सरकारी कर्मचारी कोटा',
              '◆',
              'फ्रीहोल्ड प्लॉट',
              '◆',
              'धोलेरा एसआईआर',
              '◆',
              'आवेदन शुल्क ₹11,500 वापसी योग्य',
              '◆',
              'सीमित उपलब्धता',
              '◆',
            ].map((t, i) => (
              <span key={i} style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                color: '#ffffff',
                padding: '0 1.4rem',
                whiteSpace: 'nowrap',
              }}>{t}</span>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}