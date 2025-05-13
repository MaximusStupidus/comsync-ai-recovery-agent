
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-lg text-comsync-charcoal max-w-2xl mx-auto">
            See how leading financial institutions are transforming their collections with Comsync.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-comsync-charcoal mb-4">
              "Comsync's AI agents have revolutionized our collection process. We've seen a 35% increase in recovery rates while reducing operational costs by 40%."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="font-semibold text-comsync-blue">RC</span>
              </div>
              <div>
                <div className="font-semibold">Rajesh C.</div>
                <div className="text-sm text-comsync-gray">Head of Collections, Major NBFC</div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-comsync-charcoal mb-4">
              "The most impressive aspect is how human-like the agents sound. Our customers can't tell they're speaking with AI, which maintains our relationship quality."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="font-semibold text-comsync-blue">SM</span>
              </div>
              <div>
                <div className="font-semibold">Sarah M.</div>
                <div className="text-sm text-comsync-gray">VP Customer Experience, Regional Bank</div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-comsync-charcoal mb-4">
              "Compliance has always been our biggest concern. Comsync's system ensures 100% adherence to regulations while still maintaining excellent collection effectiveness."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="font-semibold text-comsync-blue">JT</span>
              </div>
              <div>
                <div className="font-semibold">James T.</div>
                <div className="text-sm text-comsync-gray">Chief Compliance Officer, Credit Union</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#demo" className="inline-block text-comsync-blue hover:text-comsync-darkBlue transition-colors underline">
            View more case studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
