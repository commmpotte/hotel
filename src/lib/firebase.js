import {
  initializeApp
} from "firebase/app";
import {
  getFirestore
} from 'firebase/firestore'
import {
  getAuth,
  GoogleAuthProvider
} from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAq9bbmK6zbQ_i56MskQU0bUqUu3_AMPk",
  authDomain: "hotel4-9f64f.firebaseapp.com",
  projectId: "hotel4-9f64f",
  storageBucket: "hotel4-9f64f.appspot.com",
  messagingSenderId: "242356427771",
  appId: "1:242356427771:web:da5addb8b921bdf673895e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider()