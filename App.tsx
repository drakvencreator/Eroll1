import React, { useState, useEffect } from 'react';
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
  
  // Initialize products from LocalStorage if available, otherwise use INITIAL_PRODUCTS
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem('auto_japan_products');
    if (savedProducts) {
      try {
        return JSON.parse(savedProducts);
      } catch (error) {
        console.error("Error parsing saved products:", error);
        return INITIAL_PRODUCTS;
      }
    }
    return INITIAL_PRODUCTS;
  });

  const [isAdmin, setIsAdmin] = useState(false);

  // Save to LocalStorage whenever products change
  useEffect(() => {
    localStorage.setItem('auto_japan_products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm("A jeni i sigurt që doni ta fshini këtë pjesë përgjithmonë?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleLogin = (code: string): boolean => {
    if (code === 'LoliEroll1!!') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAdmin(false);
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
             isAdmin={isAdmin}
             onLogin={handleLogin}
             onLogout={handleLogout}
           />
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;