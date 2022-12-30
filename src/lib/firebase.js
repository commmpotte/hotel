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
  apiKey: "AIzaSyAd78tW78kKCr8tmqhkRUL2Nqgzd-yGbjc",
  authDomain: "hotel-v4-dev-2022.firebaseapp.com",
  projectId: "hotel-v4-dev-2022",
  storageBucket: "hotel-v4-dev-2022.appspot.com",
  messagingSenderId: "1083759955466",
  appId: "1:1083759955466:web:593802bb84aa765952d9f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider()