import React, { useState } from 'react';
import { Menu, X, Phone, ShoppingGrid } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'products';
  onNavigate: (view: 'home' | 'products') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#products-page') {
      onNavigate('products');
    } else {
      if (currentView === 'products') {
        onNavigate('home');
        // Allow time for render then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'BALLINA', href: '#hero' },
    { name: 'RRETH NESH', href: '#about' },
    { name: 'PJESËT', href: '#products-page' }, // Special ID for page switch
    { name: 'KONTAKTI', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/95 border-b border-red-900/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={(e) => handleNavClick('#hero', e)}>
            <a className="font-aggressive text-2xl sm:text-3xl text-white italic tracking-tighter">
              AUTO JAPAN <span className="text-red-600">EROLLI</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`font-aggressive px-3 py-2 text-lg transition-colors duration-300 cursor-pointer ${
                    (link.href === '#products-page' && currentView === 'products') 
                      ? 'text-red-600 border-b-2 border-red-600' 
                      : 'text-gray-300 hover:text-red-500'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a href="#contact" onClick={(e) => handleNavClick('#contact', e)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 skew-x-[-12deg] inline-block transition-transform hover:scale-105 cursor-pointer">
              <span className="skew-x-[12deg] inline-block flex items-center gap-2">
                <Phone size={18} /> 044 136 336
              </span>
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-red-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className="font-aggressive text-gray-300 hover:text-red-500 block px-3 py-2 text-xl"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;