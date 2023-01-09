import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHaqzFIh3WpX8Hw6k55TAA8keUwyksMWU",
  authDomain: "entertain-hub.firebaseapp.com",
  projectId: "entertain-hub",
  storageBucket: "entertain-hub.appspot.com",
  messagingSenderId: "208836241783",
  appId: "1:208836241783:web:29fe7981fb6e963f6c5972",
  measurementId: "G-RWVCY9MR6J",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
