
import { Database, Activity, Zap } from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="feature-card">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-comsync-charcoal">{description}</p>
    </div>
  );
};

const SystemFeatures = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">System Features</h2>
          <p className="text-lg text-comsync-charcoal max-w-2xl mx-auto">
            Our comprehensive platform offers cutting-edge features designed specifically for financial institutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Database size={24} className="text-comsync-blue" />}
            title="End-to-End Credit Lifecycle Management"
            description="From loan disbursement to collection, our platform manages the entire credit lifecycle with seamless integration and comprehensive reporting."
          />
          
          <FeatureCard
            icon={<Activity size={24} className="text-comsync-blue" />}
            title="Anomaly Detection & Flagging"
            description="Our AI identifies potential fraud and unusual borrower behavior patterns, alerting human agents when necessary for investigation."
          />
          
          <FeatureCard
            icon={<Zap size={24} className="text-comsync-blue" />}
            title="Touchless Loan Disbursal to Collection"
            description="Fully automated workflow from loan application approval through disbursement, monitoring, and if necessary, collection processes."
          />
        </div>
        
        <div className="mt-12 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-4">Advanced Analytics Dashboard</h3>
            <p className="text-comsync-charcoal mb-6">
              Gain real-time insights into collection performance, customer behavior patterns, and AI agent effectiveness with our comprehensive analytics suite.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-comsync-blue mb-1">78%</div>
                <div className="text-sm text-comsync-charcoal">First Call Resolution</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-comsync-blue mb-1">3.2x</div>
                <div className="text-sm text-comsync-charcoal">Agent Efficiency</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-comsync-blue mb-1">$1.2M</div>
                <div className="text-sm text-comsync-charcoal">Monthly Recovery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemFeatures;
