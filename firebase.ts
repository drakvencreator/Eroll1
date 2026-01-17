import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, Timestamp } from "firebase/firestore";
import { Product } from "./types";

// --- KONFIGURIMI I SERVERIT (DATABASE) ---
// KUJDES: Ti ke vendosur API Key, por App ID dhe Sender ID jane akoma me 00000.
// DUHET TE KOPJOSH TE GJITHE OBJEKTIN NGA FIREBASE CONSOLE, JO VETEM API KEY.

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  // Kam hequr kontrollin e vjeter qe e bllokonte lidhjen. 
  // Tani sistemi do te provoje te lidhet direkt me kodin qe ke vendosur.
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
