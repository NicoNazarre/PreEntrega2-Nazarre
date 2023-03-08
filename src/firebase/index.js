
import { getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBSrWuoTd4bYX4b0mEIyCsI29ZidXr8lBo",
  authDomain: "leniano-3acdb.firebaseapp.com",
  projectId: "leniano-3acdb",
  storageBucket: "leniano-3acdb.appspot.com",
  messagingSenderId: "794143275175",
  appId: "1:794143275175:web:47cfe410787636648fc382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFires (app)