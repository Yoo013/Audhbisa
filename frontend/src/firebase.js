// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBayEx_MXB99MxwxxIqjnx0nckZ-BafOJk",
  authDomain: "gambaraman-73228.firebaseapp.com",
  projectId: "gambaraman-73228",
  storageBucket: "gambaraman-73228.appspot.com",
  messagingSenderId: "565626914342",
  appId: "1:565626914342:web:81ce2af40582e665d208e7",
  measurementId: "G-EYF3CZHTQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();