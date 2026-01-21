
import React from 'react';
import { ChevronRight, ChevronsDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* 
        ========================================
        AGGRESSIVE BACKGROUND LAYERS 
        ========================================
      */}

      {/* 1. Base Dark Layer */}
      <div className="absolute inset-0 bg-neutral-950 z-0"></div>

      {/* 2. Main Image with Heavy Processing */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1920&auto=format&fit=crop" 
          alt="Japanese JDM Leader" 
          className="w-full h-full object-cover animate-speed opacity-70 contrast-[1.4] brightness-75 saturate-50"
        />

        {/* 3. Glitch/Ghost Image Layer (Trippy effect) */}
        <div className="absolute inset-0 mix-blend-color-dodge opacity-0 animate-cyber-glitch pointer-events-none">
           <img 
            src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1920&auto=format&fit=crop" 
            alt="Glitch Layer" 
            className="w-full h-full object-cover translate-x-4 scale-105 filter hue-rotate-90"
          />
        </div>
        
        {/* 4. Cinematic Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/80"></div>
        
        {/* 5. Red Energy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-900/20 mix-blend-overlay animate-pulse"></div>
        
        {/* 6. Tech Textures & Scanlines */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-40 mix-blend-multiply"></div>
        <div className="absolute inset-0 scanline opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-soft-light"></div>

        {/* 7. Aggressive Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="particle w-1 h-1 bg-red-600 absolute top-1/2 left-1/4 rounded-full animate-float-1 box-shadow-glow"></div>
           <div className="particle w-1.5 h-1.5 bg-white absolute top-3/4 left-1/2 rounded-full animate-float-2 opacity-50"></div>
           <div className="particle w-2 h-2 bg-red-500 blur-sm absolute top-1/3 left-2/3 rounded-full animate-float-3"></div>
        </div>
      </div>

      {/* 
        ========================================
        CONTENT 
        ========================================
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 md:mt-0 flex flex-col justify-center h-full">
        <div className="max-w-6xl">
          
          {/* Top Badge - Blinking Warning Style */}
          <div className="flex items-center gap-4 mb-6 animate-slide-left" style={{animationDelay: '0.1s'}}>
             <div className="h-[2px] w-16 bg-red-600 animate-pulse shadow-[0_0_10px_red]"></div>
             <div className="border border-red-600/50 bg-black/50 px-3 py-1 skew-x-[-12deg]">
                <span className="text-red-500 font-black tracking-[0.3em] uppercase text-xs md:text-sm skew-x-[12deg] animate-flash">
                  SYSTEM ONLINE // AUTO JAPAN EROLLI
                </span>
             </div>
          </div>
          
          {/* Main Brand Title - HEAVY & IMPACTFUL */}
          <div className="relative mb-8 group">
            <h1 className="font-aggressive text-5xl sm:text-7xl lg:text-[9rem] text-white leading-[0.85] italic drop-shadow-2xl animate-slide-left" style={{animationDelay: '0.3s'}}>
              <span className="block hover:text-red-600 transition-colors duration-500">ZGJIDH</span>
              <span className="block text-outline-white hover:text-white transition-colors duration-500">ORIGJINALIN</span>
              <div className="relative mt-2 md:mt-4">
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-white z-10 filter drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                    LIDERËT E TREGUT
                  </span>
                  {/* Glitch Clone Behind */}
                  <span className="absolute top-0 left-0 -ml-[4px] -mt-[0px] text-red-600/60 animate-glitch skew-x-12 opacity-80 mix-blend-screen pointer-events-none blur-[1px]" aria-hidden="true">LIDERËT E TREGUT</span>
                  <span className="absolute top-0 left-0 ml-[4px] mt-[0px] text-blue-600/60 animate-glitch skew-x-[-12deg] opacity-80 mix-blend-screen pointer-events-none blur-[1px]" aria-hidden="true" style={{animationDirection: 'reverse'}}>LIDERËT E TREGUT</span>
              </div>
            </h1>
          </div>
          
          {/* Slogan Box - Tech Style */}
          <div className="relative animate-slide-up border-l-8 border-red-600 pl-6 md:pl-10 py-4 mb-12 bg-gradient-to-r from-black/80 to-transparent backdrop-blur-md max-w-3xl skew-x-[-6deg]" style={{animationDelay: '0.6s'}}>
             <div className="skew-x-[6deg]">
               <h2 className="text-2xl sm:text-4xl text-white font-bold italic mb-2 tracking-tighter">
                 KUALITETI NUK ËSHTË <span className="text-red-500">RASTËSI</span>.
               </h2>
               <p className="text-gray-300 text-lg sm:text-xl font-mono border-t border-gray-700 pt-2 mt-2">
                 Furnizuesi <span className="text-white font-black bg-red-600 px-1">NO.1</span> për pjesë japoneze. 
                 <span className="block md:inline mt-1 md:mt-0 md:ml-2">Inxhinieri e pastër. Dominim total.</span>
               </p>
             </div>
          </div>
          
          {/* Action Buttons - Aggressive Shapes */}
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up" style={{animationDelay: '0.9s'}}>
            <a 
              href="#products" 
              className="group relative bg-red-600 text-white font-black text-xl py-6 px-12 skew-x-[-20deg] transition-all duration-200 hover:scale-105 hover:bg-red-700 hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] overflow-hidden"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 skew-x-[20deg] w-full"></div>
              
              <span className="skew-x-[20deg] inline-flex items-center gap-3 relative z-10 tracking-wider">
                SHIKO KATALOGUN <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={4} />
              </span>
            </a>
            
            <a 
              href="#contact"
              className="group flex items-center justify-center gap-3 bg-transparent border-2 border-neutral-700 hover:border-white text-white font-bold text-xl py-6 px-10 skew-x-[-20deg] transition-all hover:bg-white/5 hover:text-red-500"
            >
                <span className="skew-x-[20deg] inline-flex items-center gap-2 tracking-wider">
                  <Star className="text-red-600 fill-red-600 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" /> NA KONTAKTO
                </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator - HUD Style */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-70 z-20 flex flex-col items-center gap-2 pointer-events-none">
          <div className="h-16 w-[1px] bg-gradient-to-b from-transparent to-red-600"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-red-500 font-bold animate-pulse">Scroll</span>
      </div>

      {/* Decorative Bottom Hazard Line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#dc2626_10px,#dc2626_20px)] opacity-50 z-20"></div>
    </div>
  );
};

export default Hero;
