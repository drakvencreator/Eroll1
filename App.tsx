import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductSection from './components/ProductSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProductsPage from './components/AllProductsPage';
import { Product } from './types';
import { INITIAL_PRODUCTS } from './constants';

type ViewState = 'home' | 'products';

function App() {
  const [view, setView] = useState<ViewState>('home');
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);

  const handleAddProduct = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm("A jeni i sigurt që doni ta fshini këtë pjesë përgjithmonë?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const navigateTo = (newView: ViewState) => {
    // Scroll to top when changing views
    window.scrollTo(0, 0);
    setView(newView);
  };

  return (
    <div className="bg-neutral-950 min-h-screen text-white selection:bg-red-600 selection:text-white">
      <Navbar currentView={view} onNavigate={navigateTo} />
      
      {view === 'home' ? (
        <main>
          <Hero />
          <About />
          <ProductSection 
            products={products} 
            onOpenFullCatalog={() => navigateTo('products')} 
          />
          <Contact />
        </main>
      ) : (
        <main>
           <AllProductsPage 
             products={products}
             onAddProduct={handleAddProduct}
             onDeleteProduct={handleDeleteProduct}
             onBack={() => navigateTo('home')}
           />
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;