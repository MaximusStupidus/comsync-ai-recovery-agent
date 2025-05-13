
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="demo" className="section-padding bg-gradient-to-br from-comsync-blue to-comsync-darkBlue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to see our voice agent in action?</h2>
          <p className="text-xl mb-8">
            Experience how our AI can transform your debt collection process with a personalized demo.
          </p>
          
          <Button
            className="bg-white text-comsync-blue hover:bg-gray-100 text-lg py-6 px-8 mb-6"
            onClick={() => {
              // Normally would direct to a schedule form, alert for now
              alert("Thank you for your interest! Our team will contact you shortly to schedule a demo.");
            }}
          >
            Schedule a Demo
          </Button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone />
              <a href="tel:+13254139094" className="hover:underline">
                +1 (325) 413-9094
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone />
              <a href="tel:+919821660534" className="hover:underline">
                +91 9821660534
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
