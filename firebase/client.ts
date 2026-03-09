// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChZDoR8u3hHH-YzPpTITm2xD7IdTD762w",
  authDomain: "perepwise.firebaseapp.com",
  projectId: "perepwise",
  storageBucket: "perepwise.firebasestorage.app",
  messagingSenderId: "819230138660",
  appId: "1:819230138660:web:f422a51087cef034d293b1",
  measurementId: "G-B3SRGMPEN4"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);