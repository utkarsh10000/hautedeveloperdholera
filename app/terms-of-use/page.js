"use client";
import Navbar from "../component/Navbar";
import TickerTape from "../component/TickerTape";
import Footer from "../component/Footer";

const sections = [
  {
    num: "01",
    title: "परिचय",
    content: `ये उपयोग की शर्तें Haute Developers ("कंपनी", "हम", "हमारा") द्वारा संचालित धोलेरा आवास योजना के तहत वेबसाइट, ऑनलाइन बुकिंग सुविधाओं और संबंधित सेवाओं तक आपकी पहुँच और उपयोग को नियंत्रित करती हैं। इस वेबसाइट तक पहुँचने, ब्राउज़ करने या उपयोग करने से आप इन उपयोग की शर्तों से बाध्य होने के लिए सहमत होते हैं। यदि आप इनमें से किसी भी भाग से सहमत नहीं हैं, तो आपको वेबसाइट या संबंधित सेवाओं का उपयोग न करने की सलाह दी जाती है।`,
  },
  {
    num: "02",
    title: "वेबसाइट का उद्देश्य",
    content: `यह वेबसाइट धोलेरा आवास योजना के बारे में परियोजना विवरण, प्लॉट उपलब्धता, मूल्य निर्धारण और ऑनलाइन आवेदन या भुगतान सुविधाओं सहित सामान्य जानकारी प्रदान करने के लिए है। सामग्री केवल सूचनात्मक उद्देश्यों के लिए है और यह कोई कानूनी प्रस्ताव, निवेश सलाह या बाध्यकारी प्रतिबद्धता नहीं है।`,
  },
  {
    num: "03",
    title: "उपयोग की पात्रता",
    content: `इस वेबसाइट का उपयोग करके आप पुष्टि करते हैं कि आपकी आयु कम से कम 18 वर्ष है और आप लागू कानूनों के तहत बाध्यकारी अनुबंध करने में कानूनी रूप से सक्षम हैं।`,
  },
  {
    num: "04",
    title: "ऑनलाइन आवेदन और भुगतान",
    content: `Haute Developers आवेदकों को अधिकृत भुगतान गेटवे के माध्यम से बुकिंग राशि या मील के पत्थर के लिए आवेदन जमा करने और भुगतान करने की ऑनलाइन सुविधा प्रदान करता है। किए गए सभी भुगतान इकाइयों या प्लॉट की उपलब्धता, आवेदक विवरण के सत्यापन और लागू भुगतान, वापसी एवं आवंटन नीतियों की स्वीकृति के अधीन हैं। आवेदन या भुगतान जमा करना आवंटन की गारंटी नहीं देता।`,
  },
  {
    num: "05",
    title: "आवंटन और मूल्य निर्धारण",
    content: `धोलेरा आवास योजना के तहत प्लॉट आवंटन उपलब्धता और आंतरिक अनुमोदन प्रक्रियाओं के अधीन है। प्लॉट की कीमत 05 मार्च 2026 से प्रभावी है — प्रबंधन कोटा के तहत ₹7,200 प्रति वर्ग गज और सामान्य कोटा के तहत ₹7,500 प्रति वर्ग गज। कीमतें, भुगतान अनुसूची और परियोजना विनिर्देश कानून द्वारा अनुमत रूप से पूर्व सूचना के बिना परिवर्तन के अधीन हैं। कंपनी अपने एकमात्र विवेक पर किसी भी आवेदन को स्वीकार या अस्वीकार करने का अधिकार सुरक्षित रखती है।`,
  },
  {
    num: "06",
    title: "वापसी और रद्दीकरण",
    content: `वापसी, यदि लागू हो, तो इस वेबसाइट पर प्रकाशित वापसी नीति द्वारा सख्ती से नियंत्रित होगी। आवेदकों को कोई भी भुगतान करने से पहले वापसी नीति को ध्यान से पढ़ने की सलाह दी जाती है।`,
  },
  {
    num: "07",
    title: "बौद्धिक संपदा अधिकार",
    content: `इस वेबसाइट की सभी सामग्री, जिसमें टेक्स्ट, छवियाँ, ग्राफिक्स, लोगो, लेआउट और डिज़ाइन शामिल हैं, जब तक अन्यथा न कहा गया हो, Haute Developers की संपत्ति हैं। किसी भी सामग्री की अनधिकृत नकल, पुनरुत्पादन, संशोधन या वितरण सख्त रूप से प्रतिबंधित है।`,
  },
  {
    num: "08",
    title: "जानकारी की सटीकता",
    content: `सटीकता सुनिश्चित करने के लिए उचित प्रयास किए जाते हैं, फिर भी कंपनी यह गारंटी नहीं देती कि वेबसाइट पर सभी जानकारी पूर्ण, अद्यतन या त्रुटि रहित है, या कि वेबसाइट निरंतर या तकनीकी समस्याओं से मुक्त रहेगी। प्रदान की गई जानकारी पर निर्भरता उपयोगकर्ता के अपने जोखिम पर है।`,
  },
  {
    num: "09",
    title: "उपयोगकर्ता आचरण",
    content: `उपयोगकर्ता सहमत हैं कि वे वेबसाइट का उपयोग गैरकानूनी या धोखाधड़ी के उद्देश्यों के लिए नहीं करेंगे, सिस्टम या डेटा तक अनधिकृत पहुँच का प्रयास नहीं करेंगे, हानिकारक कोड या भ्रामक जानकारी अपलोड या प्रसारित नहीं करेंगे, या पहचान का गलत प्रतिनिधित्व या झूठी जानकारी जमा नहीं करेंगे। इन शर्तों के उल्लंघन पर पहुँच से इनकार या कानूनी कार्रवाई हो सकती है।`,
  },
  {
    num: "10",
    title: "तृतीय-पक्ष लिंक",
    content: `वेबसाइट में सुविधा या सूचनात्मक उद्देश्यों के लिए तृतीय-पक्ष वेबसाइटों के लिंक हो सकते हैं। Haute Developers ऐसी वेबसाइटों को नियंत्रित या समर्थन नहीं करता और उनकी सामग्री, नीतियों या प्रथाओं के लिए जिम्मेदार नहीं है।`,
  },
  {
    num: "11",
    title: "दायित्व की सीमा",
    content: `Haute Developers वेबसाइट के उपयोग या उपयोग करने में असमर्थता, आवंटन या अनुमोदन में देरी, तकनीकी समस्याओं या भुगतान गेटवे विफलताओं, या वेबसाइट पर प्रदान की गई जानकारी पर निर्भरता से उत्पन्न किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक या परिणामी क्षति के लिए उत्तरदायी नहीं होगा।`,
  },
  {
    num: "12",
    title: "अस्वीकरण",
    content: `धोलेरा आवास योजना Haute Developers द्वारा संचालित है और यह कोई सरकारी योजना नहीं है। सभी परियोजना विवरण, सुविधाएँ, लेआउट और विनिर्देश सांकेतिक हैं और वैधानिक प्राधिकरणों, सरकारी नियमों या विकास संबंधी विचारों के अनुसार परिवर्तन के अधीन हैं।`,
  },
  {
    num: "13",
    title: "शर्तों में संशोधन",
    content: `कंपनी बिना पूर्व सूचना के किसी भी समय इन उपयोग की शर्तों को संशोधित या अद्यतन करने का अधिकार सुरक्षित रखती है। परिवर्तन प्रकाशित होने के बाद वेबसाइट का निरंतर उपयोग संशोधित शर्तों की स्वीकृति माना जाएगा।`,
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <style>{`
        .tou-hero {
          background: #1a3a6b;
          padding: 10rem 0 5rem;
          position: relative;
          overflow: hidden;
        }
        .tou-hero__pattern {
          position: absolute; inset: 0; opacity: 0.035;
          background-image: repeating-linear-gradient(45deg, #ea6c1a 0, #ea6c1a 1px, transparent 0, transparent 50%);
          background-size: 32px 32px; pointer-events: none;
        }
        .tou-hero__glow {
          position: absolute; top: -80px; right: -80px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(201,144,26,0.09) 0%, transparent 70%);
          pointer-events: none;
        }
        .tou-hero__inner {
          max-width: 860px; margin: 0 auto; padding: 0 2rem;
          position: relative; z-index: 1; text-align: center;
        }
        .tou-hero__label {
          display: inline-flex; align-items: center; gap: 0.6rem;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #ea6c1a; margin-bottom: 1rem;
        }
        .tou-hero__label::before, .tou-hero__label::after {
          content: ''; display: block; width: 24px; height: 1.5px; background: #ea6c1a;
        }
        .tou-hero__title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.4rem, 4vw, 3.8rem);
          font-weight: 600; color: #ffffff; line-height: 1.1; margin: 0 0 1.2rem;
        }
        .tou-hero__title em { font-style: italic; color: #f5a54a; }
        .tou-hero__divider {
          width: 56px; height: 3px;
          background: linear-gradient(90deg, #ea6c1a, #f5a54a);
          border-radius: 2px; margin: 0 auto 1.4rem;
        }
        .tou-hero__desc {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.88rem; color: rgba(255,255,255,0.40); line-height: 1.8; margin: 0;
        }
        .tou-body { background: #faf8f4; padding: 5rem 0 6rem; }
        .tou-body__inner { max-width: 860px; margin: 0 auto; padding: 0 2rem; }
        .tou-notice {
          background: #ffffff;
          border: 1px solid rgba(201,144,26,0.2);
          border-left: 4px solid #ea6c1a;
          border-radius: 10px; padding: 1.2rem 1.6rem;
          margin-bottom: 3rem;
          display: flex; align-items: flex-start; gap: 1rem;
        }
        .tou-notice p {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.82rem; color: #6b7280; line-height: 1.7; margin: 0;
        }
        .tou-notice strong { color: #ea6c1a; }
        .tou-section {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 14px; padding: 2rem 2.4rem;
          margin-bottom: 1.2rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          display: grid; grid-template-columns: 3rem 1fr;
          gap: 1.4rem; align-items: start;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .tou-section:hover {
          border-color: rgba(201,144,26,0.3);
          box-shadow: 0 4px 20px rgba(201,144,26,0.08);
        }
        .tou-section__num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.6rem; font-weight: 700;
          color: #ea6c1a; opacity: 0.5; line-height: 1; padding-top: 0.2rem;
        }
        .tou-section__title {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.72rem; font-weight: 800;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #1a3a6b; margin: 0 0 0.6rem;
        }
        .tou-section__content {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.88rem; color: rgba(0,0,0,0.55); line-height: 1.85; margin: 0;
        }
        .tou-footer-note {
          margin-top: 3rem; background: #1a3a6b; border-radius: 14px;
          padding: 2rem 2.4rem;
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 1.2rem;
        }
        .tou-footer-note p {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.82rem; color: rgba(255,255,255,0.45); line-height: 1.7; margin: 0;
        }
        .tou-footer-note strong { color: #f5a54a; }
        .tou-contact-btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: #ea6c1a; color: #fff;
          padding: 0.75rem 1.6rem; border-radius: 4px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; transition: all 0.3s;
          white-space: nowrap; flex-shrink: 0;
        }
        .tou-contact-btn:hover { background: #f07d2a; transform: translateY(-2px); }
        @media (max-width: 640px) {
          .tou-section { grid-template-columns: 1fr !important; gap: 0.5rem !important; padding: 1.4rem 1.2rem !important; }
          .tou-section__num { font-size: 1.1rem !important; }
          .tou-footer-note { flex-direction: column !important; align-items: flex-start !important; }
          .tou-contact-btn { width: 100% !important; justify-content: center !important; }
        }
      `}</style>

      <TickerTape />
      <Navbar />

      <div className="tou-hero">
        <div className="tou-hero__pattern" />
        <div className="tou-hero__glow" />
        <div className="tou-hero__inner">
          <div className="tou-hero__label">धोलेरा आवास योजना</div>
          <h1 className="tou-hero__title">उपयोग की <em>शर्तें</em></h1>
          <div className="tou-hero__divider" />
          <p className="tou-hero__desc">अंतिम अपडेट: 05 मार्च 2026 &nbsp;·&nbsp; पंजीकरण से पहले कृपया ये शर्तें ध्यान से पढ़ें।</p>
        </div>
      </div>

      <div className="tou-body">
        <div className="tou-body__inner">
          <div className="tou-notice">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea6c1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p>ये उपयोग की शर्तें <strong>Haute Developers</strong> द्वारा संचालित धोलेरा आवास योजना प्लेटफॉर्म के आपके उपयोग को नियंत्रित करती हैं। आगे बढ़कर आप स्वीकार करते हैं कि आपने नीचे दी गई सभी शर्तें पढ़ और स्वीकार कर ली हैं। प्रश्नों के लिए हमसे संपर्क करें: <strong>+91 83830 73291</strong>।</p>
          </div>

          {sections.map((s) => (
            <div className="tou-section" key={s.num}>
              <div className="tou-section__num">{s.num}</div>
              <div>
                <div className="tou-section__title">{s.title}</div>
                <p className="tou-section__content">{s.content}</p>
              </div>
            </div>
          ))}

          <div className="tou-footer-note">
            <p>इन शर्तों के बारे में किसी भी प्रश्न के लिए हमसे संपर्क करें।<br /><strong>Haute Developers</strong> &nbsp;·&nbsp; धोलेरा आवास योजना &nbsp;·&nbsp; धोलेरा SIR, गुजरात, भारत</p>
            <a href="tel:+918383073291" className="tou-contact-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              संपर्क करें
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}