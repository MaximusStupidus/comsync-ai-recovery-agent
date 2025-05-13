
import { Bot, Users, Search } from "lucide-react";

const AgentCard = ({ 
  title, 
  icon, 
  description 
}: { 
  title: string; 
  icon: React.ReactNode; 
  description: string;
}) => {
  return (
    <div className="feature-card flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-comsync-charcoal">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-comsync-charcoal max-w-2xl mx-auto">
            Our AI-driven platform employs three specialized voice agents to automate the entire debt collection process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <AgentCard
            title="Collector Agent"
            icon={<Bot size={32} className="text-comsync-blue" />}
            description="Reaches out to borrowers, follows up systematically, and persuasively negotiates for optimal repayment outcomes."
          />
          
          <AgentCard
            title="Management Agent"
            icon={<Users size={32} className="text-comsync-blue" />}
            description="Ensures continuity across interactions and manages conflict escalation for complex cases requiring special attention."
          />
          
          <AgentCard
            title="Surveying Agent"
            icon={<Search size={32} className="text-comsync-blue" />}
            description="Markets new loan products, gathers customer feedback, and builds trust and relationships with borrowers."
          />
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h3 className="text-2xl font-semibold mb-3">Automated Workflow</h3>
                <p className="text-comsync-charcoal">
                  Our AI agents work seamlessly together to handle the entire collection process - from initial contact through payment negotiation and follow-up. Human agents are notified only when necessary for complex cases.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="relative h-2 bg-gray-200 rounded">
                  <div className="absolute left-0 top-0 h-2 bg-gradient-to-r from-comsync-blue to-comsync-darkBlue rounded w-[95%]"></div>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span>AI Automation</span>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
