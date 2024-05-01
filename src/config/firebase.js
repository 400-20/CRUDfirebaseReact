// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHFG6FP53YGvNfDOQUZaBZOrdVbs2fFxg",
  authDomain: "vite-contact-31f0a.firebaseapp.com",
  projectId: "vite-contact-31f0a",
  storageBucket: "vite-contact-31f0a.appspot.com",
  messagingSenderId: "226250268224",
  appId: "1:226250268224:web:6fe76f7f6dea75c62d49a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;