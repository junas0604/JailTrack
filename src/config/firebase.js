import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4q0i_UPJAh9C8LLyNitNMdPm7lFSAhLY",
  authDomain: "jailtrack.firebaseapp.com",
  projectId: "jailtrack",
  storageBucket: "jailtrack.appspot.com",
  messagingSenderId: "21856705062",
  appId: "1:21856705062:web:a5eb0f825d27cbd7a724e7",
  measurementId: "G-LERTRWZZSW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const usersCollection = collection(db, "admin");
export const storage = getStorage(app);