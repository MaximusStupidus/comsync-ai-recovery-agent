
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-r from-comsync-blue to-comsync-indigo">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            Want to see our voice agent in action?
          </h2>
          
          <div className="mb-10 max-w-xl mx-auto">
            <p className="text-white/90 text-lg mb-8">
              Experience the future of AI-powered voice agents with a personalized demo tailored to your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-comsync-blue hover:bg-gray-100 text-lg py-6 px-8"
                onClick={() => window.open("https://calendly.com/comsync/demo", "_blank")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Demo
              </Button>
              
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/20 text-lg py-6 px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+919821660534">+91 9821660534</a>
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-white text-xl font-medium mb-3">What you'll get in the demo:</h3>
            <ul className="text-left text-white/90 space-y-2">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span>Live conversation with our AI voice agent</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span>Demonstration of industry-specific capabilities</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span>Custom integration possibilities for your business</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
