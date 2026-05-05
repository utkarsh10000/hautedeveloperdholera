import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import ProjectSnapshot from "./component/ProjectSnapshot";
import LocationAdvantage from "./component/LocationAdvantage";
import ManagementQuota from "./component/ManagmentQuota";
import SitePlan from "./component/SitePlan";
import AmenitiesSection from "./component/AmenitiesSection";
import DholeraVideo from "./component/DholeraVideo";
import PaymentPlan from "./component/PaymentPlan";
import FAQ from "./component/Faq";
import WhyInvest from "./component/WhyInvest";
import SchemeStrip from "./component/SchemeStrip";
import TickerTape from "./component/TickerTape";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* ── Fixed navigation ── */}
      <TickerTape />
      <Navbar />

      {/* 1. Hero — first impression, above the fold */}
      <section id="home">
        <Hero />
      </section>

      {/* 2. Registration Closing Counter — urgency right after hero */}
      <SchemeStrip />

      {/* 3. Project Snapshot — quick facts, hooks the visitor */}
      <section id="project">
        <ProjectSnapshot />
      </section>

      {/* 4. Location Advantage — builds context and credibility */}
      <LocationAdvantage />

      {/* 5. Management Quota — urgency + limited availability */}
      <ManagementQuota />

      {/* 6. Site Plan — visual proof, show what they're buying */}
      <section id="siteplan">
        <SitePlan />
      </section>

      {/* 7. Amenities — lifestyle sell */}
      <AmenitiesSection />

      {/* 8. Dholera Video — immersive visual before payment plan */}
      <DholeraVideo />

      {/* 9. Payment Plan — pricing transparency before FAQs */}
      <section id="payment">
        <PaymentPlan />
      </section>

      {/* 10. Why Invest — reinforce conviction before final CTA */}
      <WhyInvest />

      {/* 11. Refund Policy anchor */}
      <div id="refund" />

      {/* 12. FAQ — just above footer */}
      <section id="faqs">
        <FAQ />
      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}