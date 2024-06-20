import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-bfdcb.firebaseapp.com",
  projectId: "reactchat-bfdcb",
  storageBucket: "reactchat-bfdcb.appspot.com",
  messagingSenderId: "589266313889",
  appId: "1:589266313889:web:b4f9e30fb7e00c5016c6e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

