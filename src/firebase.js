
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCo_JDk5snTpN-gJoPkNroFOSQU6qmUG3g",
  authDomain: "profilo-42d1b.firebaseapp.com",
  projectId: "profilo-42d1b",
  storageBucket: "profilo-42d1b.appspot.com",
  messagingSenderId: "313578429397",
  appId: "1:313578429397:web:65b07c1027f0fc39933b5c",
  measurementId: "G-F25RYTMVNZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);