// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiKrOEV1vgWymIpTEU849kFoxvl1dQrzs",
  authDomain: "eanchecker-c7f20.firebaseapp.com",
  projectId: "eanchecker-c7f20",
  storageBucket: "eanchecker-c7f20.appspot.com",
  messagingSenderId: "399096407108",
  appId: "1:399096407108:web:06cfaaad749a645978c811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app)
