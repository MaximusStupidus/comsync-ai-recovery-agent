
import { Card, CardContent } from "@/components/ui/card";
import { Shield, GitMerge, MessageSquare } from "lucide-react";

const HowDifferent = () => {
  return (
    <section id="how-different" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">How We're <span className="gradient-text">Different</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our approach combines vertical expertise with cutting-edge AI to deliver unmatched performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-display">Guardrails + Vertical Integration</h3>
                  <p className="text-gray-600 mb-6">
                    Unlike generic AI models, our agents are built with domain-specific guardrails and
                    vertical integration that ensures they operate with expert knowledge and compliance.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-comsync-blue shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Compliance Guardrails</span>
                        <p className="text-sm text-gray-500">Built-in regulatory compliance for sensitive industries</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <GitMerge className="h-5 w-5 text-comsync-blue shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Domain Expertise</span>
                        <p className="text-sm text-gray-500">Industry-specific training with vertical knowledge</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-comsync-blue shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Context-Aware</span>
                        <p className="text-sm text-gray-500">Makes connections between past interactions and current context</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-xl font-bold mb-6 font-display">Market Share: Generic vs Vertical AI Agents</h3>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="relative h-80">
                <div className="absolute inset-0">
                  {/* SVG Chart */}
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Background grid */}
                    <g className="grid">
                      {[0, 25, 50, 75, 100].map((y, i) => (
                        <g key={i}>
                          <line 
                            x1="50" 
                            y1={300 - y * 2.5} 
                            x2="380" 
                            y2={300 - y * 2.5} 
                            stroke="#e5e7eb" 
                            strokeWidth="1" 
                          />
                          <text 
                            x="40" 
                            y={300 - y * 2.5 + 5} 
                            textAnchor="end" 
                            className="text-xs fill-gray-500"
                          >
                            {y}%
                          </text>
                        </g>
                      ))}
                    </g>
                    
                    {/* X-axis */}
                    <g className="x-axis">
                      <line x1="50" y1="250" x2="380" y2="250" stroke="#64748b" strokeWidth="1" />
                      
                      {/* Year labels */}
                      {['2021', '2022', '2023', '2024', '2025'].map((year, i) => (
                        <text 
                          key={i} 
                          x={50 + i * 82.5} 
                          y="270" 
                          textAnchor="middle" 
                          className="text-xs fill-gray-500"
                        >
                          {year}
                        </text>
                      ))}
                    </g>
                    
                    {/* Generic AI line */}
                    <path 
                      d="M50,50 L132.5,75 L215,110 L297.5,150 L380,175" 
                      fill="none" 
                      stroke="#94a3b8" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeDasharray="0"
                    />
                    
                    {/* Vertical AI line */}
                    <path 
                      d="M50,200 L132.5,165 L215,115 L297.5,65 L380,25" 
                      fill="none" 
                      stroke="url(#blue-gradient)" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                    />
                    
                    {/* Data points generic */}
                    {[
                      [50, 50], [132.5, 75], [215, 110], [297.5, 150], [380, 175]
                    ].map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="6" fill="#94a3b8" />
                    ))}
                    
                    {/* Data points vertical */}
                    {[
                      [50, 200], [132.5, 165], [215, 115], [297.5, 65], [380, 25]
                    ].map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="6" fill="url(#blue-gradient)" />
                    ))}
                    
                    {/* Gradient definitions */}
                    <defs>
                      <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1EAEDB" />
                        <stop offset="100%" stopColor="#894FFC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              
              <div className="flex justify-center gap-8 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-gradient-to-r from-comsync-blue to-comsync-indigo rounded-full"></span>
                  <span className="text-sm">Vertical AI Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                  <span className="text-sm">Generic AI Models</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Voice samples section */}
        <div className="mt-16 animate-on-scroll">
          <h3 className="text-xl font-bold mb-6 text-center font-display">Voice Sample Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="mb-3 flex justify-between">
                <h4 className="font-medium">Generic AI Voice</h4>
                <button className="text-comsync-blue flex items-center gap-1 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  Play
                </button>
              </div>
              <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="flex justify-center items-center space-x-1">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-gray-300 rounded-full"
                      style={{
                        height: `${Math.sin(i * 0.5) * 15 + 20}px`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Standard voice with less domain context and natural intonation
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="mb-3 flex justify-between">
                <h4 className="font-medium">Comsync Vertical AI Voice</h4>
                <button className="text-comsync-blue flex items-center gap-1 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  Play
                </button>
              </div>
              <div className="h-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
                <div className="flex justify-center items-center space-x-1">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-gradient-to-b from-comsync-blue to-comsync-indigo rounded-full"
                      style={{
                        height: `${Math.sin(i * 0.5) * 25 + 30}px`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Enhanced voice with domain expertise, natural pauses, and appropriate intonation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDifferent;
