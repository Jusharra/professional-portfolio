import { Link } from 'react-router-dom';
import { ArrowRight, Download, Calendar, Phone, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent)] bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent)] bg-[radial-gradient(circle_at_40%_80%,rgba(120,119,198,0.2),transparent)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            {/* CISSP Badge */}
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
              <Calendar className="mr-2 h-4 w-4" />
              Building AI Systems for Continuous Compliance
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-blue-100">Quashaya</span>
              <span className="block text-white">J. Goree</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-blue-100 mb-8 space-y-2">
              <div className="flex items-center">
                <Shield className="mr-3 h-6 w-6 text-blue-300" />
                <span>AI Governance & GRC Engineer</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 mr-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                </div>
                <span>AI Security Practitioner</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 mr-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                </div>
                <span>Enterprise AI Risk, Audit & Continuous Assurance</span>
              </div>
            </div>
            
            <p className="text-lg text-blue-100 mb-8 max-w-2xl leading-relaxed">
              My work spans applied AI security labs and real-world production systems, including Compliance-as-Code Terraform Guardrails, 
              GenAI DLP enforcement, AWS AI Continuous Compliance, SOC 2 evidence automation, and Azure agentic AI security research. 
              I focus on building governed, identity-aware systems that reduce risk and support rapid delivery across healthcare and financial services. 
              Currently shipping platforms include Patient Intake AI, Comply Guardian, a Laundromat SaaS product, and a premium gold e-commerce platform.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" asChild>
                <Link to="/resume" className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-white hover:text-blue-900" asChild>
                <a href="tel:+15628250082" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call AI Assistant
                </a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-blue-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">8+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">6+</div>
                <div className="text-sm text-blue-200">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-blue-200">Projects Shipped</div>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/2.png"
                  alt="Quashaya J. Goree"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              
              <div className="absolute bottom-8 -left-4 bg-white rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-gray-900">CISSP Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-1 h-8 bg-white rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
}