
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const Founders = () => {
  const founders = [
    {
      name: "Chaitanya Aggarwal",
      role: "Technical Co-founder",
      education: "CSE, IIT Bombay 2025",
      image: "https://via.placeholder.com/300x300?text=Chaitanya",
      linkedin: "https://linkedin.com/in/chaitanya-aggarwal",
      bio: "AI and machine learning expert with experience in building large-scale voice systems."
    },
    {
      name: "Ojas Jain",
      role: "Non-technical Co-founder",
      education: "Mechanical Engineering, IIT Bombay 2025",
      image: "https://via.placeholder.com/300x300?text=Ojas",
      linkedin: "https://linkedin.com/in/ojas-jain",
      bio: "Business development professional with experience in finance and technology sectors."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Meet the <span className="gradient-text">Founders</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate technologists building the future of voice AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg animate-on-scroll">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 overflow-hidden">
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 bg-gradient-to-br from-white to-blue-50">
                    <h3 className="text-xl font-bold mb-1 font-display">{founder.name}</h3>
                    <p className="text-comsync-blue mb-1 font-medium">{founder.role}</p>
                    <p className="text-sm text-gray-500 mb-4">{founder.education}</p>
                    <p className="mb-5 text-gray-700">{founder.bio}</p>
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-comsync-blue hover:text-comsync-darkBlue transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
