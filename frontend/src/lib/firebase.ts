import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoe9NLLBZqTdSoFdOvTJifIDS_gzB3G2k",
  authDomain: "skillforge-7d182.firebaseapp.com",
  projectId: "skillforge-7d182",
  storageBucket: "skillforge-7d182.firebasestorage.app",
  messagingSenderId: "243871112112",
  appId: "1:243871112112:web:44619be541f73694ad5475"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, auth, googleProvider, db, signInWithPopup, signInWithRedirect, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile };
