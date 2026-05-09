"use client";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'प्रोजेक्ट', href: '/#project' },
    { label: 'साइट प्लान', href: '/#siteplan' },
    { label: 'भुगतान योजना', href: '/#payment' },
    { label: 'सामान्य प्रश्न', href: '/#faqs' },
    { label: 'रिफंड नीति', href: '/refund-policy' },
  ];

  return (
    <>
      <style>{`
        .navbar-root {
          position: fixed;
          top: 40px;
          left: 0;
          right: 0;
          z-index: 999;
          backdrop-filter: blur(20px);
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.6rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
        }
        .mobile-menu {
          display: none;
          flex-direction: column;
          border-top: 1px solid rgba(255,255,255,0.08);
          transition: background 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .mobile-menu.open {
          display: flex;
        }
        .nav-link {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s;
          letter-spacing: 0.03em;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .navbar-inner { padding: 0 1rem; height: 60px; }
          .navbar-root { top: 40px; }
        }

        @media (max-width: 480px) {
          .navbar-root { top: 40px; }
        }
      `}</style>

      <nav
        className="navbar-root"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(26,58,107,0.92)',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <a href="/" style={{ display: 'flex', textDecoration: 'none' }}>
            <img
              src="/logo.png"
              alt="धोलेरा द स्मार्ट सिटी"
              style={{
                height: 50,
                width: 'auto',
                objectFit: 'contain',
                filter: scrolled
                  ? 'brightness(0) saturate(100%) invert(22%) sepia(40%) saturate(600%) hue-rotate(115deg) brightness(85%)'
                  : 'brightness(0) invert(1)',
                transition: 'filter 0.35s ease',
              }}
            />
          </a>

          {/* Desktop nav */}
          <ul className="desktop-nav">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  style={{
                    color: scrolled ? '#1c1c1c' : 'rgba(255,255,255,0.88)',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
             <a 
                href="/register"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '0.90rem', fontWeight: 700,
                  background: '#ea6c1a', color: '#ffffff',
                  padding: '0.5rem 1.3rem', borderRadius: 4,
                  letterSpacing: '0.06em', textDecoration: 'none',
                  transition: 'background 0.3s, transform 0.3s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f07d2a'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ea6c1a'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                अभी पंजीकरण करें
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="मेनू टॉगल करें"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 2,
                background: scrolled ? '#1c1c1c' : '#ffffff',
                borderRadius: 2, transition: 'all 0.3s',
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu — background now matches navbar scroll state */}
        <div
          className={`mobile-menu ${menuOpen ? 'open' : ''}`}
          style={{
            background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(26,58,107,0.95)',
            borderTop: scrolled
              ? '1px solid rgba(0,0,0,0.08)'
              : '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '0.9rem 1.5rem',
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.9rem', fontWeight: 500,
                color: scrolled ? '#1c1c1c' : 'rgba(255,255,255,0.85)',
                borderBottom: scrolled
                  ? '1px solid rgba(0,0,0,0.06)'
                  : '1px solid rgba(255,255,255,0.06)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ padding: '1rem 1.5rem' }}>
            <a href="/register" onClick={() => setMenuOpen(false)} style={{
              display: 'block', textAlign: 'center',
              background: '#ea6c1a', color: '#fff',
              padding: '0.8rem 1.5rem', borderRadius: 4,
              fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none',
            }}>अभी पंजीकरण करें</a>
          </div>
        </div>
      </nav>
    </>
  );
}