
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Individual",
      description: "For small businesses starting with voice AI",
      price: "$0.08",
      unit: "per minute",
      features: [
        "Up to 30 concurrent calls",
        "3 voice options",
        "Basic analytics",
        "Standard support",
        "1-day response time"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Business",
      description: "For growing companies with higher volume needs",
      price: "$0.03",
      unit: "per minute",
      features: [
        "100+ concurrent calls",
        "10 voice options",
        "Advanced analytics & reporting",
        "Priority support",
        "4-hour response time",
        "Custom conversation flows"
      ],
      popular: true,
      cta: "Talk to Sales"
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom requirements",
      price: "Custom",
      unit: "pricing",
      features: [
        "Unlimited concurrent calls",
        "Full voice customization",
        "Executive dashboard",
        "24/7 dedicated support",
        "1-hour SLA",
        "Custom integrations",
        "On-premise deployment option"
      ],
      popular: false,
      cta: "Contact Us"
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-white to-comsync-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Simple <span className="gradient-text">Pricing</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing based on your usage with no hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden animate-on-scroll ${plan.popular ? 'border-comsync-blue shadow-xl shadow-comsync-blue/10' : 'border-gray-200 shadow-md'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-comsync-blue text-white text-xs font-semibold px-3 py-1 transform rotate-45 translate-x-7 translate-y-2">
                    POPULAR
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-display">{plan.name}</CardTitle>
                <p className="text-gray-500">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold font-display">{plan.price}</span>
                  <span className="text-gray-500"> {plan.unit}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-comsync-blue shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-comsync-blue hover:bg-comsync-darkBlue text-white' : 'bg-gray-100 hover:bg-gray-200 text-comsync-charcoal'}`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Cost reduction timeline */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 animate-on-scroll">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 font-display">Upcoming 8x Infrastructure Cost Reduction</h3>
            <p className="text-gray-600">
              Our technology roadmap will enable us to significantly reduce costs over the next 12 months,
              with savings passed directly to our customers.
            </p>
          </div>
          
          <div className="relative h-48">
            <svg viewBox="0 0 800 200" className="w-full h-full">
              {/* Background grid */}
              <g className="grid">
                {[0, 0.25, 0.50, 0.75, 1.00].map((y, i) => (
                  <g key={i}>
                    <line 
                      x1="100" 
                      y1={50 + y * 100} 
                      x2="700" 
                      y2={50 + y * 100} 
                      stroke="#e5e7eb" 
                      strokeWidth="1" 
                    />
                    <text 
                      x="90" 
                      y={50 + y * 100 + 5} 
                      textAnchor="end" 
                      className="text-xs fill-gray-500"
                    >
                      ${0.08 - y * 0.07}
                    </text>
                  </g>
                ))}
              </g>
              
              {/* X-axis */}
              <line x1="100" y1="150" x2="700" y2="150" stroke="#64748b" strokeWidth="1" />
              
              {/* Quarter labels */}
              {['Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025'].map((quarter, i) => (
                <text 
                  key={i} 
                  x={200 + i * 166.66} 
                  y="170" 
                  textAnchor="middle" 
                  className="text-xs fill-gray-500"
                >
                  {quarter}
                </text>
              ))}
              
              {/* Cost line */}
              <path 
                d="M100,60 L200,60 L366.66,80 L533.33,100 L700,145" 
                fill="none" 
                stroke="url(#cost-gradient)" 
                strokeWidth="3" 
                strokeLinecap="round" 
              />
              
              {/* Data points */}
              {[
                [100, 60], [200, 60], [366.66, 80], [533.33, 100], [700, 145]
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="6" fill="url(#cost-gradient)" />
              ))}
              
              {/* Annotations */}
              <text x="120" y="40" className="text-xs fill-gray-700">Current price</text>
              <text x="380" y="65" className="text-xs fill-gray-700">New architecture</text>
              <text x="550" y="85" className="text-xs fill-gray-700">Volume optimization</text>
              <text x="680" y="130" className="text-xs fill-gray-700">Final pricing</text>
              
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="cost-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1EAEDB" />
                  <stop offset="100%" stopColor="#894FFC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
