import React from 'react';
import { ChevronRight, ChevronsDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Background Image - NISSAN GT-R / MARKET LEADER VIBE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1920&auto=format&fit=crop" 
          alt="Japanese JDM Leader" 
          className="w-full h-full object-cover animate-speed opacity-60 contrast-125 brightness-75"
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/60"></div>
        
        {/* Tech Patterns */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay"></div>
        
        {/* ANIMATIONS */}
        {/* Radar Scanline */}
        <div className="absolute inset-0 scanline opacity-10 pointer-events-none"></div>

        {/* Atmosphere / Fog */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-red-900/20 to-transparent blur-3xl animate-pulse"></div>

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="particle w-1 h-1 bg-red-600 absolute top-1/2 left-1/4 rounded-full animate-float-1 box-shadow-glow"></div>
           <div className="particle w-1.5 h-1.5 bg-white absolute top-3/4 left-1/2 rounded-full animate-float-2 opacity-50"></div>
           <div className="particle w-1 h-1 bg-red-500 absolute top-1/3 left-2/3 rounded-full animate-float-3 blur-[1px]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 md:mt-0 flex flex-col justify-center h-full">
        <div className="max-w-6xl">
          
          {/* Top Badge */}
          <div className="flex items-center gap-4 mb-6 animate-slide-left" style={{animationDelay: '0.1s'}}>
             <div className="h-[2px] w-12 bg-red-600"></div>
             <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-sm md:text-base animate-pulse">
               AUTO JAPAN EROLLI
             </span>
          </div>
          
          {/* Main Brand Title - Updated to "ZGJIDH ORIGJINALIN LIDERET E TREGUT" */}
          <div className="relative mb-8">
            <h1 className="font-aggressive text-5xl sm:text-7xl lg:text-[8.5rem] text-white leading-[0.9] italic drop-shadow-2xl animate-slide-left" style={{animationDelay: '0.3s'}}>
              ZGJIDH <br className="hidden md:block" /> ORIGJINALIN <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-white mt-2 md:mt-4">
                LIDERËT E TREGUT
                {/* Glitch Shadow Effect */}
                <span className="absolute top-0 left-0 -ml-[2px] -mt-[2px] text-red-600/40 animate-glitch skew-x-12 opacity-50 mix-blend-screen pointer-events-none" aria-hidden="true">LIDERËT E TREGUT</span>
              </span>
            </h1>
          </div>
          
          {/* Unique Slogan/Description */}
          <div className="relative animate-slide-up border-l-4 border-red-600 pl-6 md:pl-10 py-2 mb-12 bg-gradient-to-r from-black/60 to-transparent backdrop-blur-sm max-w-3xl" style={{animationDelay: '0.6s'}}>
             <h2 className="text-2xl sm:text-3xl text-white font-bold italic mb-2">
               KUALITETI NUK ËSHTË RASTËSI.
             </h2>
             <p className="text-gray-300 text-lg sm:text-xl font-medium tracking-wide">
               Furnizuesi numër 1 për pjesë japoneze në rajon. Nga Toyota tek Mitsubishi, ne ofrojmë vetëm <span className="text-red-500 font-bold">përsosmëri mekanike</span> për makinën tuaj.
             </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up" style={{animationDelay: '0.9s'}}>
            <a 
              href="#products" 
              className="group relative bg-red-600 hover:bg-red-700 text-white font-black text-xl py-5 px-10 skew-x-[-12deg] transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(220,38,38,0.4)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[20deg]"></div>
              <span className="skew-x-[12deg] inline-flex items-center gap-3 relative z-10">
                SHIKO KATALOGUN <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </span>
            </a>
            
            <a 
              href="#contact"
              className="group flex items-center justify-center gap-3 bg-transparent border-2 border-neutral-600 hover:border-white text-white font-bold text-xl py-5 px-10 skew-x-[-12deg] transition-all hover:bg-white/5"
            >
                <span className="skew-x-[12deg] inline-flex items-center gap-2">
                  <Star className="text-red-600 fill-red-600 w-5 h-5" /> NA KONTAKTO
                </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Floating Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70 z-20 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-red-500 font-bold">Scroll Down</span>
          <ChevronsDown className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
      </div>

      {/* Decorative Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent z-20 shadow-[0_0_20px_rgba(220,38,38,0.8)]"></div>
    </div>
  );
};

export default Hero;