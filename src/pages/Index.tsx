
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VoiceAgentsIntro from '@/components/VoiceAgentsIntro';
import WhyComsync from '@/components/WhyComsync';
import HowDifferent from '@/components/HowDifferent';
import UseCases from '@/components/UseCases';
import Pricing from '@/components/Pricing';
import Founders from '@/components/Founders';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { initScrollAnimation } from '@/utils/scrollAnimation';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimation();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VoiceAgentsIntro />
      <WhyComsync />
      <HowDifferent />
      <UseCases />
      <Pricing />
      <Founders />
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
