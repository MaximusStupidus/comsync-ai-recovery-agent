
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white via-comsync-lightGray to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center relative">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight font-display">
              We Build <span className="gradient-text">Vertical Voice AI Agents</span>
            </h1>
            <p className="text-xl md:text-2xl text-comsync-charcoal mb-6 md:mb-8">
              Transforming sales, onboarding, and support through AI-powered calls
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-comsync-blue hover:bg-comsync-darkBlue text-white text-lg py-6 px-8"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-comsync-blue text-comsync-blue hover:bg-comsync-blue/10 text-lg py-6 px-8"
              >
                Try Now
              </Button>
            </div>
            
            <div className="mt-12">
              <div className="text-sm text-comsync-charcoal/70 uppercase tracking-wider font-semibold mb-2">
                Making an impact
              </div>
              <div className="stat-bar w-full max-w-md">
                <div className="stat-bar-fill" style={{"--fill-percent": "92%"} as React.CSSProperties}></div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-lg font-semibold text-comsync-charcoal">Over</span>
                <CountUp 
                  start={0} 
                  end={1000000} 
                  duration={2.5} 
                  separator="," 
                  className="animated-counter"
                />
                <span className="text-lg font-semibold text-comsync-charcoal">AI-driven interactions served</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative z-0">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-comsync-blue/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-comsync-indigo/10 rounded-full filter blur-2xl"></div>
              
              {/* Voice waveform visualization */}
              <div className="relative bg-white p-6 md:p-8 rounded-xl shadow-lg border border-blue-100 z-10">
                <div className="flex items-center mb-6 gap-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="text-sm text-comsync-gray ml-2">Voice AI Agent</div>
                </div>
                
                <div className="flex justify-center items-center h-24 mb-6">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 mx-0.5 bg-gradient-to-t from-comsync-blue to-comsync-indigo rounded-full"
                      style={{
                        height: `${Math.sin(i * 0.5) * 35 + 45}%`,
                        animationDelay: `${i * 0.05}s`,
                        animation: 'pulse-slow 1.5s ease-in-out infinite'
                      }}
                    ></div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <p className="text-comsync-charcoal border-l-4 border-comsync-blue pl-3 py-1">
                    "Hello, I'm Sam from Comsync. I'm calling about your loan application..."
                  </p>
                </div>
                
                {/* Data flow visualization */}
                <div className="mt-6 border-t pt-4 border-dashed border-gray-200">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Sentiment: Positive</span>
                    <span>Confidence: 98%</span>
                    <span>Response Time: 1.4s</span>
                  </div>
                </div>
              </div>
              
              {/* Pulse rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0">
                <div className="pulse-ring border-comsync-blue/20 w-[110%] h-[110%]"></div>
                <div className="pulse-ring border-comsync-indigo/15 w-[130%] h-[130%]" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
