
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyALimi6tc76YPZwzMjKe9eGqCQpUm2H2x8",
  authDomain: "modern-react-app-a9bcd.firebaseapp.com",
  projectId: "modern-react-app-a9bcd",
  storageBucket: "modern-react-app-a9bcd.firebasestorage.app",
  messagingSenderId: "18914204349",
  appId: "1:18914204349:web:008ce68bd7e0325e5cb5d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {db,auth,provider}