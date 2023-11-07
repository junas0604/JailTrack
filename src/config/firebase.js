import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBYGWBsxrae-EiB7prA2Q9mDaOKVsIJ_z0",
  authDomain: "jailtrack-2da68.firebaseapp.com",
  projectId: "jailtrack-2da68",
  storageBucket: "jailtrack-2da68.appspot.com",
  messagingSenderId: "838911693356",
  appId: "1:838911693356:web:5cca2540203673eab57789",
  measurementId: "G-5RY9KR2PH7"
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export { googleProvider, storage };
export default app;
