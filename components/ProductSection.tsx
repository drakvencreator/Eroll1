import React, { useState } from 'react';
import { ArrowRight, ZoomIn, X } from 'lucide-react';
import { Product } from '../types';

interface ProductSectionProps {
  products: Product[];
  onOpenFullCatalog: () => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({ products, onOpenFullCatalog }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Show only first 3 items for preview
  const displayProducts = products.slice(0, 3);

  return (
    <section id="products" className="py-24 bg-neutral-900 pb-32 relative overflow-hidden">
       {/* Industrial Background */}
       <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 pointer-events-none"></div>
       
       {/* Image Modal / Lightbox */}
       {selectedImage && (
         <div 
           className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
           onClick={() => setSelectedImage(null)}
         >
            <div className="relative max-w-5xl w-full">
              <button className="absolute -top-12 right-0 text-white hover:text-red-600 transition-colors">
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Full Preview" 
                className="w-full h-auto max-h-[80vh] object-contain border-2 border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.3)]"
              />
            </div>
         </div>
       )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-red-600/50 pb-6">
          <div>
            <h2 className="font-aggressive text-5xl md:text-6xl text-white italic">
              PJESË <span className="text-red-600">JAPONEZE</span>
            </h2>
            <p className="text-red-500 mt-2 font-bold uppercase tracking-widest text-sm">VETËM DISA NGA PRODUKTET TONA</p>
          </div>
          
          <button 
            onClick={onOpenFullCatalog}
            className="mt-6 md:mt-0 flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 skew-x-[-12deg] transition-all hover:scale-105 group"
          >
            <div className="skew-x-[12deg] flex items-center gap-2 font-black uppercase tracking-wider">
               SHIKO TË GJITHA <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Product Grid (Preview) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-black border border-neutral-800 hover:border-red-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(220,38,38,0.2)] cursor-pointer"
              onClick={() => setSelectedImage(product.imageUrl)}
            >
              <div className="aspect-[4/3] overflow-hidden relative border-b border-neutral-800">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                
                {/* Zoom Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-red-600/90 text-white p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <ZoomIn size={32} />
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 bg-red-600 text-white text-xs font-black px-3 py-1 skew-x-[-12deg] -mb-1 ml-2">
                    <span className="skew-x-[12deg]">PREMIUM</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-aggressive text-2xl text-white italic mb-2 leading-tight">{product.name}</h3>
                <div className="w-12 h-1 bg-red-600 mb-4"></div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[3rem] font-mono">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <button 
                onClick={onOpenFullCatalog}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 font-aggressive text-xl skew-x-[-12deg] transition-transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
                <span className="skew-x-[12deg]">HAP KATALOGUN E PLOTË</span>
            </button>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;