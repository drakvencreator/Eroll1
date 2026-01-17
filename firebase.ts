import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, Timestamp, writeBatch } from "firebase/firestore";
import { Product } from "./types";

// --- KONFIGURIMI I SERVERIT (DATABASE) ---
const firebaseConfig = {
  apiKey: "AIzaSyD-kLXNqYoSGJ3KcNU55-lBUwTuKvlfsao",
  authDomain: "erolli-fc104.firebaseapp.com",
  projectId: "erolli-fc104",
  storageBucket: "erolli-fc104.firebasestorage.app",
  messagingSenderId: "595099730011",
  appId: "1:595099730011:web:7a4268bd044c12a5f07f7e",
  measurementId: "G-J3KW0CZNWQ"
};

// Initialize Firebase Logic
let db: any = null;
let isFirebaseInitialized = false;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  isFirebaseInitialized = true;
  console.log("🔥 SERVER STATUS: ONLINE (Connected to Firebase)");
} catch (error) {
  console.error("Firebase init failed:", error);
  console.warn("⚠️ SERVER STATUS: OFFLINE (Check Config)");
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
  }, (error: any) => {
    console.error("Error fetching products:", error);
    // Check for permission error
    if (error.code === 'permission-denied') {
        alert("KUJDES: Databaza është e bllokuar nga Google!\n\nShkoni te Firebase Console -> Firestore Database -> Rules\nNdryshoni rreshtin në:\nallow read, write: if true;");
    }
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

// Function to upload multiple products at once (for initialization)
export const uploadBatchProducts = async (products: Product[]) => {
    if (!isFirebaseInitialized || !db) throw new Error("Server offline");
    
    const batch = writeBatch(db);
    
    products.forEach(product => {
        const docRef = doc(collection(db, "products")); // Auto-ID
        const { id, ...data } = product;
        batch.set(docRef, {
            ...data,
            createdAt: Timestamp.now()
        });
    });

    await batch.commit();
};