
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-comsync-charcoal font-display">
                Com<span className="gradient-text">Sync</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#what-are-voice-agents" className="text-comsync-charcoal hover:text-comsync-blue transition-colors font-medium">What Are Voice AI Agents?</a>
            <a href="#why-comsync" className="text-comsync-charcoal hover:text-comsync-blue transition-colors font-medium">Why Comsync</a>
            <a href="#use-cases" className="text-comsync-charcoal hover:text-comsync-blue transition-colors font-medium">Use Cases</a>
            <a href="#pricing" className="text-comsync-charcoal hover:text-comsync-blue transition-colors font-medium">Pricing</a>
            <a href="#about" className="text-comsync-charcoal hover:text-comsync-blue transition-colors font-medium">About</a>
          </div>
          
          <div className="hidden md:block">
            <Button
              variant="default"
              size="sm"
              className="bg-comsync-blue hover:bg-comsync-darkBlue text-white"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule a Demo
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-comsync-charcoal"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 w-full p-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#what-are-voice-agents" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-comsync-charcoal hover:text-comsync-blue transition-colors p-2"
            >
              What Are Voice AI Agents?
            </a>
            <a 
              href="#why-comsync" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-comsync-charcoal hover:text-comsync-blue transition-colors p-2"
            >
              Why Comsync
            </a>
            <a 
              href="#use-cases" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-comsync-charcoal hover:text-comsync-blue transition-colors p-2"
            >
              Use Cases
            </a>
            <a 
              href="#pricing" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-comsync-charcoal hover:text-comsync-blue transition-colors p-2"
            >
              Pricing
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-comsync-charcoal hover:text-comsync-blue transition-colors p-2"
            >
              About
            </a>
            <Button
              variant="default"
              className="bg-comsync-blue hover:bg-comsync-darkBlue text-white w-full"
              onClick={() => {
                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
