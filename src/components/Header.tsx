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
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
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
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
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
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors hover:bg-gray-50 ${
                      pathname === item.href ? 'text-blue-600 bg-blue-50' : 'text-gray-900'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+15628250082">Call AI Assistant</a>
                </Button>
                <Button className="w-full" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}