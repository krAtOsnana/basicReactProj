// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKzNO6TcmpbJRnosSFnR1O3leGw2iM1uA",
  authDomain: "vite-contact-3f73c.firebaseapp.com",
  projectId: "vite-contact-3f73c",
  storageBucket: "vite-contact-3f73c.appspot.com",
  messagingSenderId: "10935442604",
  appId: "1:10935442604:web:47b65c530122c195d71309"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)