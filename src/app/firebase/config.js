// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzcZfOdQFnEihBqeet_1PKxbolHt8H394",
  authDomain: "akumal-app.firebaseapp.com",
  projectId: "akumal-app",
  storageBucket: "akumal-app.appspot.com",
  messagingSenderId: "417160546829",
  appId: "1:417160546829:web:9c5ef4974f5b8806af2344",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
