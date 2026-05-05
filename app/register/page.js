"use client";
import { useState } from 'react';
import Navbar from "../component/Navbar";
import TickerTape from "../component/TickerTape";
import Footer from "../component/Footer";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '', fatherHusbandName: '', dob: '', email: '', phone: '',
    address: '', state: '', city: '', pinCode: '',
    referenceName: '', aadhar: '', pan: '', quota: '', size: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [txnId, setTxnId] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [payLoading, setPayLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = '';
    if (name === 'phone') {
      if (!/^\d{10}$/.test(value)) error = 'फ़ोन नंबर ठीक 10 अंकों का होना चाहिए।';
    }
    if (name === 'aadhar') {
      if (value.replace(/\s/g, '').length !== 12) error = 'आधार नंबर ठीक 12 अंकों का होना चाहिए।';
    }
    if (name === 'pan') {
      if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) error = 'पैन का प्रारूप ABCDE1234F होना चाहिए।';
    }
    if (name === 'pinCode') {
      if (!/^\d{6}$/.test(value)) error = 'पिन कोड ठीक 6 अंकों का होना चाहिए।';
    }
    if (name === 'email' && value) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'कृपया एक वैध ईमेल पता दर्ज करें।';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      if (!/^\d*$/.test(value) || value.length > 10) return;
    }
    if (name === 'aadhar') {
      const digits = value.replace(/\s/g, '');
      if (!/^\d*$/.test(digits) || digits.length > 12) return;
      const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
      setForm({ ...form, aadhar: formatted });
      setErrors({ ...errors, aadhar: validate('aadhar', formatted) });
      return;
    }
    if (name === 'pan') {
      const upper = value.toUpperCase();
      if (upper.length > 10) return;
      if (!/^[A-Z0-9]*$/.test(upper)) return;
      setForm({ ...form, pan: upper });
      setErrors({ ...errors, pan: validate('pan', upper) });
      return;
    }
    if (name === 'pinCode') {
      if (!/^\d*$/.test(value) || value.length > 6) return;
    }

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      phone: validate('phone', form.phone),
      aadhar: validate('aadhar', form.aadhar),
      pan: validate('pan', form.pan),
      pinCode: validate('pinCode', form.pinCode),
      email: validate('email', form.email),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(err => err)) return;

    setShowQR(true);
  };

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

  const handlePaymentSubmit = async () => {
    if (!txnId.trim()) { alert('कृपया अपना लेन-देन आईडी दर्ज करें।'); return; }
    if (!screenshot) { alert('कृपया अपना भुगतान स्क्रीनशॉट अपलोड करें।'); return; }
    setPayLoading(true);
    try {
      const base64Screenshot = await toBase64(screenshot);
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));
      formData.append('transaction_id', txnId);
      if (screenshot) formData.append('screenshot', screenshot);

      const res = await fetch('https://formspree.io/f/xlgzjpvz', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });
      const data = await res.json();
      console.log('Formspree response:', data);
      if (!res.ok) throw new Error('Formspree error');
      setShowQR(false);
      setSubmitted(true);
    } catch {
      alert('कुछ गलत हो गया। कृपया पुनः प्रयास करें।');
    } finally {
      setPayLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .reg-hero {
          background: #1a3a6b;
          padding: 10rem 0 5rem;
          position: relative;
          overflow: hidden;
        }
        .reg-hero__pattern {
          position: absolute; inset: 0; opacity: 0.035;
          background-image: repeating-linear-gradient(45deg, #ea6c1a 0, #ea6c1a 1px, transparent 0, transparent 50%);
          background-size: 32px 32px; pointer-events: none;
        }
        .reg-hero__glow {
          position: absolute; top: -80px; right: -80px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(201,144,26,0.09) 0%, transparent 70%);
          pointer-events: none;
        }
        .reg-hero__inner {
          max-width: 800px; margin: 0 auto; padding: 0 2rem;
          position: relative; z-index: 1; text-align: center;
        }
        .reg-hero__label {
          display: inline-flex; align-items: center; gap: 0.6rem;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #ea6c1a; margin-bottom: 1rem;
        }
        .reg-hero__label::before {
          content: ''; display: block;
          width: 24px; height: 1.5px; background: #ea6c1a;
        }
        .reg-hero__label::after {
          content: ''; display: block;
          width: 24px; height: 1.5px; background: #ea6c1a;
        }
        .reg-hero__title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.4rem, 4vw, 3.8rem);
          font-weight: 600; color: #ffffff;
          line-height: 1.1; margin: 0 0 1.2rem;
        }
        .reg-hero__title em { font-style: italic; color: #f5a54a; }
        .reg-hero__divider {
          width: 56px; height: 3px;
          background: linear-gradient(90deg, #ea6c1a, #f5a54a);
          border-radius: 2px; margin: 0 auto 1.4rem;
        }
        .reg-hero__desc {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.95rem; color: rgba(255,255,255,0.55);
          line-height: 1.8; margin: 0;
        }

        /* Body */
        .reg-body {
          background: #faf8f4;
          padding: 5rem 0 6rem;
        }
        .reg-body__inner {
          max-width: 800px; margin: 0 auto; padding: 0 2rem;
        }

        /* Card */
        .reg-card {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 8px 40px rgba(26,74,58,0.1);
        }
        .reg-card__accent {
          height: 4px;
          background: linear-gradient(90deg, #ea6c1a, #f5a54a, #ea6c1a);
        }
        .reg-card__body { padding: 2.5rem; }

        /* Section heading */
        .reg-section-title {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #ea6c1a; margin: 0 0 1.2rem;
          display: flex; align-items: center; gap: 0.6rem;
        }
        .reg-section-title::before {
          content: ''; display: block;
          width: 20px; height: 1.5px; background: #ea6c1a;
        }

        /* Grid layouts */
        .reg-grid-2 {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem;
        }
        .reg-grid-3 {
          display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.2rem;
        }

        /* Form elements */
        .reg-label {
          display: block;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: #374151; margin-bottom: 0.4rem;
        }
        .reg-input, .reg-select {
          width: 100%; padding: 0.8rem 1rem;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.9rem; color: #1c1c1c;
          background: #faf8f4;
          border: 1.5px solid rgba(0,0,0,0.1);
          border-radius: 6px; outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
          box-sizing: border-box;
          appearance: none;
        }
        .reg-input:focus, .reg-select:focus {
          border-color: #ea6c1a;
          box-shadow: 0 0 0 3px rgba(201,144,26,0.12);
        }
        .reg-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
          cursor: pointer;
        }

        /* Divider */
        .reg-divider {
          height: 1px; background: rgba(0,0,0,0.06);
          margin: 2rem 0;
        }

        /* Submit */
        .reg-submit {
          width: 100%; padding: 1rem;
          background: #ea6c1a; color: #ffffff;
          border: none; border-radius: 4px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.88rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          cursor: pointer; transition: all 0.3s;
          display: flex; align-items: center;
          justify-content: center; gap: 0.6rem;
          margin-top: 0.5rem;
        }
        .reg-submit:hover:not(:disabled) {
          background: #f07d2a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(201,144,26,0.35);
        }
        .reg-submit:disabled { background: #a07514; cursor: not-allowed; }

        /* Notice */
        .reg-notice {
          margin-top: 2rem;
          background: #1a3a6b; border-radius: 12px;
          padding: 1.4rem 1.6rem;
          display: flex; align-items: center; gap: 1rem;
        }
        .reg-notice p {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.82rem; color: rgba(255,255,255,0.55);
          line-height: 1.65; margin: 0;
        }
        .reg-notice strong { color: #f5a54a; }

        /* Success */
        .reg-success {
          text-align: center; padding: 3rem 2rem;
        }
        .reg-success__icon {
          width: 64px; height: 64px;
          background: rgba(34,197,94,0.1);
          border: 2px solid rgba(34,197,94,0.3);
          border-radius: 50%; display: flex;
          align-items: center; justify-content: center;
          margin: 0 auto 1.5rem;
          color: #22c55e;
        }
        .reg-success h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 2rem; font-weight: 600;
          color: #1a4a3a; margin: 0 0 0.6rem;
        }
        .reg-success p {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.9rem; color: #6b7280;
          line-height: 1.75; margin: 0;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 640px) {
          .reg-grid-2 { grid-template-columns: 1fr !important; }
          .reg-grid-3 { grid-template-columns: 1fr !important; }
          .reg-card__body { padding: 1.5rem; }
        }
      `}</style>

      <TickerTape />
      <Navbar />

      {/* QR Payment Modal */}
      {showQR && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem',
        }}>
          <div style={{
            background: '#fff', borderRadius: 16, width: '100%', maxWidth: 440,
            overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
          }}>
            {/* Modal header */}
            <div style={{
              background: '#1a3a6b', padding: '1.2rem 1.6rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', color: '#ea6c1a', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>चरण 1</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#fff', fontSize: '1.4rem', margin: 0 }}>स्कैन करें और ₹11,500 भुगतान करें</h3>
              </div>
              <button onClick={() => setShowQR(false)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 8, width: 32, height: 32, cursor: 'pointer', color: '#fff', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            </div>

            <div style={{ padding: '1.6rem' }}>
              {/* QR Code */}
              <div style={{ textAlign: 'center', marginBottom: '1.4rem' }}>
                <div style={{
                  display: 'inline-block', padding: 12,
                  border: '2px solid rgba(201,144,26,0.3)', borderRadius: 12,
                  background: '#faf8f4',
                }}>
                  <img src="/qrcode.png" alt="भुगतान QR कोड" style={{ width: 180, height: 180, display: 'block', objectFit: 'contain' }} />
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: '#6b7280', marginTop: '0.6rem' }}>
                  किसी भी UPI ऐप से स्कैन करें — GPay, PhonePe, Paytm
                </p>
              </div>

              <div style={{ height: 1, background: 'rgba(0,0,0,0.07)', margin: '1.2rem 0' }} />

              {/* Step 2 label */}
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', color: '#ea6c1a', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 1rem' }}>चरण 2 — भुगतान की पुष्टि करें</p>

              {/* Transaction ID */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#374151', marginBottom: '0.4rem' }}>
                  लेन-देन आईडी *
                </label>
                <input
                  value={txnId}
                  onChange={e => setTxnId(e.target.value)}
                  placeholder="UPI लेन-देन आईडी दर्ज करें"
                  style={{
                    width: '100%', padding: '0.8rem 1rem', boxSizing: 'border-box',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#1c1c1c',
                    background: '#faf8f4', border: '1.5px solid rgba(0,0,0,0.1)',
                    borderRadius: 6, outline: 'none',
                  }}
                />
              </div>

              {/* Screenshot upload */}
              <div style={{ marginBottom: '1.4rem' }}>
                <label style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#374151', marginBottom: '0.4rem' }}>
                  भुगतान स्क्रीनशॉट *
                </label>
                <label style={{
                  display: 'flex', alignItems: 'center', gap: '0.8rem',
                  padding: '0.8rem 1rem', borderRadius: 6, cursor: 'pointer',
                  border: '1.5px dashed rgba(201,144,26,0.4)', background: '#faf8f4',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: screenshot ? '#1a4a3a' : '#9ca3af' }}>
                    {screenshot ? screenshot.name : 'स्क्रीनशॉट अपलोड करें (JPG, PNG)'}
                  </span>
                  <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => setScreenshot(e.target.files[0])} />
                </label>
              </div>

              {/* Submit */}
              <button
                onClick={handlePaymentSubmit}
                disabled={payLoading}
                style={{
                  width: '100%', padding: '0.95rem',
                  background: payLoading ? '#a07514' : '#ea6c1a', color: '#fff',
                  border: 'none', borderRadius: 4, cursor: payLoading ? 'not-allowed' : 'pointer',
                  fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                }}
              >
                {payLoading ? (
                  <>
                    <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
                    जमा हो रहा है...
                  </>
                ) : 'पुष्टि करें और पंजीकरण जमा करें'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <div className="reg-hero">
        <div className="reg-hero__pattern" />
        <div className="reg-hero__glow" />
        <div className="reg-hero__inner">
          <div className="reg-hero__label">धोलेरा आवास योजना</div>
          <h1 className="reg-hero__title">
            प्लॉट <em>पंजीकरण</em>
          </h1>
          <div className="reg-hero__divider" />
          <p className="reg-hero__desc">
            नीचे अपना पंजीकरण पूरा करें। आवेदन शुल्क ₹11,500 है — आवंटन न होने पर पूरी तरह वापसी योग्य।
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="reg-body">
        <div className="reg-body__inner">
          <div className="reg-card">
            <div className="reg-card__accent" />
            <div className="reg-card__body">
              {submitted ? (
                <div className="reg-success">
                  <div className="reg-success__icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3>पंजीकरण जमा हो गया!</h3>
                  <p>धन्यवाद। हमारी टीम आगे के चरणों में आपका मार्गदर्शन करने के लिए 24 घंटे के भीतर आपसे संपर्क करेगी।</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>

                  {/* Personal Details */}
                  <div className="reg-section-title">व्यक्तिगत विवरण</div>

                  <div className="reg-grid-2">
                    <div>
                      <label className="reg-label">आवेदक का नाम *</label>
                      <input className="reg-input" name="name" required value={form.name} onChange={handleChange} placeholder="पूरा कानूनी नाम" />
                    </div>
                    <div>
                      <label className="reg-label">पिता / पति का नाम *</label>
                      <input className="reg-input" name="fatherHusbandName" required value={form.fatherHusbandName} onChange={handleChange} placeholder="पिता या पति का नाम" />
                    </div>
                  </div>

                  <div className="reg-grid-2">
                    <div>
                      <label className="reg-label">जन्म तिथि *</label>
                      <input className="reg-input" name="dob" required type="date" value={form.dob} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="reg-label">फ़ोन नंबर *</label>
                      <input className="reg-input" name="phone" required type="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                      {errors.phone && <p style={{ color: '#dc2626', fontSize: '0.72rem', marginTop: '0.3rem', fontFamily: "'DM Sans', sans-serif" }}>{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="reg-label">ईमेल पता</label>
                    <input className="reg-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
                    {errors.email && <p style={{ color: '#dc2626', fontSize: '0.72rem', marginTop: '0.3rem', fontFamily: "'DM Sans', sans-serif" }}>{errors.email}</p>}
                  </div>

                  <div className="reg-divider" />

                  {/* Address */}
                  <div className="reg-section-title">पता विवरण</div>

                  <div>
                    <label className="reg-label">पता *</label>
                    <input className="reg-input" name="address" required value={form.address} onChange={handleChange} placeholder="मकान नं., गली, क्षेत्र" />
                  </div>

                  <div className="reg-grid-3">
                    <div>
                      <label className="reg-label">राज्य *</label>
                      <input className="reg-input" name="state" required value={form.state} onChange={handleChange} placeholder="राज्य" />
                    </div>
                    <div>
                      <label className="reg-label">शहर *</label>
                      <input className="reg-input" name="city" required value={form.city} onChange={handleChange} placeholder="शहर" />
                    </div>
                    <div>
                      <label className="reg-label">पिन कोड *</label>
                      <input className="reg-input" name="pinCode" required value={form.pinCode} onChange={handleChange} placeholder="000000" maxLength={6} />
                      {errors.pinCode && <p style={{ color: '#dc2626', fontSize: '0.72rem', marginTop: '0.3rem', fontFamily: "'DM Sans', sans-serif" }}>{errors.pinCode}</p>}
                    </div>
                  </div>

                  <div className="reg-divider" />

                  {/* Identity */}
                  <div className="reg-section-title">पहचान और संदर्भ</div>

                  <div className="reg-grid-2">
                    <div>
                      <label className="reg-label">आधार कार्ड नंबर *</label>
                      <input className="reg-input" name="aadhar" required value={form.aadhar} onChange={handleChange} placeholder="XXXX XXXX XXXX" maxLength={14} />
                      {errors.aadhar && <p style={{ color: '#dc2626', fontSize: '0.72rem', marginTop: '0.3rem', fontFamily: "'DM Sans', sans-serif" }}>{errors.aadhar}</p>}
                    </div>
                    <div>
                      <label className="reg-label">पैन कार्ड नंबर *</label>
                      <input className="reg-input" name="pan" required value={form.pan} onChange={handleChange} placeholder="ABCDE1234F" maxLength={10} style={{ textTransform: 'uppercase' }} />
                      {errors.pan && <p style={{ color: '#dc2626', fontSize: '0.72rem', marginTop: '0.3rem', fontFamily: "'DM Sans', sans-serif" }}>{errors.pan}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="reg-label">संदर्भ का नाम</label>
                    <input className="reg-input" name="referenceName" value={form.referenceName} onChange={handleChange} placeholder="आपको किसने रेफर किया? (वैकल्पिक)" />
                  </div>

                  <div className="reg-divider" />

                  {/* Plot Preferences */}
                  <div className="reg-section-title">प्लॉट प्राथमिकताएं</div>

                  <div className="reg-grid-2">
                    <div>
                      <label className="reg-label">कोटा *</label>
                      <select className="reg-select" name="quota" required value={form.quota} onChange={handleChange}>
                        <option value="">कोटा चुनें</option>
                        <option value="Female">महिला</option>
                        <option value="Govt Employee">सरकारी कर्मचारी</option>
                        <option value="General">सामान्य</option>
                      </select>
                    </div>
                    <div>
                      <label className="reg-label">प्लॉट का आकार *</label>
                      <select className="reg-select" name="size" required value={form.size} onChange={handleChange}>
                        <option value="">आकार चुनें</option>
                        <option value="121 to 152 Sq. Yards">121 से 152 वर्ग गज</option>
                        <option value="152 to 201 Sq. Yards">152 से 201 वर्ग गज</option>
                        <option value="201+ Sq. Yards">201+ वर्ग गज</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={loading} className="reg-submit">
                    {loading ? (
                      <>
                        <span style={{
                          width: 16, height: 16,
                          border: '2px solid rgba(255,255,255,0.3)',
                          borderTopColor: '#fff', borderRadius: '50%',
                          display: 'inline-block',
                          animation: 'spin 0.7s linear infinite',
                        }} />
                        जमा हो रहा है...
                      </>
                    ) : (
                      <>
                        भुगतान करें — ₹11,500
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
                    जमा करने पर, आप हमारी टीम द्वारा संपर्क किए जाने के लिए सहमत होते हैं। हम आपकी गोपनीयता का सम्मान करते हैं।
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Notice */}
          <div className="reg-notice">
            <div style={{
              width: 36, height: 36, flexShrink: 0,
              background: 'rgba(201,144,26,0.15)', borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea6c1a',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <p>
              <strong>आवेदन शुल्क ₹11,500</strong> — आवंटन न होने पर पूरी तरह वापसी योग्य। फॉर्म जमा करने के बाद भुगतान विवरण साझा किया जाएगा। प्रश्नों के लिए कॉल करें <strong>+91 83830 73291</strong>।
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}