// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Zx4pzlNhG7lAaQ6p1-a9Q98CZmuwPss",
  authDomain: "form-api-e4006.firebaseapp.com",
  projectId: "form-api-e4006",
  storageBucket: "form-api-e4006.firebasestorage.app",
  messagingSenderId: "581772099216",
  appId: "1:581772099216:web:34a6bc78ff1274b9526215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);