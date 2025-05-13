
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isVisible && (
        <Button 
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="bg-white text-comsync-blue hover:bg-gray-100 border border-gray-200 shadow-md rounded-full w-12 h-12"
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
