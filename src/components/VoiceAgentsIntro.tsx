
import { Mic, Clock, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VoiceAgentsIntro = () => {
  const features = [
    {
      icon: <Mic className="h-10 w-10 text-comsync-blue" />,
      title: "Human-like Calls",
      description: "Our AI agents conduct natural conversations with human-like intonation, pauses, and comprehension."
    },
    {
      icon: <Clock className="h-10 w-10 text-comsync-blue" />,
      title: "24/7 Availability",
      description: "Never miss an opportunity with AI agents that work around the clock, processing thousands of calls simultaneously."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-comsync-blue" />,
      title: "Real-time Insights",
      description: "Analyze conversations as they happen with sentiment analysis and actionable business intelligence."
    }
  ];

  return (
    <section id="what-are-voice-agents" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">What Are Voice AI Agents?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Voice AI agents are specialized conversational AI systems trained to handle specific vertical domains with deep expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg animate-on-scroll card-hover">
              <CardContent className="p-8">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 relative p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 font-display">How It Works</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-comsync-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">1</span>
                  <p>Incoming call is processed through our speech-to-text engine</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-comsync-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">2</span>
                  <p>Domain-specific AI understands context and intent</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-comsync-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">3</span>
                  <p>Response is generated and converted to natural speech</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-comsync-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">4</span>
                  <p>Conversation is analyzed for insights and continuous improvement</p>
                </li>
              </ol>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100">
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <div>Incoming: Customer Query</div>
                  <div>Processing...</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-comsync-blue">
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2M1 8h22M8.5 8a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1V7a1 1 0 0 1-1 1h-7Z"/>
                      </svg>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm">
                      "I'm interested in restructuring my loan payment plan."
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="bg-comsync-blue rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M12 6v12M6 12h12"/>
                      </svg>
                    </div>
                    <div className="bg-comsync-blue/10 rounded-lg p-3 text-sm">
                      <div className="mb-1 text-xs text-gray-500">Sentiment: Interested | Intent: Payment Plan Modification</div>
                      "I'd be happy to help you restructure your payment plan. Based on your account, I can offer several options..."
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <div>Response Time: 1.2s</div>
                    <div>Accuracy: 98.7%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAgentsIntro;
