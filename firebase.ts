import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, Timestamp } from "firebase/firestore";
import { Product } from "./types";

// --- KONFIGURIMI I SERVERIT (DATABASE) ---
// Hapi 1: Shko ne https://console.firebase.google.com/
// Hapi 2: Krijo projekt te ri (Falas)
// Hapi 3: Krijo Web App dhe kopjo 'firebaseConfig'
// Hapi 4: Zevendesoje kodin me poshte me kodin tend:

const firebaseConfig = {
  // --- VENDOS KODIN TEND KETU POSHTE ---
  apiKey: "AIzaSyD-kLXNqYoSGJ3KcNU55-lBUwTuKvlfsao",
  authDomain: "auto-japan-erolli.firebaseapp.com",
  projectId: "auto-japan-erolli",
  storageBucket: "auto-japan-erolli.appspot.com",
  messagingSenderId: "00000000000",
  appId: "1:00000000000:web:00000000000000"
  // ---------------------------------------
};

// Initialize Firebase Logic
let db: any = null;
let isFirebaseInitialized = false;

try {
  // Check if config is real (user has updated it)
  if (firebaseConfig.apiKey !== "AIzaSyD-kLXNqYoSGJ3KcNU55-lBUwTuKvlfsao") {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    isFirebaseInitialized = true;
    console.log("🔥 SERVER STATUS: ONLINE (Connected to Firebase)");
  } else {
    console.warn("⚠️ SERVER STATUS: OFFLINE (Using Local Storage)");
  }
} catch (error) {
  console.error("Firebase init failed:", error);
}

// Helpers
export const isOnline = () => isFirebaseInitialized;

export const subscribeToProducts = (callback: (products: Product[]) => void) => {
  if (!isFirebaseInitialized || !db) return () => {};

  const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
  
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Product[];
    callback(products);
  }, (error) => {
    console.error("Error fetching products:", error);
  });

  return unsubscribe;
};

export const addProductToCloud = async (product: Product) => {
  if (!isFirebaseInitialized || !db) throw new Error("Server offline");
  
  // Clean product object
  const { id, ...data } = product;
  await addDoc(collection(db, "products"), {
    ...data,
    createdAt: Timestamp.now()
  });
};

export const deleteProductFromCloud = async (id: string) => {
  if (!isFirebaseInitialized || !db) throw new Error("Server offline");
  await deleteDoc(doc(db, "products", id));
};
