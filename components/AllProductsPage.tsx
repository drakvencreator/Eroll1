import React, { useState } from 'react';
import { Plus, Upload, X, Trash2, ArrowLeft, Search, ZoomIn, Lock, Unlock, LogOut } from 'lucide-react';
import { Product } from '../types';

interface AllProductsPageProps {
  products: Product[];
  onAddProduct: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
  onBack: () => void;
  isAdmin: boolean;
  onLogin: (code: string) => boolean;
  onLogout: () => void;
}

const AllProductsPage: React.FC<AllProductsPageProps> = ({ 
  products, 
  onAddProduct, 
  onDeleteProduct, 
  onBack,
  isAdmin,
  onLogin,
  onLogout
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Auth Modal State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authCode, setAuthCode] = useState('');
  const [authError, setAuthError] = useState(false);

  // Form State
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newImage, setNewImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newDesc || !newImage) return;

    const newProduct: Product = {
      id: Date.now().toString(),
      name: newName,
      description: newDesc,
      imageUrl: newImage
    };

    onAddProduct(newProduct);
    
    // Reset form
    setNewName('');
    setNewDesc('');
    setNewImage(null);
    setIsAdding(false);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onLogin(authCode);
    if (success) {
      setIsAuthModalOpen(false);
      setAuthCode('');
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-48 pb-20 relative">
      {/* Background Texture */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

      {/* Image Modal / Lightbox */}
       {selectedImage && (
         <div 
           className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
           onClick={() => setSelectedImage(null)}
         >
            <div className="relative max-w-6xl w-full">
              <button className="absolute -top-12 right-0 text-white hover:text-red-600 transition-colors">
                <X size={40} />
              </button>
              <img 
                src={selectedImage} 
                alt="Full Preview" 
                className="w-full h-auto max-h-[85vh] object-contain border-4 border-red-600 shadow-[0_0_100px_rgba(220,38,38,0.5)]"
              />
            </div>
         </div>
       )}

       {/* Auth Modal */}
       {isAuthModalOpen && (
         <div className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-neutral-900 border-2 border-red-600 p-8 w-full max-w-md relative shadow-[0_0_50px_rgba(220,38,38,0.3)]">
              <button 
                onClick={() => { setIsAuthModalOpen(false); setAuthCode(''); setAuthError(false); }}
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <h3 className="font-aggressive text-2xl text-white mb-6 text-center italic">QASJE PËR STAFIN</h3>
              
              <form onSubmit={handleAuthSubmit} className="space-y-6">
                <div>
                  <label className="block text-red-500 text-xs font-black mb-2 uppercase tracking-wider">Kodi i Autorizimit</label>
                  <input 
                    type="password" 
                    value={authCode}
                    onChange={(e) => { setAuthCode(e.target.value); setAuthError(false); }}
                    className="w-full bg-black border border-neutral-700 text-white p-4 focus:outline-none focus:border-red-600 text-center tracking-widest text-xl"
                    autoFocus
                    placeholder="••••••••"
                  />
                  {authError && <p className="text-red-600 text-xs mt-2 font-bold uppercase text-center animate-pulse">Kodi i pasaktë!</p>}
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 uppercase tracking-widest transition-colors skew-x-[-12deg]"
                >
                  <span className="skew-x-[12deg]">Konfirmo</span>
                </button>
              </form>
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
              <p className="text-gray-400 text-sm mt-1 font-mono flex items-center gap-2">
                MENAXHIMI I STOKUT
                {isAdmin && <span className="text-green-500 text-xs border border-green-500 px-2 py-0.5 rounded-full uppercase">Admin Active</span>}
              </p>
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
            
            {isAdmin ? (
              <div className="flex gap-2 w-full sm:w-auto">
                <button 
                  onClick={() => setIsAdding(!isAdding)}
                  className="flex-1 sm:flex-none bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-black uppercase tracking-widest skew-x-[-12deg] transition-transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <span className="skew-x-[12deg] flex items-center gap-2">
                    {isAdding ? <X size={20} /> : <Plus size={20} />}
                    {isAdding ? 'Mbyll' : 'Shto Produkt'}
                  </span>
                </button>
                <button 
                  onClick={() => { onLogout(); setIsAdding(false); }}
                  className="bg-neutral-800 hover:bg-neutral-700 text-gray-400 hover:text-white px-4 py-3 skew-x-[-12deg] transition-colors"
                  title="Dalje nga Admin"
                >
                   <LogOut size={20} className="skew-x-[12deg]" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-gray-500 hover:text-white px-4 py-3 skew-x-[-12deg] transition-all"
                title="Qasje Admin"
              >
                <Lock size={20} className="skew-x-[12deg]" />
              </button>
            )}
          </div>
        </div>

        {/* Add Product Form - Only Visible if Admin */}
        {isAdmin && isAdding && (
          <div className="mb-16 bg-black p-8 border-l-8 border-red-600 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-fade-in relative">
            <h3 className="font-aggressive text-3xl text-white mb-8 border-b border-white/10 pb-4">SPECIFIKIMET E REJA</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-red-500 text-sm font-black mb-3 uppercase tracking-wider">Emri i Pjesës</label>
                  <input 
                    type="text" 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-neutral-900/50 border border-neutral-600 text-white p-4 focus:outline-none focus:border-red-600 focus:bg-neutral-900 transition-all font-bold text-lg"
                    placeholder="psh. Turbocharger GReddy T88..."
                    required
                  />
                </div>
                <div>
                  <label className="block text-red-500 text-sm font-black mb-3 uppercase tracking-wider">Foto e Produktit</label>
                  <div className="relative border-2 border-dashed border-neutral-600 bg-neutral-900/30 p-8 text-center cursor-pointer hover:border-red-600 hover:bg-neutral-900 transition-all group h-[140px] flex items-center justify-center">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      required
                    />
                    <div className="flex flex-col items-center justify-center">
                      {newImage ? (
                         <div className="flex items-center gap-2 text-green-500">
                            <span className="font-bold uppercase">Foto u ngarkua me sukses!</span>
                         </div>
                      ) : (
                        <>
                            <Upload className="text-gray-400 group-hover:text-red-500 mb-2 transition-colors" size={32} />
                            <span className="text-sm text-gray-400 uppercase font-bold group-hover:text-white">Kliko për ngarkim</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-red-500 text-sm font-black mb-3 uppercase tracking-wider">Përshkrimi Teknik</label>
                <textarea 
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full bg-neutral-900/50 border border-neutral-600 text-white p-4 focus:outline-none focus:border-red-600 focus:bg-neutral-900 h-32 font-mono text-sm transition-all"
                  placeholder="Shkruaj detajet teknike këtu..."
                  required
                ></textarea>
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  type="submit" 
                  className="bg-white hover:bg-gray-200 text-black font-black py-4 px-12 uppercase tracking-widest transition-transform hover:-translate-y-1 skew-x-[-12deg]"
                >
                  <span className="skew-x-[12deg]">Konfirmo Shtimin</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-neutral-900 border border-neutral-800 hover:border-red-600 transition-all duration-300 flex flex-col hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] relative overflow-hidden">
                
                {/* Delete Button - Only Visible if Admin */}
                {isAdmin && (
                  <button 
                      onClick={(e) => { e.stopPropagation(); onDeleteProduct(product.id); }}
                      className="absolute top-0 right-0 z-30 bg-red-600 text-white p-3 hover:bg-red-700 transition-colors opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 duration-300"
                      title="Fshij Pjesën"
                  >
                      <Trash2 size={20} />
                  </button>
                )}

                <div 
                    className="aspect-square overflow-hidden relative cursor-zoom-in"
                    onClick={() => setSelectedImage(product.imageUrl)}
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
                        <h3 className="font-aggressive text-xl text-white italic mb-2 leading-tight group-hover:text-red-500 transition-colors">{product.name}</h3>
                        <p className="text-gray-500 text-xs font-mono line-clamp-3 mb-4">{product.description}</p>
                    </div>
                    
                    <div className="border-t border-neutral-800 pt-4 mt-2 flex justify-between items-center">
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
            <div className="text-center py-32 border border-neutral-800 bg-neutral-900/50">
                <p className="font-aggressive text-2xl text-gray-500">Nuk u gjet asnjë produkt.</p>
            </div>
        )}

      </div>
    </div>
  );
};

export default AllProductsPage;