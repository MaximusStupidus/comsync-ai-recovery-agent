
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Briefcase, Coins, Building, Phone } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
  agents: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

const UseCases = () => {
  const [activeTab, setActiveTab] = useState<string>("finance");

  const useCases: Record<string, UseCase> = {
    finance: {
      icon: <Briefcase className="h-12 w-12 text-comsync-blue" />,
      title: "Asset Management AI",
      description: "Our AI agents optimize client interactions across the asset management lifecycle, from prospecting to ongoing portfolio reviews.",
      agents: [
        "Voice Agent - Call scheduling and follow-ups",
        "Presentation Agent - Portfolio reviews and recommendations",
        "Onboarding Agent - Seamless client onboarding"
      ],
      stats: [
        { label: "Avg Conversion Uplift", value: "+42%" },
        { label: "Onboarding Time Saved", value: "68%" }
      ]
    },
    debt: {
      icon: <Coins className="h-12 w-12 text-comsync-blue" />,
      title: "Debt Collection AI",
      description: "Specialized agents that manage the entire debt collection process with empathy, compliance, and effectiveness.",
      agents: [
        "Collector Agent - Reaches out, follows up, persuades",
        "Manager Agent - Ensures continuity, conflict escalation",
        "Marketing Agent - Markets loans, builds trust"
      ],
      stats: [
        { label: "Recovery Rate Uplift", value: "+48%" },
        { label: "Call Follow-up Success", value: "93%" }
      ]
    },
    hotel: {
      icon: <Building className="h-12 w-12 text-comsync-blue" />,
      title: "Hotel AI",
      description: "Transform the guest experience with AI agents that handle everything from pre-arrival to post-check-out engagement.",
      agents: [
        "Booking Agent - Reservations and special requests",
        "Reception Agent - Check-in/out and room service",
        "Feedback Agent - Guest satisfaction and reviews",
        "Marketing Agent - Promotions and loyalty programs"
      ],
      stats: [
        { label: "Guest Satisfaction", value: "+22%" },
        { label: "Operational Efficiency", value: "+58%" }
      ]
    },
    support: {
      icon: <Phone className="h-12 w-12 text-comsync-blue" />,
      title: "Tech Support AI",
      description: "Technical support agents that understand complex issues and guide users to solutions 24/7.",
      agents: [
        "Customer Helpline - First-level technical support",
        "Relationship Agent - Account management and follow-ups",
        "Bug Reporting - Issue logging and escalation"
      ],
      stats: [
        { label: "Ticket Resolution Time", value: "-64%" },
        { label: "User Satisfaction", value: "92%" }
      ]
    }
  };

  const useCaseOptions = [
    { id: "finance", label: "Asset Management" },
    { id: "debt", label: "Debt Collection" },
    { id: "hotel", label: "Hospitality" },
    { id: "support", label: "Tech Support" },
  ];

  const currentUseCase = useCases[activeTab];

  return (
    <section id="use-cases" className="section-padding bg-gradient-to-b from-comsync-lightGray to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Use-Case <span className="gradient-text">Packages</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our specialized AI agents are tailored for specific industries and use cases.
          </p>
        </div>
        
        {/* Use case selection tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll">
          {useCaseOptions.map((option) => (
            <Button
              key={option.id}
              variant={activeTab === option.id ? "default" : "outline"}
              className={`
                ${activeTab === option.id 
                  ? "bg-comsync-blue hover:bg-comsync-darkBlue text-white" 
                  : "text-comsync-charcoal border-comsync-blue/30"}
              `}
              onClick={() => setActiveTab(option.id)}
            >
              {option.label}
            </Button>
          ))}
        </div>
        
        <Card className="border-none shadow-xl overflow-hidden animate-on-scroll">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-comsync-blue/10 to-comsync-indigo/10 p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    {currentUseCase.icon}
                    <h3 className="text-2xl font-bold font-display">{currentUseCase.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{currentUseCase.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Included Agents:</h4>
                    <ul className="space-y-2">
                      {currentUseCase.agents.map((agent, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-comsync-blue">
                            <path d="M20 6 9 17l-5-5"/>
                          </svg>
                          <span>{agent}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    {currentUseCase.stats.map((stat, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
                        <div className="text-sm text-gray-500">{stat.label}</div>
                        <div className="text-2xl font-bold text-comsync-charcoal font-display">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  {activeTab === "debt" && (
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <h4 className="font-semibold mb-4">Recovery Rate Comparison</h4>
                      <div className="h-64 relative">
                        <svg viewBox="0 0 400 200" className="w-full h-full">
                          {/* Background grid */}
                          <g className="grid">
                            {[0, 25, 50, 75, 100].map((y, i) => (
                              <g key={i}>
                                <line 
                                  x1="50" 
                                  y1={200 - y * 2} 
                                  x2="350" 
                                  y2={200 - y * 2} 
                                  stroke="#e5e7eb" 
                                  strokeWidth="1" 
                                />
                                <text 
                                  x="40" 
                                  y={200 - y * 2 + 5} 
                                  textAnchor="end" 
                                  className="text-xs fill-gray-500"
                                >
                                  {y}%
                                </text>
                              </g>
                            ))}
                          </g>
                          
                          {/* X-axis */}
                          <line x1="50" y1="200" x2="350" y2="200" stroke="#64748b" strokeWidth="1" />
                          
                          {/* Month labels */}
                          {['Month 1', 'Month 2', 'Month 3'].map((month, i) => (
                            <text 
                              key={i} 
                              x={100 + i * 100} 
                              y="220" 
                              textAnchor="middle" 
                              className="text-xs fill-gray-500"
                            >
                              {month}
                            </text>
                          ))}
                          
                          {/* Traditional bar */}
                          <rect x="80" y="140" width="40" height="60" fill="#94a3b8" />
                          <rect x="180" y="120" width="40" height="80" fill="#94a3b8" />
                          <rect x="280" y="100" width="40" height="100" fill="#94a3b8" />
                          
                          {/* Comsync bar */}
                          <rect x="130" y="90" width="40" height="110" fill="url(#blue-gradient)" />
                          <rect x="230" y="40" width="40" height="160" fill="url(#blue-gradient)" />
                          <rect x="330" y="20" width="40" height="180" fill="url(#blue-gradient)" />
                          
                          {/* Gradient definition */}
                          <defs>
                            <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#1EAEDB" />
                              <stop offset="100%" stopColor="#894FFC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="flex justify-center gap-8 pt-4">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 bg-gradient-to-r from-comsync-blue to-comsync-indigo rounded-full"></span>
                          <span className="text-sm">With Comsync</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                          <span className="text-sm">Traditional</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "hotel" && (
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <h4 className="font-semibold mb-4">Guest Journey Timeline</h4>
                      <div className="relative py-8">
                        {/* Timeline */}
                        <div className="absolute top-8 left-4 w-0.5 h-[calc(100%-32px)] bg-gray-200"></div>
                        
                        <div className="space-y-8">
                          {[
                            { title: "Pre-Arrival", tasks: "Booking confirmation, room preferences, special requests" },
                            { title: "Check-In", tasks: "Room assignment, welcome call, facility information" },
                            { title: "Stay", tasks: "Room service, concierge assistance, issue resolution" },
                            { title: "Check-Out", tasks: "Express check-out, feedback collection, future booking" }
                          ].map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                              <div className="relative">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-comsync-blue to-comsync-indigo flex items-center justify-center text-white">
                                  {index + 1}
                                </div>
                              </div>
                              <div>
                                <h5 className="font-medium">{step.title}</h5>
                                <p className="text-sm text-gray-500">{step.tasks}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "finance" && (
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <h4 className="font-semibold mb-4">Conversion Funnel</h4>
                      <div className="h-64 relative">
                        <svg viewBox="0 0 400 200" className="w-full h-full">
                          {/* Traditional funnel */}
                          <path d="M100,20 L170,20 L150,80 L130,80 L110,140 L90,140 L100,20" fill="#94a3b8" opacity="0.7" />
                          
                          {/* Comsync funnel */}
                          <path d="M230,20 L300,20 L290,80 L280,80 L270,140 L240,140 L230,20" fill="url(#blue-gradient)" opacity="0.9" />
                          
                          {/* Labels */}
                          <text x="100" y="40" className="text-xs fill-gray-700">Prospects</text>
                          <text x="100" y="100" className="text-xs fill-gray-700">Leads</text>
                          <text x="100" y="160" className="text-xs fill-gray-700">Customers</text>
                          
                          <text x="230" y="40" className="text-xs fill-gray-700">Prospects</text>
                          <text x="230" y="100" className="text-xs fill-gray-700">Leads</text>
                          <text x="230" y="160" className="text-xs fill-gray-700">Customers</text>
                          
                          {/* Percentages */}
                          <text x="135" y="40" textAnchor="middle" className="text-xs fill-white font-medium">100%</text>
                          <text x="130" y="100" textAnchor="middle" className="text-xs fill-white font-medium">42%</text>
                          <text x="100" y="160" textAnchor="middle" className="text-xs fill-white font-medium">12%</text>
                          
                          <text x="265" y="40" textAnchor="middle" className="text-xs fill-white font-medium">100%</text>
                          <text x="265" y="100" textAnchor="middle" className="text-xs fill-white font-medium">68%</text>
                          <text x="255" y="160" textAnchor="middle" className="text-xs fill-white font-medium">38%</text>
                          
                          {/* Titles */}
                          <text x="135" y="190" textAnchor="middle" className="text-xs fill-gray-700">Traditional</text>
                          <text x="265" y="190" textAnchor="middle" className="text-xs fill-gray-700">With Comsync</text>
                          
                          {/* Gradient definition */}
                          <defs>
                            <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#1EAEDB" />
                              <stop offset="100%" stopColor="#894FFC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "support" && (
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <h4 className="font-semibold mb-4">Ticket Resolution Time</h4>
                      <div className="h-64 relative">
                        <svg viewBox="0 0 400 200" className="w-full h-full">
                          {/* Traditional */}
                          <rect x="100" y="20" width="60" height="30" fill="#94a3b8" />
                          <rect x="100" y="60" width="120" height="30" fill="#94a3b8" />
                          <rect x="100" y="100" width="180" height="30" fill="#94a3b8" />
                          
                          {/* Comsync */}
                          <rect x="100" y="140" width="40" height="30" fill="url(#blue-gradient)" />
                          <rect x="100" y="180" width="60" height="30" fill="url(#blue-gradient)" />
                          
                          {/* Labels */}
                          <text x="90" y="35" textAnchor="end" className="text-xs fill-gray-700">Simple</text>
                          <text x="90" y="75" textAnchor="end" className="text-xs fill-gray-700">Medium</text>
                          <text x="90" y="115" textAnchor="end" className="text-xs fill-gray-700">Complex</text>
                          
                          <text x="170" y="35" textAnchor="middle" className="text-xs fill-white">12 min</text>
                          <text x="200" y="75" textAnchor="middle" className="text-xs fill-white">28 min</text>
                          <text x="250" y="115" textAnchor="middle" className="text-xs fill-white">48 min</text>
                          
                          <text x="120" y="155" textAnchor="middle" className="text-xs fill-white">4 min</text>
                          <text x="130" y="195" textAnchor="middle" className="text-xs fill-white">10 min</text>
                          
                          <text x="310" y="35" textAnchor="start" className="text-xs fill-gray-700">Traditional</text>
                          <text x="310" y="155" textAnchor="start" className="text-xs fill-gray-700">With Comsync</text>
                          
                          {/* Legend colors */}
                          <rect x="290" y="28" width="15" height="15" fill="#94a3b8" />
                          <rect x="290" y="148" width="15" height="15" fill="url(#blue-gradient)" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Mobile carousel for use cases */}
        <div className="mt-10 md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {Object.entries(useCases).map(([id, useCase]) => (
                <CarouselItem key={id}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          {useCase.icon}
                          <h3 className="font-bold">{useCase.title}</h3>
                        </div>
                        <p className="text-sm mb-4">{useCase.description}</p>
                        <Button 
                          onClick={() => setActiveTab(id)}
                          className="w-full bg-comsync-blue hover:bg-comsync-darkBlue text-white"
                        >
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
