// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.firebase_apikey,
  authDomain: process.env.firebase_authdomain,
  projectId: process.env.firebase_projectid,
  storageBucket: process.env.firebase_storagebucket,
  messagingSenderId: process.env.firebase_messagingsenderid,
  appId: process.env.firebase_appid
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app)
