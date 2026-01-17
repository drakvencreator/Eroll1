import React, { useState } from 'react';
import { X, ArrowLeft, Search, ZoomIn, Info } from 'lucide-react';
import { Product } from '../types';

interface AllProductsPageProps {
  products: Product[];
  onBack: () => void;
}

const AllProductsPage: React.FC<AllProductsPageProps> = ({ 
  products, 
  onBack,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  // Changed from just storing the image string to storing the whole product object
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-52 pb-20 relative">
      {/* Background Texture */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

      {/* DETAILED PRODUCT MODAL */}
       {selectedProduct && (
         <div 
           className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
           onClick={() => setSelectedProduct(null)}
         >
            <div 
              className="relative max-w-5xl w-full bg-neutral-900 border border-neutral-800 shadow-[0_0_50px_rgba(220,38,38,0.3)] flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button 
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                onClick={() => setSelectedProduct(null)}
              >
                <X size={24} />
              </button>

              {/* Modal Image Side */}
              <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-neutral-800">
                <img 
                  src={selectedProduct.imageUrl} 
                  alt="Full Preview" 
                  className="max-h-[50vh] md:max-h-[70vh] w-auto object-contain"
                />
              </div>

              {/* Modal Details Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto max-h-[50vh] md:max-h-[70vh]">
                 <h3 className="font-aggressive text-3xl md:text-4xl text-white italic mb-4 leading-none">
                    {selectedProduct.name}
                 </h3>
                 <div className="w-20 h-1 bg-red-600 mb-8 skew-x-[-12deg]"></div>
                 
                 <div className="mb-6">
                    <span className="text-red-600 font-bold text-xs uppercase tracking-widest block mb-2">SPECIFIKIMET DHE PËRSHKRIMI</span>
                    <p className="text-gray-300 text-base md:text-lg font-mono leading-relaxed whitespace-pre-wrap">
                        {selectedProduct.description}
                    </p>
                 </div>

                 <div className="mt-auto pt-6 border-t border-neutral-800">
                    <button 
                        onClick={() => setSelectedProduct(null)}
                        className="w-full bg-white hover:bg-gray-200 text-black font-black py-4 uppercase tracking-widest skew-x-[-12deg] transition-transform"
                    >
                        <span className="skew-x-[12deg]">MBYLL</span>
                    </button>
                 </div>
              </div>
            </div>
         </div>
       )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={onBack}
              className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition-colors group"
            >
              <ArrowLeft className="text-white group-hover:-translate-x-1 transition-transform" />
            </button>
            <div>
              <h1 className="font-aggressive text-4xl sm:text-5xl text-white italic leading-none">
                KATALOGU <span className="text-red-600">KOMPLET</span>
              </h1>
              <div className="flex items-center gap-4 mt-1">
                  <p className="text-gray-400 text-sm font-mono flex items-center gap-2">
                    MENAXHIMI I STOKUT
                  </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto items-center">
            <div className="relative group w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-600 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Kërko pjesë..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-neutral-900 border border-neutral-700 text-white pl-10 pr-4 py-3 w-full sm:w-64 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-neutral-900 border border-neutral-800 hover:border-red-600 transition-all duration-300 flex flex-col hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] relative overflow-hidden">
                
                <div 
                    className="aspect-square overflow-hidden relative cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                >
                    <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <ZoomIn className="text-white drop-shadow-lg" size={40} />
                    </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                    <div className="mb-auto">
                        <h3 className="font-aggressive text-xl text-white italic mb-2 leading-tight group-hover:text-red-500 transition-colors cursor-pointer" onClick={() => setSelectedProduct(product)}>{product.name}</h3>
                        
                        {/* Short description with ellipsis */}
                        <p className="text-gray-500 text-xs font-mono line-clamp-3 mb-2">{product.description}</p>
                        
                        {/* SEE MORE BUTTON */}
                        <button 
                          onClick={() => setSelectedProduct(product)}
                          className="text-red-500 hover:text-white text-xs font-black uppercase tracking-widest flex items-center gap-1 transition-colors mt-2"
                        >
                          + SHIKO MË SHUMË
                        </button>
                    </div>
                    
                    <div className="border-t border-neutral-800 pt-4 mt-4 flex justify-between items-center">
                        <span className="text-red-600 font-bold text-xs uppercase tracking-widest">JAPAN SPEC</span>
                        <div className="flex gap-1">
                            <div className="w-1 h-4 bg-red-600 skew-x-[-12deg]"></div>
                            <div className="w-1 h-4 bg-red-600 skew-x-[-12deg] opacity-50"></div>
                            <div className="w-1 h-4 bg-red-600 skew-x-[-12deg] opacity-25"></div>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
            <div className="text-center py-32 border border-neutral-800 bg-neutral-900/50 flex flex-col items-center">
                <p className="font-aggressive text-2xl text-gray-500 mb-6">
                    Nuk u gjet asnjë produkt.
                </p>
                <p className="text-gray-500">
                    Shto produkte manualisht në skedarin <code className="text-red-500">constants.ts</code>
                </p>
            </div>
        )}

      </div>
    </div>
  );
};

export default AllProductsPage;