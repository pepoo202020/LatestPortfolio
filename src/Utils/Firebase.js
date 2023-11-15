import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmdHEZXqQcN2QvaKx8vGIVY7vBhRh8API",
  authDomain: "portfolio-39e76.firebaseapp.com",
  projectId: "portfolio-39e76",
  storageBucket: "portfolio-39e76.appspot.com",
  messagingSenderId: "208149328743",
  appId: "1:208149328743:web:597e25e534fd8d343075c2",
  measurementId: "G-5NPPRVW3HX",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

export const loginWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
