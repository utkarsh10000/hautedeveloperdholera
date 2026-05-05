import Navbar from "../component/Navbar";
import TickerTape from "../component/TickerTape";
import Footer from "../component/Footer";

export default function PaymentSuccess() {
  return (
    <>
      <TickerTape />
      <Navbar />
      <div style={{
        minHeight: '100vh', background: '#1a3a6b',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '8rem 2rem',
      }}>
        <div style={{
          background: '#ffffff', borderRadius: 20,
          padding: '3.5rem', maxWidth: 520, width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: 'rgba(34,197,94,0.1)',
            border: '2px solid rgba(34,197,94,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem', color: '#22c55e',
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '2.2rem', fontWeight: 600, color: '#1a3a6b',
            margin: '0 0 0.8rem',
          }}>Payment Successful!</h1>
          <p style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.8,
            margin: '0 0 0.5rem',
          }}>
            Your registration for Dholera Awas yojna is confirmed.
          </p>
          <p style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.8,
            margin: '0 0 2rem',
          }}>
            Our team will contact you within 24 hours on your registered number.
          </p>
          <div style={{
            background: '#1a3a6b', borderRadius: 10,
            padding: '1rem 1.5rem', marginBottom: '1.5rem',
          }}>
            <p style={{
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)',
              margin: '0 0 4px', letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>Amount Paid</p>
            <p style={{
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontSize: '1.8rem', fontWeight: 700, color: '#f5a54a', margin: 0,
            }}>₹11,500</p>
            <p style={{
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontSize: '0.72rem', color: '#ea6c1a', margin: '4px 0 0', fontWeight: 600,
            }}>✓ Fully Refundable if Not Allotted</p>
          </div>
          <a href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: '#ea6c1a', color: '#fff',
            padding: '0.9rem 2rem', borderRadius: 8,
            fontFamily: "'Poppins', system-ui, sans-serif",
            fontSize: '0.82rem', fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            textDecoration: 'none',
          }}>Back to Home</a>
        </div>
      </div>
      <Footer />
    </>
  );
}