"use client";
import Link from "next/link";

const quickLinks = [
  { href: "#home", label: "होम" },
  { href: "#project", label: "प्रोजेक्ट" },
  { href: "#siteplan", label: "साइट प्लान" },
  { href: "#payment", label: "भुगतान योजना" },
  { href: "#faqs", label: "सामान्य प्रश्न" },
  { href: "/refund-policy", label: "रिफंड नीति" },
];

const highlights = [
  { href: "#project", label: "धोलेरा क्यों?" },
  { href: "#siteplan", label: "मास्टर साइट प्लान" },
  { href: "#payment", label: "आसान भुगतान योजनाएं" },
  { href: "#project", label: "सरकार समर्थित प्रोजेक्ट" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .hd-footer { font-family: 'Poppins', system-ui, sans-serif; }

        /* Pre-footer */
        .hd-prefooter {
          background: linear-gradient(135deg, #b8780e 0%, #ea6c1a 100%);
          border-top: none;
          position: relative; overflow: hidden;
        }
        .hd-prefooter__dots {
          position: absolute; inset: 0; opacity: 0.06; pointer-events: none;
          background-image: radial-gradient(circle, #0a1628 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .hd-prefooter__inner {
          position: relative; max-width: 1200px; margin: 0 auto;
          padding: 3.5rem 1.5rem;
          display: flex; align-items: center; justify-content: space-between;
          gap: 2rem; flex-wrap: wrap;
        }
        .hd-prefooter__eyebrow {
          font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
          color: #1a3a6b; margin: 0 0 0.5rem; font-weight: 600;
        }
        .hd-prefooter__heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 600;
          color: #1a3a6b; margin: 0; line-height: 1.2;
        }
        .hd-prefooter__right {
          display: flex; align-items: center; gap: 2rem; flex-shrink: 0;
        }
        .hd-prefooter__fee {
          background: rgba(201,144,26,0.08);
          border: 1px solid rgba(201,144,26,0.25);
          borderRadius: 10px; padding: 0.8rem 1.2rem;
        }
        .hd-prefooter__fee-label {
          font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
          color: rgba(13,47,36,0.7); margin: 0 0 2px; font-weight: 500;
        }
        .hd-prefooter__fee-amount {
          font-family: 'Poppins', system-ui, sans-serif;
          font-size: 1.6rem; font-weight: 700; color: #1a3a6b; line-height: 1; margin: 0;
        }
        .hd-prefooter__fee-sub { font-size: 10px; color: #1a3a6b; margin: 3px 0 0; font-weight: 500; }
        .hd-prefooter__cta {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: #1a3a6b; color: #f5a54a;
          text-decoration: none; padding: 1rem 2rem; border-radius: 8px;
          font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; transition: background 0.2s, transform 0.2s;
          flex-shrink: 0; box-shadow: 0 8px 24px rgba(201,144,26,0.3);
        }
        .hd-prefooter__cta:hover { background: #f07d2a; transform: translateY(-2px); }

        /* Main footer */
        .hd-main-footer { background: #0a1628; }
        .hd-main-footer__topline {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(201,144,26,0.6) 30%, rgba(245,212,131,0.5) 60%, transparent 100%);
        }
        .hd-main-footer__inner {
          max-width: 1200px; margin: 0 auto; padding: 4rem 1.5rem 2rem;
        }

        /* Grid */
        .hd-footer__grid {
          display: grid; grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap: 3rem; padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        @media (max-width: 1024px) {
          .hd-footer__grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .hd-prefooter__inner { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 560px) {
          .hd-footer__grid { grid-template-columns: 1fr; }
          .hd-prefooter__right { flex-direction: column; align-items: flex-start; gap: 1rem; }
        }

        /* Brand */
        .hd-logo__name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 2.4rem; font-weight: 600; color: #fff;
          letter-spacing: 0.03em; line-height: 1;
          text-decoration: none; display: block;
        }
        .hd-logo__sub {
          font-size: 9px; letter-spacing: 0.24em; text-transform: uppercase;
          color: #ea6c1a; margin-top: 4px; display: block; margin-bottom: 1.25rem;
          font-weight: 600;
        }
        .hd-logo__rule {
          display: flex; align-items: center; gap: 10px; margin-bottom: 1.25rem;
        }
        .hd-logo__rule-line { width: 24px; height: 1px; background: rgba(201,144,26,0.5); }
        .hd-logo__rule-diamond {
          width: 6px; height: 6px; background: #ea6c1a;
          transform: rotate(45deg); flex-shrink: 0;
        }
        .hd-logo__rule-line2 { flex: 1; height: 1px; background: rgba(201,144,26,0.2); }
        .hd-brand__desc {
          font-size: 0.82rem; color: rgba(255,255,255,0.60);
          line-height: 1.9; margin: 0 0 1.5rem;
        }

        /* Social */
        .hd-social { display: flex; gap: 0.5rem; }
        .hd-social__btn {
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.06);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.55); text-decoration: none;
          transition: background 0.25s, color 0.25s, transform 0.25s;
          border: 1px solid rgba(255,255,255,0.10);
        }
        .hd-social__btn:hover {
          background: #ea6c1a; color: #fff;
          border-color: #ea6c1a; transform: translateY(-2px);
        }

        /* Col headings */
        .hd-col__heading { display: flex; align-items: center; gap: 0.6rem; margin: 0 0 1.5rem; }
        .hd-col__heading-dash { width: 20px; height: 2px; background: #ea6c1a; flex-shrink: 0; border-radius: 2px; }
        .hd-col__heading-text {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: #ea6c1a;
        }

        /* Nav links */
        .hd-links { list-style: none; display: flex; flex-direction: column; gap: 0.7rem; padding: 0; margin: 0; }
        .hd-links a {
          font-size: 0.85rem; color: rgba(255,255,255,0.65);
          text-decoration: none; font-weight: 400;
          transition: color 0.2s, padding-left 0.2s;
          display: inline-block;
        }
        .hd-links a:hover { color: #f5a54a; padding-left: 6px; }

        /* DMIC badge */
        .hd-dmic-badge {
          margin-top: 1.5rem; display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(201,144,26,0.10); border: 1px solid rgba(201,144,26,0.25);
          border-radius: 6px; padding: 7px 14px;
        }
        .hd-dmic-badge__dot { width: 7px; height: 7px; border-radius: 50%; background: #ea6c1a; flex-shrink: 0; }
        .hd-dmic-badge__text { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em; color: #f5a54a; }

        /* Contact */
        .hd-contact-list { list-style: none; display: flex; flex-direction: column; gap: 1.1rem; padding: 0; margin: 0; }
        .hd-contact-item { display: flex; align-items: flex-start; gap: 0.75rem; }
        .hd-contact-icon {
          width: 28px; height: 28px;
          background: rgba(201,144,26,0.10); border: 1px solid rgba(201,144,26,0.20);
          border-radius: 7px; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }
        .hd-contact-text {
          font-size: 0.82rem; color: rgba(255,255,255,0.65);
          line-height: 1.65; text-decoration: none;
          transition: color 0.2s; display: block; word-break: break-word;
          font-weight: 400;
        }
        a.hd-contact-text:hover { color: #f5a54a; }

        /* Bottom */
        .hd-footer__bottom {
          padding-top: 1.5rem;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 0.5rem;
        }
        .hd-footer__bottom-copy { font-size: 0.75rem; color: rgba(255,255,255,0.40); margin: 0; }
        .hd-footer__bottom-links { display: flex; align-items: center; gap: 0.25rem; }
        .hd-footer__bottom-link {
          font-size: 0.75rem; color: rgba(255,255,255,0.40);
          text-decoration: none; transition: color 0.2s;
        }
        .hd-footer__bottom-link:hover { color: #ea6c1a; }
        .hd-footer__bottom-sep { font-size: 10px; color: rgba(255,255,255,0.15); padding: 0 4px; }

        /* Disclaimer */
        .hd-disclaimer {
          margin-top: 1.2rem; padding-top: 1.2rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          font-size: 0.7rem; color: rgba(255,255,255,0.28); line-height: 1.8;
        }

        @media (max-width: 560px) {
          .hd-footer__bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      {/* Pre-footer CTA band
      <div className="hd-prefooter">
        <div className="hd-prefooter__dots" />
        <div className="hd-prefooter__inner">
          <div>
            <p className="hd-prefooter__eyebrow">⚡ सीमित उपलब्धता</p>
            <p className="hd-prefooter__heading">इस चरण के बंद होने से पहले<br />अपना प्लॉट बुक करें।</p>
          </div>
          <div className="hd-prefooter__right">
            <div style={{
              background: 'rgba(13,47,36,0.15)',
              border: '1px solid rgba(13,47,36,0.3)',
              borderRadius: 10, padding: '0.9rem 1.4rem',
            }}>
              <p className="hd-prefooter__fee-label">आवेदन शुल्क</p>
              <p className="hd-prefooter__fee-amount">₹11,500</p>
              <p className="hd-prefooter__fee-sub">✓ पूर्णतः वापसी योग्य</p>
            </div>
            <a href="/register" className="hd-prefooter__cta" style={{ background: '#1a3a6b', color: '#f5a54a', border: '1px solid rgba(201,144,26,0.4)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }} onMouseEnter={e => e.currentTarget.style.background='#1a4a3a'} onMouseLeave={e => e.currentTarget.style.background='#1a3a6b'}>
              अभी आवेदन करें
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div> */}

      {/* Main footer */}
      <footer className="hd-main-footer hd-footer" aria-label="साइट फुटर">
        <div className="hd-main-footer__topline" />
        <div className="hd-main-footer__inner">
          <div className="hd-footer__grid">

            {/* Brand */}
            <div>
              <a href="#home" style={{ display: 'flex', textDecoration: 'none', marginBottom: '0.3rem' }}>
                <img
                  src="/logo.png"
                  alt="धोलेरा द स्मार्ट सिटी"
                  style={{
                    height: 55,
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                  }}
                />
              </a>
              <div className="hd-logo__rule">
                <div className="hd-logo__rule-line" />
                <div className="hd-logo__rule-diamond" />
                <div className="hd-logo__rule-line2" />
              </div>
              <p className="hd-brand__desc">
                भारत की पहली ग्रीनफील्ड स्मार्ट सिटी। धोलेरा SIR में आवासीय प्लॉट में निवेश करें —
                भारत के सबसे महत्वाकांक्षी औद्योगिक कॉरिडोर के तहत शहरी जीवन का भविष्य।
              </p>
              <div className="hd-social">
                <a href="https://www.facebook.com/profile.php?id=61584529430117#" target="_blank" rel="noopener noreferrer" className="hd-social__btn" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/haute_developers/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="hd-social__btn" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hd-social__btn" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/haute-developers/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="hd-social__btn" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="hd-col__heading">
                <div className="hd-col__heading-dash" />
                <span className="hd-col__heading-text">त्वरित लिंक</span>
              </div>
              <ul className="hd-links">
                {quickLinks.map(({ href, label }) => (
                  <li key={href + label}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div>
              <div className="hd-col__heading">
                <div className="hd-col__heading-dash" />
                <span className="hd-col__heading-text">मुख्य विशेषताएं</span>
              </div>
              <ul className="hd-links">
                {highlights.map(({ href, label }) => (
                  <li key={label}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="hd-col__heading">
                <div className="hd-col__heading-dash" />
                <span className="hd-col__heading-text">संपर्क करें</span>
              </div>
              <ul className="hd-contact-list">
                <li className="hd-contact-item">
                  <div className="hd-contact-icon">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="rgba(201,144,26,0.9)" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="hd-contact-text">
                    भूतल, H-214, सेक्टर 63,<br />नोएडा, उत्तर प्रदेश 201301
                  </span>
                </li>
                <li className="hd-contact-item">
                  <div className="hd-contact-icon">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="rgba(201,144,26,0.9)" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 5.55 5.55l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z" />
                    </svg>
                  </div>
                  <a href="tel:+918383073291" className="hd-contact-text">+91 83830 73291</a>
                </li>
                <li className="hd-contact-item">
                  <div className="hd-contact-icon">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="rgba(201,144,26,0.9)" strokeWidth="2" strokeLinecap="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <a href="mailto:info@dholeraawasyojna.com" className="hd-contact-text">
                    info@dholeraawasyojna.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="hd-footer__bottom">
            <p className="hd-footer__bottom-copy">
              © {new Date().getFullYear()} Haute Developerss. सर्वाधिकार सुरक्षित।
            </p>
            <div className="hd-footer__bottom-links">
              <a href="/refund-policy" className="hd-footer__bottom-link">रिफंड नीति</a>
              <span className="hd-footer__bottom-sep">·</span>
              <a href="/privacy-policy" className="hd-footer__bottom-link">गोपनीयता नीति</a>
              <span className="hd-footer__bottom-sep">·</span>
              <a href="/terms-of-use" className="hd-footer__bottom-link">उपयोग की शर्तें</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}