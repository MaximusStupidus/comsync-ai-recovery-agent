
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-comsync-darkCharcoal text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-4 font-display">
              Com<span className="text-comsync-blue">Sync</span>
            </div>
            <p className="text-gray-300 max-w-sm mb-6">
              AI-powered vertical voice agents for specialized industries. Transforming customer interactions through intelligent automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:info@comsync.in" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+912269539336" className="text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 font-display">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 font-display">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">Asset Management</a></li>
                <li><a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">Debt Collection</a></li>
                <li><a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">Hospitality</a></li>
                <li><a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">Tech Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 font-display">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 shrink-0 text-comsync-blue" />
                  <a href="tel:+912269539336" className="text-gray-300 hover:text-white transition-colors">+91 22 6953 9336</a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 shrink-0 text-comsync-blue" />
                  <a href="mailto:info@comsync.in" className="text-gray-300 hover:text-white transition-colors">info@comsync.in</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 shrink-0 text-comsync-blue" />
                  <span className="text-gray-300">Mumbai, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Comsync Technologies. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
