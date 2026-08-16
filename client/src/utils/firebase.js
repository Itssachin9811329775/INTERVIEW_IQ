
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-c61ff.firebaseapp.com",
  projectId: "interviewiq-c61ff",
  storageBucket: "interviewiq-c61ff.firebasestorage.app",
  messagingSenderId: "1073330675926",
  appId: "1:1073330675926:web:d327e7ffe3a5c16e0b2977"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}