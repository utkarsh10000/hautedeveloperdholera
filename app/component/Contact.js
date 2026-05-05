"use client";
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '7bbe892f-ac11-4f86-8dd6-2ca38a95f6e6',
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
          subject: 'New Plot Enquiry — Dholera Awas yojna',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please try again.');
    }
    setLoading(false);
  };

  const details = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.59 9.09 19.79 19.79 0 01.44 4.09 2 2 0 012.52 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l.72-.72a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      ),
      label: 'Call Us',
      value: '+91 83830 73291',
      href: 'tel:+918383073291',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email Us',
      value: 'info@dholeraawasyojna.com',
      href: 'mailto:info@dholeraawasyojna.com',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Office',
      value: 'Ground Floor, H-214, Sector 63, Noida, UP 201301',
      href: 'https://maps.google.com/?q=Sector+63+Noida',
    },
  ];

  return (
    <section style={{ background: '#1a4a3a', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>

      {/* Pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.035,
        backgroundImage: 'repeating-linear-gradient(45deg, #ea6c1a 0, #ea6c1a 1px, transparent 0, transparent 50%)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: '#ea6c1a', marginBottom: '0.5rem',
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>Get In Touch</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, color: '#ffffff',
            margin: '0 0 1rem',
          }}>
            Reserve Your Plot Today
          </h2>
          <div style={{
            width: 56, height: 3,
            background: 'linear-gradient(90deg, #ea6c1a, #f5a54a)',
            borderRadius: 2, margin: '0 auto 1rem',
          }} />
          <p style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.75, maxWidth: 520, margin: '0 auto',
          }}>
            Only <strong style={{ color: '#f5a54a' }}>5 plots</strong> remaining under Management Quota.
            Fill in your details and our team will reach out within 24 hours.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="contact-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr',
          gap: '3.5rem', alignItems: 'start',
        }}>

          {/* Left: info */}
          <div>
            {/* Application fee badge */}
            <div style={{
              background: 'rgba(201,144,26,0.1)',
              border: '1px solid rgba(201,144,26,0.3)',
              borderRadius: 12, padding: '1.4rem 1.6rem',
              marginBottom: '2rem',
            }}>
              <div style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: '#ea6c1a', marginBottom: '0.5rem',
              }}>Application Fee</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '2rem', fontWeight: 700, color: '#f5a54a', lineHeight: 1,
                marginBottom: '0.4rem',
              }}>₹ 11,500 /-</div>
              <div style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)',
              }}>
                Fully <span style={{ color: '#22c55e', fontWeight: 600 }}>refundable</span> if not allotted. No risk, no lock-in.
              </div>
            </div>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {details.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-detail-card"
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '1rem',
                    padding: '1.1rem 1.3rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 10, textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  <div style={{
                    width: 38, height: 38, flexShrink: 0,
                    background: 'rgba(201,144,26,0.12)',
                    border: '1px solid rgba(201,144,26,0.2)',
                    borderRadius: 8, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', color: '#ea6c1a',
                  }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: '#ea6c1a', marginBottom: '0.2rem',
                    }}>{label}</div>
                    <div style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55,
                      wordBreak: 'break-word',
                    }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust indicators */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {['Freehold Plots', 'No Hidden Charges', 'Govt. Backed'].map(tag => (
                <span key={tag} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 999, padding: '0.3rem 0.8rem',
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '0.72rem', fontWeight: 600,
                  color: 'rgba(255,255,255,0.55)',
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#ea6c1a', flexShrink: 0 }} />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div style={{
            background: '#ffffff',
            borderRadius: 16, overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
          }}>
            <div style={{
              height: 4,
              background: 'linear-gradient(90deg, #ea6c1a, #f5a54a, #ea6c1a)',
            }} />

            <div style={{ padding: '2.5rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.8rem', fontWeight: 600, color: '#1a4a3a', marginBottom: '0.5rem',
                  }}>Thank You!</h3>
                  <p style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7,
                  }}>
                    Your enquiry has been received. Our team will contact you within 24 hours to discuss your plot options.
                  </p>
                </div>
              ) : (
                <>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.7rem', fontWeight: 600, color: '#1c1c1c', marginBottom: '0.3rem',
                  }}>Register Your Interest</h3>
                  <p style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: '0.84rem', color: '#6b7280', marginBottom: '1.8rem',
                  }}>Fill in your details and we'll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className="form-input" />
                    </div>

                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label className="form-label">Phone Number *</label>
                        <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" type="tel" className="form-input" />
                      </div>
                      <div>
                        <label className="form-label">Email Address</label>
                        <input name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" type="email" className="form-input" />
                      </div>
                    </div>

                    <div>
                      <label className="form-label">Message (Optional)</label>
                      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Ask about plot sizes, payment plans, or anything else..." rows={3} className="form-input" style={{ resize: 'vertical' }} />
                    </div>

                    <button type="submit" disabled={loading} className="form-submit-btn" style={{
                      width: '100%', padding: '0.95rem',
                      background: loading ? '#a07514' : '#ea6c1a',
                      color: '#ffffff', border: 'none',
                      borderRadius: 4, cursor: loading ? 'not-allowed' : 'pointer',
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '0.88rem', fontWeight: 700,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      transition: 'all 0.3s', marginTop: '0.3rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                    }}>
                      {loading ? 'Submitting...' : (
                        <>
                          Apply Now — ₹11,500 Refundable
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </>
                      )}
                    </button>

                    <p style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '0.72rem', color: '#9ca3af',
                      textAlign: 'center', lineHeight: 1.6, margin: 0,
                    }}>
                      By submitting, you agree to be contacted by our team. We respect your privacy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-detail-card:hover {
          background: rgba(255,255,255,0.09) !important;
          border-color: rgba(201,144,26,0.35) !important;
          transform: translateX(4px);
        }
        .form-label {
          display: block;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: #1c1c1c; margin-bottom: 0.4rem;
        }
        .form-input {
          width: 100%; padding: 0.8rem 1rem;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.9rem; color: #1c1c1c;
          background: #faf8f4;
          border: 1.5px solid rgba(0,0,0,0.1);
          border-radius: 6px; outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
          box-sizing: border-box;
        }
        .form-input:focus {
          border-color: #ea6c1a;
          box-shadow: 0 0 0 3px rgba(201,144,26,0.12);
        }
        .form-submit-btn:hover:not(:disabled) {
          background: #f07d2a !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(201,144,26,0.35);
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .form-row { grid-template-columns: 1fr !important; }
          .contact-grid > div:last-child { margin-top: 0; }
        }
        @media (max-width: 480px) {
          .contact-grid > div:last-child > div { padding: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}