
import { Check, Lock, Users, Zap } from "lucide-react";

const FeatureItem = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="mr-4 mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
        {icon}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

const WhyComsync = () => {
  return (
    <section id="why-comsync" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Comsync?</h2>
          <p className="text-lg text-comsync-charcoal max-w-2xl mx-auto">
            Our AI-powered platform is revolutionizing debt collection for financial institutions worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <FeatureItem icon={<Zap size={20} className="text-comsync-blue" />}>
              <h3 className="text-xl font-semibold mb-1">95% Automation with Human Supervision</h3>
              <p className="text-comsync-charcoal">
                Our AI agents handle 95% of collection cases autonomously, with human agents involved only for complex edge cases requiring special attention.
              </p>
            </FeatureItem>
            
            <FeatureItem icon={<Lock size={20} className="text-comsync-blue" />}>
              <h3 className="text-xl font-semibold mb-1">Local, Private, and Fully Secure</h3>
              <p className="text-comsync-charcoal">
                Our system operates with bank-grade security protocols. All data remains within your infrastructure with no external dependencies.
              </p>
            </FeatureItem>
          </div>
          
          <div>
            <FeatureItem icon={<Users size={20} className="text-comsync-blue" />}>
              <h3 className="text-xl font-semibold mb-1">Most Human-like Agents at Lowest Cost</h3>
              <p className="text-comsync-charcoal">
                Our voice agents are indistinguishable from human agents, delivering superior customer experience at a fraction of traditional collection costs.
              </p>
            </FeatureItem>
            
            <FeatureItem icon={<Check size={20} className="text-comsync-blue" />}>
              <h3 className="text-xl font-semibold mb-1">Smart Loan Restructuring and Retention</h3>
              <p className="text-comsync-charcoal">
                Our AI analyzes borrower payment capacity to offer personalized repayment plans, increasing recovery rates and maintaining customer relationships.
              </p>
            </FeatureItem>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2">Compliance Guaranteed</h3>
              <p className="text-comsync-charcoal">
                Our AI agents strictly adhere to all regulatory requirements, eliminating compliance risks and maintaining detailed audit logs of all interactions.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-comsync-blue to-comsync-darkBlue flex items-center justify-center">
                  <Lock size={32} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyComsync;
