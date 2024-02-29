// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFVG4dYFLFG6TBa1zCDVD-tKuBHT9dCak",
  authDomain: "short-diary-app-aa08f.firebaseapp.com",
  projectId: "short-diary-app-aa08f",
  storageBucket: "short-diary-app-aa08f.appspot.com",
  messagingSenderId: "102647243894",
  appId: "1:102647243894:web:a18e420bfb90423f25ab57",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage }