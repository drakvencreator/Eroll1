import React from 'react';
import { ChevronRight, ChevronsDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Motion/Speed Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=1920&auto=format&fit=crop" 
          alt="Japanese Car Racing" 
          className="w-full h-full object-cover animate-speed opacity-60 contrast-125 saturate-0" // Grayscale start, maybe
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay"></div>
        
        {/* Animated Speed Lines (CSS based) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-[20%] left-0 w-full h-[1px] bg-white animate-slide-right" style={{animationDuration: '2s'}}></div>
            <div className="absolute top-[60%] left-0 w-full h-[1px] bg-red-600 animate-slide-left" style={{animationDuration: '3s'}}></div>
            <div className="absolute top-[80%] left-0 w-full h-[2px] bg-white animate-slide-right" style={{animationDuration: '1.5s'}}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-block bg-red-600 skew-x-[-12deg] mb-8 animate-slide-left" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center gap-2 px-6 py-1 border border-white/20">
               <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
               <h2 className="text-white font-black tracking-[0.3em] uppercase text-sm md:text-lg skew-x-[12deg]">
                 Japanese Performance Parts
               </h2>
            </div>
          </div>
          
          {/* Main Title with Glitch Effect */}
          <h1 className="font-aggressive text-6xl sm:text-8xl lg:text-[10rem] text-white leading-[0.85] mb-8 italic drop-shadow-2xl animate-slide-left" style={{animationDelay: '0.4s'}}>
            DOMINIM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 hover-glitch inline-block cursor-default" style={{ textShadow: '0 0 30px rgba(220,38,38,0.5)' }}>
              TOTAL
            </span> <span className="text-outline-white opacity-50">NË RRUGË</span>
          </h1>
          
          {/* Description */}
          <p className="text-gray-200 text-xl sm:text-2xl mb-12 max-w-2xl font-bold italic tracking-wide border-l-8 border-red-600 pl-8 bg-black/60 backdrop-blur-md py-4 animate-slide-up" style={{animationDelay: '0.8s'}}>
            Pjesë origjinale për bisha japoneze. <span className="text-red-500">Fuqia</span>, <span className="text-red-500">shpejtësia</span> dhe <span className="text-red-500">saktësia</span> që meriton makina jote.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up" style={{animationDelay: '1s'}}>
            <a 
              href="#contact" 
              className="group relative bg-red-600 hover:bg-red-700 text-white font-black text-2xl py-6 px-14 skew-x-[-12deg] transition-all duration-200 hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.4)] overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute top-0 left-0 w-20 h-full bg-white/30 skew-x-[20deg] -translate-x-20 group-hover:animate-slide-right"></div>
              
              <span className="skew-x-[12deg] inline-flex items-center gap-4 relative z-10">
                NA KONTAKTO <ChevronRight className="group-hover:translate-x-2 transition-transform w-8 h-8" strokeWidth={4} />
              </span>
            </a>
            
            <a 
              href="#products"
              className="group bg-transparent border-2 border-white/30 hover:border-white text-white font-black text-2xl py-6 px-10 skew-x-[-12deg] transition-all hover:bg-white/10"
            >
                <span className="skew-x-[12deg] inline-block">KATALOGU</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ChevronsDown className="w-10 h-10 text-red-600" />
      </div>

      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-red-900 via-red-600 to-red-900"></div>
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-red-600/5 to-transparent skew-x-[-20deg] pointer-events-none"></div>
    </div>
  );
};

export default Hero;