import React from 'react';
import { ShieldCheck, Wrench, Zap } from 'lucide-react';
import { CAR_BRANDS, PART_BRANDS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,0,0,0.05)_25%,rgba(255,0,0,0.05)_50%,transparent_50%,transparent_75%,rgba(255,0,0,0.05)_75%,rgba(255,0,0,0.05)_100%)] bg-[size:20px_20px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="font-aggressive text-5xl sm:text-6xl text-white mb-6 leading-none">
              NE JEMI <span className="text-red-600">STANDARTI.</span><br/>
              TE TJERËT JANË VETËM ALTERNATIVË.
            </h2>
            <div className="h-2 w-32 bg-red-600 mb-8 skew-x-[-20deg]"></div>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed font-medium">
              <strong className="text-white text-xl">Auto Japan Erolli</strong> nuk është thjesht një dyqan pjesësh. Ne jemi <span className="text-red-500 font-bold">tempulli i performancës japoneze</span> në Pejë. Kur ju vini tek ne, ju nuk blini thjesht metal dhe plastikë – ju blini siguri, dominim dhe inxhinieri të pastër.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-medium">
              Ne refuzojmë pjesët e dobëta. Ne refuzojmë kompromisin. Çdo dërgesë që hyn në magazinën tonë është verifikuar për të përballuar kushtet më ekstreme. Nëse makina juaj është japoneze, <span className="text-white font-bold underline decoration-red-600">zemra e saj rreh tek Erolli.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="group flex flex-col items-center p-6 border border-white/10 bg-neutral-900 hover:bg-red-900/20 transition-all duration-300 skew-x-[-6deg] hover:-translate-y-2">
                <ShieldCheck className="text-red-600 w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-black text-white uppercase text-lg italic skew-x-[6deg]">Origjinalitet 100%</span>
              </div>
              <div className="group flex flex-col items-center p-6 border border-white/10 bg-neutral-900 hover:bg-red-900/20 transition-all duration-300 skew-x-[-6deg] hover:-translate-y-2">
                <Zap className="text-red-600 w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-black text-white uppercase text-lg italic skew-x-[6deg]">Fuqi Brute</span>
              </div>
              <div className="group flex flex-col items-center p-6 border border-white/10 bg-neutral-900 hover:bg-red-900/20 transition-all duration-300 skew-x-[-6deg] hover:-translate-y-2">
                <Wrench className="text-red-600 w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-black text-white uppercase text-lg italic skew-x-[6deg]">Saktësi</span>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden border-4 border-red-600/50 skew-x-[-6deg]">
             {/* Aggressive Image with "Driving" Animation */}
             <div className="absolute inset-0 bg-red-600/20 z-10 mix-blend-overlay"></div>
             <img 
               src="https://images.unsplash.com/photo-1552176625-e47ff529b595?q=80&w=1000&auto=format&fit=crop" 
               alt="Aggressive Car Driving" 
               className="relative z-0 w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 animate-rumble scale-110"
             />
             <div className="absolute bottom-0 left-0 bg-black/80 p-4 w-full z-20 skew-x-[6deg]">
                <span className="text-red-600 font-bold text-sm tracking-[0.5em] block animate-pulse">SYSTEM ONLINE</span>
             </div>
          </div>
        </div>

        {/* Brands Section */}
        <div className="border-t-2 border-red-900/30 pt-16">
           <h3 className="font-aggressive text-4xl text-center text-white mb-12 italic">LEGJENDAT QË <span className="text-red-600 text-outline-red">FURNIZOJMË</span></h3>
           
           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-16">
             {CAR_BRANDS.map((brand, idx) => (
               <div key={idx} className="bg-black border border-neutral-800 px-8 py-4 skew-x-[-12deg] hover:bg-red-600 hover:border-red-600 transition-all duration-200 cursor-default shadow-[0_4px_0_rgb(100,10,10)] hover:translate-y-[2px] hover:shadow-none">
                 <span className="text-2xl sm:text-3xl font-black text-white block skew-x-[12deg] tracking-tighter">{brand.name}</span>
               </div>
             ))}
           </div>

           <div className="flex justify-center gap-12 items-center opacity-50 hover:opacity-100 transition-opacity duration-500 bg-white/5 py-8 skew-y-[-2deg]">
              {PART_BRANDS.map((brand, idx) => (
                <span key={idx} className="text-4xl sm:text-7xl font-black text-transparent stroke-white stroke-2 hover:text-red-600 hover:stroke-red-600 transition-colors cursor-pointer skew-y-[2deg]">{brand.name}</span>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;