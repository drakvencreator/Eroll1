import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Motion/Speed Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=1920&auto=format&fit=crop" 
          alt="Japanese Car Racing" 
          className="w-full h-full object-cover animate-speed opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        {/* Grid Overlay for Industrial Feel */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
        <div className="max-w-4xl">
          <div className="inline-block bg-red-600 skew-x-[-12deg] mb-6 animate-pulse">
            <h2 className="text-white font-black tracking-widest uppercase py-1 px-4 text-xl skew-x-[12deg]">
              Auto Japan Erolli
            </h2>
          </div>
          
          <h1 className="font-aggressive text-5xl sm:text-7xl lg:text-9xl text-white leading-[0.9] mb-8 italic drop-shadow-2xl">
            DOMINIM <br />
            <span className="text-red-600 text-outline-white">TOTAL</span> NË RRUGË.
          </h1>
          
          <p className="text-gray-200 text-xl sm:text-2xl mb-10 max-w-2xl font-bold italic tracking-wide border-l-4 border-red-600 pl-6 bg-black/40 backdrop-blur-sm py-2">
            Pjesë origjinale për bisha japoneze. Fuqia, shpejtësia dhe saktësia që meriton makina jote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="group bg-red-600 hover:bg-red-700 text-white font-black text-2xl py-5 px-12 skew-x-[-12deg] transition-all duration-200 hover:scale-110 shadow-[0_0_20px_rgba(220,38,38,0.6)]"
            >
              <span className="skew-x-[12deg] inline-flex items-center gap-3">
                NA KONTAKTO <ChevronRight className="group-hover:translate-x-2 transition-transform w-8 h-8" strokeWidth={3} />
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Speed Lines */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-red-600 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/10 to-transparent skew-x-[-20deg]"></div>
    </div>
  );
};

export default Hero;