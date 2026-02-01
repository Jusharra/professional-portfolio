import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from './ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Resume', href: '/resume' },
  { name: 'Projects', href: '/projects' },
  { name: 'Advisory', href: '/advisory' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="fixed w-full top-0 z-[55] bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 lg:p-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">QJG</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 transition-colors hover:text-blue-600 ${
                pathname === item.href ? 'text-blue-600' : 'text-gray-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="outline" size="sm" asChild>
            <a href="tel:+15628250082">Call AI Assistant</a>
          </Button>
          <Button size="sm" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-[9999]"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu panel */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[10000] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">QJG</span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            
            <div className="p-4">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block rounded-lg px-4 py-3 text-base font-semibold transition-colors hover:bg-gray-50 ${
                      pathname === item.href ? 'text-blue-600 bg-blue-50' : 'text-gray-900'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="tel:+15628250082">Call AI Assistant</a>
                </Button>
                <Button className="w-full justify-start" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}