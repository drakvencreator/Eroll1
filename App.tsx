import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductSection from './components/ProductSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProductsPage from './components/AllProductsPage';
import { Product } from './types';
import { INITIAL_PRODUCTS, APP_VERSION } from './constants';
import { subscribeToProducts, isOnline } from './firebase';

type ViewState = 'home' | 'products';

function App() {
  const [view, setView] = useState<ViewState>('home');
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState(false);

  // LOGJIKA KRYESORE E DATABAZES
  useEffect(() => {
    const online = isOnline();
    setServerStatus(online);

    if (online) {
      // 1. NESE KEMI SERVER (FIREBASE) -> Degjo per ndryshime LIVE
      const unsubscribe = subscribeToProducts((liveProducts) => {
        if (liveProducts.length > 0) {
          setProducts(liveProducts);
        } else {
           // Fallback if DB is empty
           setProducts([]); 
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      // 2. NESE NUK KEMI SERVER -> Perdor Memorien Lokale (Si me pare)
      const savedProducts = localStorage.getItem('auto_japan_products');
      const savedVersion = localStorage.getItem('auto_japan_version');

      if (savedProducts && savedVersion === APP_VERSION) {
        try {
          setProducts(JSON.parse(savedProducts));
        } catch (error) {
          console.error("Error parsing saved products:", error);
        }
      }
      setLoading(false);
    }
  }, []);

  const [isAdmin, setIsAdmin] = useState(false);

  // Backup to LocalStorage (Only if offline mode is active)
  useEffect(() => {
    if (!serverStatus && !loading) {
        try {
            localStorage.setItem('auto_japan_products', JSON.stringify(products));
            localStorage.setItem('auto_japan_version', APP_VERSION);
        } catch (e) {
            console.error("Storage limit reached", e);
        }
    }
  }, [products, serverStatus, loading]);

  // Handle Add Product (Smart Switch)
  const handleAddProduct = (newProduct: Product) => {
    // If offline, update state manually. If online, Firebase listener handles it.
    if (!serverStatus) {
       setProducts([newProduct, ...products]);
    }
  };

  // Handle Delete Product (Smart Switch)
  const handleDeleteProduct = (id: string) => {
    if (window.confirm("A jeni i sigurt që doni ta fshini këtë pjesë përgjithmonë?")) {
       if (!serverStatus) {
         setProducts(products.filter(p => p.id !== id));
       }
       // If online, the delete command is sent via AllProductsPage, 
       // and the listener updates the list automatically.
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
             isOnline={serverStatus}
           />
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;