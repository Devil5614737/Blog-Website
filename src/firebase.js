
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAUp1AvG8jid648IOLRBLepCHQ1Uq-sG94",
  authDomain: "blog-app-e8e24.firebaseapp.com",
  projectId: "blog-app-e8e24",
  storageBucket: "blog-app-e8e24.appspot.com",
  messagingSenderId: "367306218310",
  appId: "1:367306218310:web:8dd01c4c82c9488fd0e347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const provider=new GoogleAuthProvider();
export const auth=getAuth(app);