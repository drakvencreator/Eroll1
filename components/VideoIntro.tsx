import React, { useState } from 'react';
import { X, Volume2 } from 'lucide-react';
import { TIKTOK_VIDEO_ID } from '../constants';

const VideoIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || !TIKTOK_VIDEO_ID) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[100] animate-slide-left hidden md:block">
      <div className="relative group">
        
        {/* Aggressive Glowing Border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        
        {/* Main Container */}
        <div className="relative bg-black w-[240px] h-[320px] rounded-lg overflow-hidden border-2 border-red-600 shadow-2xl">
          
          {/* LIVE Header */}
          <div className="absolute top-0 left-0 w-full z-10 p-3 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
              <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase">LIVE NGA DYQANI</span>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white/50 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* TikTok Embed Iframe */}
          <div className="w-full h-full pointer-events-none sm:pointer-events-auto">
            <iframe
              src={`https://www.tiktok.com/embed/v2/${TIKTOK_VIDEO_ID}?controls=0&rel=0&autoplay=1&mute=1`}
              className="w-full h-full border-none scale-[1.3] origin-center"
              allow="autoplay; encrypted-media"
              title="Auto Japan Intro Video"
            ></iframe>
          </div>

          {/* Overlay to catch clicks and direct to TikTok if needed */}
          <a 
            href={`https://www.tiktok.com/@autojapan.erolli/video/${TIKTOK_VIDEO_ID}`}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 z-0 bg-transparent"
          ></a>

          {/* Unmute Indicator Overlay */}
          <div className="absolute bottom-4 left-0 w-full flex justify-center pointer-events-none">
             <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                <Volume2 size={12} className="text-white" />
                <span className="text-[8px] text-white font-bold uppercase tracking-widest">Prek për zërin</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;