import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

export async function fetchProducts() {
  const snapshot = await getDocs(collection(db, "products"));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    name: doc.data().name,
    price: doc.data().price,
    inStock: doc.data().inStock
  }));
}
