import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'products';
  onNavigate: (view: 'home' | 'products') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#products-page') {
      onNavigate('products');
    } else {
      if (currentView === 'products') {
        onNavigate('home');
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
    { name: 'PJESËT', href: '#products-page' },
    { name: 'KONTAKTI', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/95 border-b-2 border-red-900/50 backdrop-blur-md shadow-[0_5px_30px_rgba(220,38,38,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32"> 
          
          {/* LEFT SIDE: LOGO & MENU ITEMS GROUPED */}
          <div className="flex items-center gap-6 md:gap-12">
            
            {/* LOGO AREA - STRICTLY LEFT */}
            <div className="flex-shrink-0 flex items-center cursor-pointer group relative" onClick={(e) => handleNavClick('#hero', e)}>
               {/* Animated Background Glow */}
               <div className="absolute inset-0 bg-red-600 rounded-full blur-3xl opacity-20 group-hover:opacity-60 animate-pulse transition-all duration-500"></div>
               
               {!imgError ? (
                 /* 
                    ---------------------------------------------------------------------------------
                    KUJDES: KETU NDRYSHOHET LOGOJA
                    Sigurohu qe ke nje foto me emrin "logo.png" ne folderin "public".
                    Nese fotoja jote e ka emrin ndryshe (psh: mylogo.jpg), ndryshoje "src" me poshte.
                    ---------------------------------------------------------------------------------
                 */
                 <img 
                  src="https://ibb.co/MDbgp8LQ" 
                  alt="Auto Japan Erolli" 
                  className="h-20 md:h-28 w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 hover-rumble"
                  onError={() => setImgError(true)}
                />
               ) : (
                 <div className="flex flex-col items-start relative z-10 border-l-4 border-red-600 pl-3">
                     <span className="font-aggressive text-2xl md:text-3xl text-white italic tracking-tighter leading-none" style={{textShadow: '0 0 10px rgba(255,255,255,0.5)'}}>
                       AUTO JAPAN
                     </span>
                     <span className="font-aggressive text-3xl md:text-4xl text-red-600 italic tracking-tighter leading-none" style={{textShadow: '0 0 20px rgba(220,38,38,0.8)'}}>
                       EROLLI
                     </span>
                 </div>
               )}
            </div>

            {/* DESKTOP MENU - PLACED LEFT (NEXT TO LOGO) */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4 lg:space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className={`font-aggressive px-2 py-2 text-lg lg:text-xl transition-all duration-200 cursor-pointer relative overflow-hidden group ${
                      (link.href === '#products-page' && currentView === 'products') 
                        ? 'text-red-600' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10 group-hover:tracking-wider transition-all duration-300 inline-block">{link.name}</span>
                    {/* Aggressive Hover Effect */}
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform skew-x-[-20deg] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: PHONE CTA */}
          <div className="hidden md:block">
            <a 
              href={`tel:${'044 136 336'.replace(/\s/g, '')}`}
              className="relative overflow-hidden bg-red-600 text-white font-bold py-3 px-6 lg:px-8 skew-x-[-12deg] inline-block transition-all hover:scale-105 hover:bg-red-700 hover:shadow-[0_0_25px_rgba(220,38,38,0.8)] cursor-pointer group"
            >
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[20deg]"></div>
              <span className="skew-x-[12deg] inline-block flex items-center gap-2 text-lg">
                <Phone size={22} className="animate-rumble" /> 
                <span className="flex flex-col leading-none text-base font-black text-right">
                  <span>044 136 336</span>
                  <span>048 136 336</span>
                </span>
              </span>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-red-600 hover:text-white hover:bg-red-900 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-black border-t-4 border-red-600 animate-slide-up shadow-[0_10px_40px_rgba(220,38,38,0.3)]">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {/* Logo in Mobile Menu as well */}
            <div className="flex justify-center mb-6 pb-4 border-b border-gray-900">
               {!imgError ? (
                 <img src="https://ibb.co/MDbgp8LQ" alt="Logo" className="h-24 w-auto animate-pulse" />
               ) : (
                 <span className="font-aggressive text-3xl text-white">AUTO JAPAN <span className="text-red-600">EROLLI</span></span>
               )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className="font-aggressive text-gray-300 hover:text-red-600 hover:translate-x-4 transition-all duration-300 block px-3 py-3 text-3xl border-l-4 border-transparent hover:border-red-600 bg-gradient-to-r from-transparent hover:from-red-900/20"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-8 pt-4 border-t border-gray-800 flex flex-col items-center gap-4">
                 <a href="tel:044136336" className="flex items-center justify-center gap-3 text-red-500 font-black text-2xl hover:text-white transition-colors">
                    <Phone className="animate-bounce" /> 044 136 336
                 </a>
                 <a href="tel:048136336" className="flex items-center justify-center gap-3 text-red-500 font-black text-2xl hover:text-white transition-colors">
                    <Phone className="animate-bounce" /> 048 136 336
                 </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
