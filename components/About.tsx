
import React from 'react';
import { ShieldCheck, Wrench, Zap } from 'lucide-react';
import { CAR_BRANDS, PART_BRANDS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(220,38,38,0.05)_25%,rgba(220,38,38,0.05)_50%,transparent_50%,transparent_75%,rgba(220,38,38,0.05)_75%,rgba(220,38,38,0.05)_100%)] bg-[size:40px_40px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="font-aggressive text-5xl sm:text-7xl text-white mb-6 leading-[0.9]">
              NE JEMI <span className="text-red-600 inline-block hover-rumble cursor-default">STANDARTI.</span><br/>
              TE TJERËT JANË <span className="text-outline-white">ALTERNATI VË.</span>
            </h2>
            <div className="h-2 w-32 bg-red-600 mb-8 skew-x-[-20deg] animate-pulse"></div>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed font-medium">
              <strong className="text-white text-xl">Auto Japan Erolli</strong> nuk është thjesht një dyqan pjesësh. Ne jemi <span className="text-red-500 font-bold">tempulli i performancës japoneze</span> në Pejë. Kur ju vini tek ne, ju nuk blini thjesht metal dhe plastikë – ju blini siguri, dominim dhe inxhinieri të pastër.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {/* Feature 1 */}
              <div className="group flex flex-col items-center p-6 border border-white/10 bg-neutral-900/50 hover:bg-red-900/40 transition-all duration-300 skew-x-[-6deg] hover:-translate-y-4 hover:shadow-[0_10px_0_#dc2626]">
                <ShieldCheck className="text-red-600 w-12 h-12 mb-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-black text-white uppercase text-lg italic skew-x-[6deg] text-center">Origjinalitet 100%</span>
              </div>
              {/* Feature 2 */}
              <div className="group flex flex-col items-center p-6 border border-white/10 bg-neutral-900/50 hover:bg-red-900/40 transition-all duration-300 skew-x-[-6deg] hover:-translate-y-4 hover:shadow-[0_10px_0_#dc2626]">
                <Zap className="text-red-600 w-12 h-12 mb-3 group-hover:scale-125 transition-transform duration-300" />
                <span className="font-black text-white uppercase text-lg italic skew-x-[6deg] text-center">Fuqi Brute</span>
              </div>
              {/* Feature 3 */}
              <div className="group flex flex-col items-center p-6 border border-white/10 bg-neutral-900/50 hover:bg-red-900/40 transition-all duration-300 skew-x-[-6deg] hover:-translate-y-4 hover:shadow-[0_10px_0_#dc2626]">
                <Wrench className="text-red-600 w-12 h-12 mb-3 group-hover:rotate-[-45deg] transition-transform duration-300" />
                <span className="font-black text-white uppercase text-lg italic skew-x-[6deg] text-center">Saktësi</span>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden border-4 border-red-600/30 skew-x-[-6deg] shadow-[0_0_50px_rgba(220,38,38,0.2)]">
             {/* Aggressive Image with "Driving" Animation */}
             <div className="absolute inset-0 bg-red-600/10 z-10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
             
             {/* Scanner line animation */}
             <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500 z-20 animate-slide-up" style={{animationDuration: '2s', animationIterationCount: 'infinite'}}></div>

             <img 
               src="https://images.unsplash.com/photo-1552176625-e47ff529b595?q=80&w=1000&auto=format&fit=crop" 
               alt="Aggressive Car Driving" 
               className="relative z-0 w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 animate-rumble scale-105"
             />
             <div className="absolute bottom-0 left-0 bg-black/90 p-6 w-full z-20 skew-x-[6deg] border-t border-red-600">
                <span className="text-red-600 font-bold text-lg tracking-[0.5em] block animate-flash">SYSTEM ONLINE</span>
                <span className="text-xs text-gray-500 font-mono">DIAGNOSTICS: ALL GREEN</span>
             </div>
          </div>
        </div>

        {/* Brands Section */}
        <div className="border-t border-neutral-800 pt-16">
           <h3 className="font-aggressive text-4xl text-center text-white mb-16 italic">FURNIZUESIT <span className="text-red-600 animate-pulse">TANË JANË</span></h3>
           
           <div className="flex flex-wrap justify-center gap-6 mb-20">
             {CAR_BRANDS.map((brand, idx) => (
               <div key={idx} className="bg-neutral-900 border border-neutral-800 px-8 py-5 skew-x-[-12deg] hover:bg-red-600 hover:border-red-600 transition-all duration-200 cursor-default shadow-[0_5px_0_rgb(50,50,50)] hover:translate-y-1 hover:shadow-none group">
                 <span className="text-2xl sm:text-3xl font-black text-white block skew-x-[12deg] tracking-tighter group-hover:scale-110 transition-transform">{brand.name}</span>
               </div>
             ))}
           </div>

           <div className="flex flex-wrap justify-center gap-12 items-center opacity-70 hover:opacity-100 transition-opacity duration-500 bg-neutral-900/30 py-10 px-4 border-y border-neutral-800">
              {PART_BRANDS.map((brand, idx) => (
                <span key={idx} className="text-5xl sm:text-8xl font-black text-transparent stroke-white stroke-2 hover:text-red-600 hover:stroke-red-600 transition-all duration-300 cursor-pointer skew-y-[-2deg] hover:skew-y-0 hover:scale-110" style={{WebkitTextStroke: '2px #555'}}>{brand.name}</span>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;
