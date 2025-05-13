
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyComsync from '@/components/WhyComsync';
import SystemFeatures from '@/components/SystemFeatures';
import Testimonials from '@/components/Testimonials';
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
      <HowItWorks />
      <WhyComsync />
      <SystemFeatures />
      <Testimonials />
      <Founders />
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
