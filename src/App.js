import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar_and_footer/navbar/Navbar";
import { RealEstateAgentsSection } from './components/website_sections/1st_real_estate_agents/RealEstateAgentsSection';
import { ServicesAndAboutUsSection } from './components/website_sections/2nd_services_and_about_us/ServicesAndAboutUsSection';
import { PortfolioAndFeedbackSection } from './components/website_sections/4th_portfolio_and_feedback/PortfolioAndFeedbackSection';
import { HowWeWorkSection } from './components/website_sections/5th_how_we_work/HowWeWorkSection';
import { EstimateCostSection } from './components/website_sections/6th_estimate_the_cost/EstimateCostSection';
import { ArticlesSection } from './components/website_sections/7th_articles/ArticlesSection';
import { Footer } from './components/navbar_and_footer/footer/Footer';
import { BackToTopButton } from './components/common_components/back_to_top_button/BackToTopButton';
import { CallButton } from './components/common_components/call_button/CallButton';
import { PrivacyPolicy } from "./components/common_components/privacy_policy/PrivacyPolicy";
import { LazyMotion, domAnimation } from "framer-motion";
import { useRef, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  const servicesRef   = useRef(null);
  const protofolio    = useRef(null);
  const howToWorkRef  = useRef(null);
  const articlesRef   = useRef(null);
  const contactsRef   = useRef(null);

  const refs = { servicesRef, protofolio, howToWorkRef, articlesRef, contactsRef };

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-screen">
          <div className="spinner"></div>
        </div>
      ) : (
        <LazyMotion features={domAnimation}>
          <Routes>
            {/* الصفحة الرئيسية */}
            <Route path="/" element={
              <>
                <Navbar refs={refs} />
                <RealEstateAgentsSection />
                <ServicesAndAboutUsSection ref={servicesRef} />
                <PortfolioAndFeedbackSection ref={protofolio} />
                <HowWeWorkSection ref={howToWorkRef} />
                <EstimateCostSection ref={contactsRef} />
                <ArticlesSection ref={articlesRef} />
                <Footer />
                <BackToTopButton />
                <CallButton />
              </>
            } />

            {/* صفحة سياسة الخصوصية */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </LazyMotion>
      )}
    </div>
  );
}

export default App;
