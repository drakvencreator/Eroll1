import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="font-aggressive text-2xl text-white italic">
            AUTO JAPAN <span className="text-red-600">EROLLI</span>
          </h3>
          <p className="text-gray-500 text-sm mt-1 uppercase tracking-wider">
            Specialist i pjesëve për vetura japoneze
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-red-600 transition-colors transform hover:scale-110">
            <Facebook size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-600 transition-colors transform hover:scale-110">
            <Instagram size={28} />
          </a>
        </div>

        <div className="text-gray-600 text-xs text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Auto Japan Erolli. Të gjitha të drejtat e rezervuara.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;