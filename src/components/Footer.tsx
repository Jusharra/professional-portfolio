import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Linkedin, Github, Mail, Phone, Youtube } from 'lucide-react';

export default function Footer() {
  const [currentYear] = useState<number>(new Date().getFullYear());

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Quashaya Goree</span>
            </div>
            <p className="text-gray-300 text-sm">
              AIGovernance & GRC Engineer building secure, scalable, identity-aware systems for the enterprise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/resume" className="text-gray-300 hover:text-blue-400 transition-colors">Resume</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link to="/advisory" className="text-gray-300 hover:text-blue-400 transition-colors">Advisory</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Expertise</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Cybersecurity Architecture</li>
              <li>AI Automation Systems</li>
              <li>Cloud Security (AWS/Azure)</li>
              <li>Identity Governance</li>
              <li>Continuous Compliance Assurance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <a href="mailto:qjgoree@gmail.com" className="hover:text-blue-400 transition-colors">
                  qjgoree@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <a href="tel:+15628250082" className="hover:text-blue-400 transition-colors">
                  (562) 825 0082
                </a>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/quashayajgoree/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://github.com/Jusharra?tab=repositories" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@first-choicecyber" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Quashaya Goree. All rights reserved. | 
            <Link to="/privacy" className="text-blue-400 hover:text-blue-300 ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="text-blue-400 hover:text-blue-300 ml-1">Terms</Link>
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Last updated: September {currentYear} • Currently accepting new opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}