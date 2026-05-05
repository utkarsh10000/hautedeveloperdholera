import Navbar from "../component/Navbar";
import TickerTape from "../component/TickerTape";
import Footer from "../component/Footer";

export default function PaymentFailure() {
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
            background: 'rgba(239,68,68,0.1)',
            border: '2px solid rgba(239,68,68,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem', color: '#ef4444',
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '2.2rem', fontWeight: 600, color: '#1a3a6b',
            margin: '0 0 0.8rem',
          }}>Payment Failed</h1>
          <p style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.8,
            margin: '0 0 2rem',
          }}>
            Your payment was not completed. No amount has been deducted.
            Please try again or contact us for help.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/register" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: '#ea6c1a', color: '#fff',
              padding: '0.9rem 2rem', borderRadius: 8,
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontSize: '0.82rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              textDecoration: 'none',
            }}>Try Again</a>
            <a href="tel:+918383073291" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'transparent', color: '#1a3a6b',
              padding: '0.9rem 2rem', borderRadius: 8,
              border: '1.5px solid rgba(13,47,36,0.3)',
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontSize: '0.82rem', fontWeight: 600,
              textDecoration: 'none',
            }}>Call Support</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}