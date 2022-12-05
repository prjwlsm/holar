// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHyePijjZ_uLTDOoE5EZA2QVmSa6nhlr4",
  authDomain: "holaport-ed74a.firebaseapp.com",
  projectId: "holaport-ed74a",
  storageBucket: "holaport-ed74a.appspot.com",
  messagingSenderId: "547182732868",
  appId: "1:547182732868:web:140939325d1744cedcfe11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);