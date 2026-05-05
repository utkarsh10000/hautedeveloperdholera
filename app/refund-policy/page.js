"use client";
import Navbar from "../component/Navbar";
import TickerTape from "../component/TickerTape";
import Footer from "../component/Footer";

export default function RefundPolicyPage() {
  return (
    <>
      <style>{`
        .rp-hero {
          background: #1a3a6b;
          padding: 10rem 0 5rem;
          position: relative;
          overflow: hidden;
        }
        .rp-hero__pattern {
          position: absolute; inset: 0; opacity: 0.035;
          background-image: repeating-linear-gradient(45deg, #ea6c1a 0, #ea6c1a 1px, transparent 0, transparent 50%);
          background-size: 32px 32px; pointer-events: none;
        }
        .rp-hero__glow {
          position: absolute; top: -80px; right: -80px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(201,144,26,0.09) 0%, transparent 70%);
          pointer-events: none;
        }
        .rp-hero__inner {
          max-width: 860px; margin: 0 auto; padding: 0 2rem;
          position: relative; z-index: 1; text-align: center;
        }
        .rp-hero__label {
          display: inline-flex; align-items: center; gap: 0.6rem;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #ea6c1a; margin-bottom: 1rem;
        }
        .rp-hero__label::before, .rp-hero__label::after {
          content: ''; display: block; width: 24px; height: 1.5px; background: #ea6c1a;
        }
        .rp-hero__title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.4rem, 4vw, 3.8rem);
          font-weight: 600; color: #ffffff; line-height: 1.1; margin: 0 0 1.2rem;
        }
        .rp-hero__title em { font-style: italic; color: #f5a54a; }
        .rp-hero__divider {
          width: 56px; height: 3px;
          background: linear-gradient(90deg, #ea6c1a, #f5a54a);
          border-radius: 2px; margin: 0 auto 1.4rem;
        }
        .rp-hero__desc {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.88rem; color: rgba(255,255,255,0.40); line-height: 1.8; margin: 0;
        }
        .rp-body { background: #faf8f4; padding: 5rem 0 6rem; }
        .rp-body__inner { max-width: 860px; margin: 0 auto; padding: 0 2rem; }
        .rp-notice {
          background: #ffffff;
          border: 1px solid rgba(201,144,26,0.2);
          border-left: 4px solid #ea6c1a;
          border-radius: 10px; padding: 1.2rem 1.6rem;
          margin-bottom: 3rem;
          display: flex; align-items: flex-start; gap: 1rem;
        }
        .rp-notice p {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.82rem; color: #6b7280; line-height: 1.7; margin: 0;
        }
        .rp-notice strong { color: #ea6c1a; }
        .rp-card {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 14px; overflow: hidden;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          margin-bottom: 1.4rem;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .rp-card:hover {
          border-color: rgba(201,144,26,0.25);
          box-shadow: 0 4px 20px rgba(201,144,26,0.07);
        }
        .rp-card__header {
          background: #1a3a6b; padding: 1rem 1.8rem;
          display: flex; align-items: center; gap: 0.8rem;
        }
        .rp-card__header-title {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.68rem; font-weight: 800;
          letter-spacing: 0.14em; text-transform: uppercase; color: #f5a54a;
        }
        .rp-card__body { padding: 1.8rem 2rem; }
        .rp-card__body p {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.88rem; color: rgba(0,0,0,0.55); line-height: 1.85; margin: 0 0 1rem;
        }
        .rp-card__body p:last-child { margin-bottom: 0; }
        .rp-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.8rem; }
        .rp-list li {
          display: block;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.88rem; color: rgba(0,0,0,0.55); line-height: 1.75;
          padding-left: 1.4rem;
          position: relative;
        }
        .rp-list li::before {
          content: ''; display: block; position: absolute;
          left: 0; top: 0.65rem;
          width: 6px; height: 6px; border-radius: 50%;
          background: #ea6c1a;
        }
        .rp-amount-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1rem; margin-top: 1.2rem;
        }
        .rp-amount-box {
          background: #faf8f4;
          border: 1px solid rgba(201,144,26,0.2);
          border-radius: 10px; padding: 1.2rem 1.4rem;
        }
        .rp-amount-box__label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(0,0,0,0.35); margin-bottom: 0.4rem;
        }
        .rp-amount-box__value {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.6rem; font-weight: 700;
          color: #ea6c1a; line-height: 1; margin-bottom: 0.3rem;
        }
        .rp-amount-box__note {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.72rem; color: rgba(0,0,0,0.40); line-height: 1.5;
        }
        .rp-amount-box--red .rp-amount-box__value { color: #b91c1c; }
        .rp-amount-box--green .rp-amount-box__value { color: #15803d; }
        .rp-footer-note {
          margin-top: 3rem; background: #1a3a6b; border-radius: 14px;
          padding: 2rem 2.4rem;
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 1.2rem;
        }
        .rp-footer-note p {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.82rem; color: rgba(255,255,255,0.45); line-height: 1.7; margin: 0;
        }
        .rp-footer-note strong { color: #f5a54a; }
        .rp-contact-btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: #ea6c1a; color: #fff;
          padding: 0.75rem 1.6rem; border-radius: 4px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; transition: all 0.3s;
          white-space: nowrap; flex-shrink: 0;
        }
        .rp-contact-btn:hover { background: #f07d2a; transform: translateY(-2px); }
        @media (max-width: 640px) {
          .rp-card__body { padding: 1.4rem 1.2rem; }
          .rp-amount-grid { grid-template-columns: 1fr !important; }
          .rp-footer-note { flex-direction: column !important; align-items: flex-start !important; }
          .rp-contact-btn { width: 100% !important; justify-content: center !important; }
        }
      `}</style>

      <TickerTape />
      <Navbar />

      <div className="rp-hero">
        <div className="rp-hero__pattern" />
        <div className="rp-hero__glow" />
        <div className="rp-hero__inner">
          <div className="rp-hero__label">धोलेरा आवास योजना</div>
          <h1 className="rp-hero__title">वापसी <em>नीति</em></h1>
          <div className="rp-hero__divider" />
          <p className="rp-hero__desc">अंतिम अपडेट: 05 मार्च 2026 &nbsp;·&nbsp; भुगतान करने से पहले कृपया हमारी वापसी शर्तें ध्यान से पढ़ें।</p>
        </div>
      </div>

      <div className="rp-body">
        <div className="rp-body__inner">

          <div className="rp-notice">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p><strong>Haute Developers</strong> अपने ग्राहकों और संभावित ग्राहकों को धोलेरा आवास योजना के तहत इकाइयों के लिए ऑनलाइन भुगतान की सुविधा प्रदान करता है। भुगतान बुकिंग राशि या मील के पत्थर आधारित भुगतान के रूप में हमारे द्वारा अधिकृत ऑनलाइन भुगतान गेटवे के माध्यम से किया जा सकता है। भुगतान करके, आप इस वापसी नीति की शर्तों से सहमत होते हैं।</p>
          </div>

          {/* ऑनलाइन भुगतान */}
          <div className="rp-card">
            <div className="rp-card__header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              <div className="rp-card__header-title">ऑनलाइन भुगतान</div>
            </div>
            <div className="rp-card__body">
              <p>Haute Developers आवेदकों को धोलेरा आवास योजना के तहत इकाइयों के लिए ऑनलाइन भुगतान की सुविधा प्रदान करता है। स्वीकृत भुगतान माध्यमों में UPI, NEFT, RTGS और अन्य अधिकृत डिजिटल भुगतान गेटवे शामिल हैं। पंजीकरण के समय <strong style={{ color: '#ea6c1a' }}>₹11,500</strong> का आवेदन शुल्क देना अनिवार्य है। प्लॉट का मूल्य प्रबंधन कोटा के तहत ₹7,200/वर्ग गज और सामान्य कोटा के तहत ₹7,500/वर्ग गज है, जो 05 मार्च 2026 से प्रभावी है।</p>
            </div>
          </div>

          {/* आवंटन के बाद */}
          <div className="rp-card">
            <div className="rp-card__header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>
              <div className="rp-card__header-title">वापसी शर्तें — आवंटन के बाद</div>
            </div>
            <div className="rp-card__body">
              <p>Haute Developers में हम अपने आवेदकों के साथ पारदर्शिता और विश्वास बनाए रखने के लिए प्रतिबद्ध हैं। प्लॉट के सफल आवंटन के बाद निम्नलिखित शर्तें लागू होती हैं:</p>
              <ul className="rp-list">
                <li>आवंटितों को आवंटन की तारीख से <strong style={{ color: '#1a3a6b' }}>दस (10) दिनों</strong> के भीतर अनिवार्य साइट विजिट और सत्यापन प्रक्रिया पूरी करने के लिए परियोजना स्थल पर व्यक्तिगत रूप से जाना आवश्यक है।</li>
                <li>यदि आवंटित व्यक्ति निर्धारित 10 दिनों की अवधि के भीतर साइट पर नहीं जाता है, तो आवंटन रद्द माना जाएगा और किसी भी परिस्थिति में <strong style={{ color: '#b91c1c' }}>कोई वापसी नहीं की जाएगी</strong>, चाहे न जाने का कारण कुछ भी हो।</li>
                <li>प्रबंधन कोटा के तहत की गई बुकिंग में पंजीकरण राशि <strong style={{ color: '#b91c1c' }}>वापस नहीं होगी।</strong></li>
                <li>इकाई के आवंटन के बाद की गई वापसी अनुरोध पर रद्दीकरण शुल्क के रूप में <strong style={{ color: '#b91c1c' }}>कुल इकाई लागत का 15%</strong> काटा जाएगा।</li>
              </ul>
            </div>
          </div>

          {/* आवंटन न होने पर */}
          <div className="rp-card">
            <div className="rp-card__header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <div className="rp-card__header-title">वापसी शर्तें — आवंटन न होने पर</div>
            </div>
            <div className="rp-card__body">
              <p>यदि योजना के तहत आवंटन नहीं किया जाता है, तो वापसी निम्नलिखित शर्तों के अनुसार की जाएगी:</p>
              <div className="rp-amount-grid">
                <div className="rp-amount-box rp-amount-box--green">
                  <div className="rp-amount-box__label">वापस की जाने वाली राशि</div>
                  <div className="rp-amount-box__value">₹14,000</div>
                  <div className="rp-amount-box__note">रुपये चौदह हजार मात्र — आवेदक को वापस किए जाएंगे</div>
                </div>
                <div className="rp-amount-box rp-amount-box--red">
                  <div className="rp-amount-box__label">वापस न होने वाली राशि</div>
                  <div className="rp-amount-box__value">₹500</div>
                  <div className="rp-amount-box__note">आवेदन फॉर्म शुल्क — किसी भी परिस्थिति में वापस नहीं होगा</div>
                </div>
              </div>
              <p style={{ marginTop: '1.2rem' }}>वापसी, आवंटन न होने की पुष्टि की तारीख से <strong style={{ color: '#1a3a6b' }}>30 कार्य दिवसों</strong> के भीतर संसाधित की जाएगी।</p>
            </div>
          </div>

          {/* वापसी का माध्यम */}
          <div className="rp-card">
            <div className="rp-card__header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
              <div className="rp-card__header-title">वापसी का माध्यम</div>
            </div>
            <div className="rp-card__body">
              <p>वापसी आवेदक द्वारा उपयोग किए गए मूल भुगतान माध्यम से या किसी अन्य पारस्परिक सहमत विधि के माध्यम से जारी की जाएगी। वापसी लेनदेन शुरू होने के बाद आवेदकों को सूचित किया जाएगा। Haute Developers बैंकिंग मध्यस्थों या आवेदक की ओर से तकनीकी समस्याओं के कारण होने वाली देरी के लिए जिम्मेदार नहीं होगा।</p>
            </div>
          </div>

          {/* नीति की स्वीकृति */}
          <div className="rp-card">
            <div className="rp-card__header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              <div className="rp-card__header-title">नीति की स्वीकृति</div>
            </div>
            <div className="rp-card__body">
              <p>धोलेरा आवास योजना के लिए Haute Developers की ऑनलाइन बुकिंग और भुगतान सुविधाओं तक पहुँचने, उन्हें देखने या उपयोग करने से, आवेदक को इस वापसी नीति में उल्लिखित नियमों और शर्तों को पढ़ा, समझा और स्वीकार किया हुआ माना जाएगा।</p>
            </div>
          </div>

          {/* नीति समीक्षा और संशोधन */}
          <div className="rp-card">
            <div className="rp-card__header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <div className="rp-card__header-title">नीति समीक्षा और संशोधन</div>
            </div>
            <div className="rp-card__body">
              <p>Haute Developers को किसी भी समय बिना पूर्व सूचना के इस वापसी नीति की समीक्षा, संशोधन या अद्यतन करने का अधिकार सुरक्षित है। ऐसे किसी भी बदलाव को वेबसाइट पर प्रकाशित होते ही तत्काल प्रभावी माना जाएगा। हम आवेदकों को प्रोत्साहित करते हैं कि वे किसी भी अपडेट से अवगत रहने के लिए इस नीति की समय-समय पर समीक्षा करें।</p>
            </div>
          </div>

          {/* अस्वीकरण */}
          <div className="rp-card">
            <div className="rp-card__header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div className="rp-card__header-title">अस्वीकरण</div>
            </div>
            <div className="rp-card__body">
              <p>इस आवेदन और संबंधित नीतियों को तैयार करने में हर उचित सावधानी बरती गई है, फिर भी Haute Developers को लागू कानूनों, वैधानिक प्राधिकरणों या सरकारी नियमों की आवश्यकता के अनुसार किसी भी नियम, शर्त, विनिर्देश, सुविधा या अन्य विवरण को जोड़ने, हटाने, बदलने या संशोधित करने का अधिकार सुरक्षित है। यह नीति भारत के कानूनों द्वारा शासित होगी और अहमदाबाद, गुजरात के न्यायालयों के अधिकार क्षेत्र के अधीन होगी।</p>
            </div>
          </div>

          <div className="rp-footer-note">
            <p>किसी भी वापसी संबंधी प्रश्न के लिए, कृपया हमसे सीधे संपर्क करें।<br /><strong>Haute Developers</strong> &nbsp;·&nbsp; धोलेरा आवास योजना &nbsp;·&nbsp; धोलेरा SIR, गुजरात, भारत</p>
            <a href="tel:+918383073291" className="rp-contact-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +91 83830 73291
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}