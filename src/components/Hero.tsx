
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="gradient-text">AI Voice Agents</span> for Debt Collection
            </h1>
            <p className="text-xl md:text-2xl text-comsync-charcoal mb-6 md:mb-8">
              End-to-end automation of loan recovery — zero human error, fully compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-comsync-blue hover:bg-comsync-darkBlue text-white text-lg py-6 px-8"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Talk to Our Agent
              </Button>
              <div className="flex items-center gap-2">
                <Phone className="text-comsync-blue" />
                <a href="tel:+13254139094" className="text-comsync-charcoal hover:text-comsync-blue transition-colors">
                  +1 (325) 413-9094
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-comsync-blue to-comsync-darkBlue opacity-30 blur-lg rounded-xl"></div>
              <div className="relative bg-white p-6 md:p-8 rounded-xl shadow-lg border border-blue-100">
                <div className="flex items-center mb-4 gap-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="text-sm text-comsync-gray ml-2">AI Voice Agent</div>
                </div>
                <div className="space-y-3">
                  <p className="text-comsync-charcoal border-l-4 border-blue-300 pl-3 py-1">
                    "Hello, I'm calling from Comsync regarding your account..."
                  </p>
                  <p className="text-comsync-charcoal border-l-4 border-blue-300 pl-3 py-1">
                    "I understand your situation. Let me suggest a restructuring option..."
                  </p>
                  <p className="text-comsync-charcoal border-l-4 border-blue-300 pl-3 py-1">
                    "Great, we've confirmed your payment plan. You'll receive a confirmation email..."
                  </p>
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="w-16 h-1.5 bg-gradient-to-r from-comsync-blue to-comsync-darkBlue rounded-full animate-pulse-slow"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
