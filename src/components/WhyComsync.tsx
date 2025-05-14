
import { BadgePercent, PhoneCall, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CountUp from "react-countup";

const WhyComsync = () => {
  const benefits = [
    {
      icon: <BadgePercent className="h-12 w-12 text-comsync-blue" />,
      title: "Reduce Cost by 60%",
      description: "Lower operational costs with AI agents that scale with your needs without additional hiring or training."
    },
    {
      icon: <PhoneCall className="h-12 w-12 text-comsync-blue" />,
      title: "Handle 10,000+ Concurrent Calls",
      description: "Our infrastructure seamlessly manages thousands of simultaneous interactions with consistent quality."
    },
    {
      icon: <Globe className="h-12 w-12 text-comsync-blue" />,
      title: "Real-time Multilingual Response",
      description: "Support customers in 30+ languages with automatic translation and cultural adaptation."
    }
  ];
  
  const metrics = [
    {
      title: "Avg Response Time",
      value: 1.4,
      unit: "s",
      description: "Industry-leading response time"
    },
    {
      title: "Accuracy",
      value: 98.2,
      unit: "%",
      description: "Precision in understanding and responding"
    },
    {
      title: "Customer Satisfaction",
      value: 94.7,
      unit: "%",
      description: "Based on post-call surveys"
    },
    {
      title: "Cost Savings",
      value: 63,
      unit: "%",
      description: "Average client savings vs. traditional call centers"
    }
  ];

  return (
    <section id="why-comsync" className="section-padding bg-gradient-to-b from-white to-comsync-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Why Use <span className="gradient-text">Comsync</span>?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our specialized vertical AI agents deliver superior performance across key metrics
            that matter to your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 animate-on-scroll transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 font-display">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-on-scroll">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-none overflow-hidden shadow-md">
              <CardContent className="p-0">
                <div className="h-1.5 bg-gradient-to-r from-comsync-blue to-comsync-indigo"></div>
                <div className="p-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">{metric.title}</h4>
                  <div className="flex items-end gap-1">
                    <CountUp
                      end={metric.value}
                      duration={2.5}
                      decimals={metric.title === "Avg Response Time" ? 1 : 0}
                      className="text-3xl font-bold text-comsync-charcoal font-display"
                    />
                    <span className="text-xl font-medium text-comsync-charcoal mb-0.5">{metric.unit}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{metric.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyComsync;
