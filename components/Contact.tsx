import React from 'react';
import { MapPin, Phone, Instagram, Video } from 'lucide-react'; // Using Video icon as generic for TikTok if specific not avail, usually distinct icons needed but lucide has instagram
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative border-t-4 border-red-600">
       {/* Industrial Grid Background */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(50,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(50,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-aggressive text-5xl md:text-7xl text-white mb-4 italic">
            NA <span className="text-red-600 text-outline-white">KONTAKTO</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-bold">
            Mos humb kohë. Telefono tani ose na vizito. Pjesa jote është duke pritur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Contact Info Card */}
          <div className="bg-neutral-900 p-12 border-r border-white/10 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-40 h-full bg-red-600/5 skew-x-[-20deg]"></div>
            <div className="space-y-12 relative z-10">
              
              <div className="flex items-start gap-6 group/item">
                <div className="bg-red-600 p-4 skew-x-[-12deg] group-hover/item:scale-110 transition-transform">
                  <MapPin className="text-white w-6 h-6 skew-x-[12deg]" />
                </div>
                <div>
                  <h4 className="font-aggressive text-2xl text-white mb-1">LOKACIONI</h4>
                  <p className="text-gray-300 text-xl font-bold">{CONTACT_INFO.address}</p>
                  <p className="text-red-600 text-sm mt-1 uppercase tracking-widest font-black">Kosovë</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group/item">
                <div className="bg-red-600 p-4 skew-x-[-12deg] group-hover/item:scale-110 transition-transform">
                  <Phone className="text-white w-6 h-6 skew-x-[12deg]" />
                </div>
                <div>
                  <h4 className="font-aggressive text-2xl text-white mb-1">TELEFONI</h4>
                  <div className="flex flex-col gap-2">
                    <a href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`} className="text-2xl font-black text-white hover:text-red-600 transition-colors tracking-wider">
                      {CONTACT_INFO.phone1}
                    </a>
                    <a href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, '')}`} className="text-2xl font-black text-gray-400 hover:text-red-600 transition-colors tracking-wider">
                      {CONTACT_INFO.phone2}
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-[1px] w-full bg-white/10"></div>

              {/* Socials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="https://instagram.com/autojapanerolli" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-4 bg-neutral-800 p-4 border border-neutral-700 hover:border-red-600 hover:bg-neutral-800/80 transition-all group/social"
                  >
                    <Instagram className="text-white group-hover/social:text-[#E1306C] w-8 h-8" />
                    <div>
                        <span className="text-xs text-gray-500 uppercase font-bold block">Instagram</span>
                        <span className="text-white font-bold tracking-wide">@autojapanerolli</span>
                    </div>
                  </a>

                  <a 
                    href="https://tiktok.com/@autojapan.erolli" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-4 bg-neutral-800 p-4 border border-neutral-700 hover:border-red-600 hover:bg-neutral-800/80 transition-all group/social"
                  >
                    <div className="w-8 h-8 flex items-center justify-center text-white font-black group-hover/social:text-[#00f2ea]">TT</div>
                    <div>
                        <span className="text-xs text-gray-500 uppercase font-bold block">TikTok</span>
                        <span className="text-white font-bold tracking-wide">autojapan.erolli</span>
                    </div>
                  </a>
              </div>

            </div>
          </div>

          {/* Map Embed */}
          <div className="h-[500px] lg:h-auto bg-neutral-800 relative overflow-hidden group border-l border-white/10">
            <iframe 
              src={CONTACT_INFO.mapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{border:0, filter: 'grayscale(100%) invert(90%) contrast(120%)'}} 
              allowFullScreen={true} 
              loading="lazy"
              title="Location Map"
              className="absolute inset-0 group-hover:filter-none transition-all duration-500"
            ></iframe>
            {/* Map Overlay text before hover */}
            <div className="absolute inset-0 bg-red-900/20 pointer-events-none mix-blend-overlay"></div>
            <div className="absolute bottom-0 right-0 bg-red-600 text-white font-black px-6 py-2 uppercase tracking-widest skew-x-[-12deg] mb-8 mr-8 z-10">
                <span className="skew-x-[12deg]">Eja Tani</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;