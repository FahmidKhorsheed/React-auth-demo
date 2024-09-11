// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0c_SXY7IKcDb0AEpyaaGrFztTbHd6PwE",
  authDomain: "authdemo-af460.firebaseapp.com",
  projectId: "authdemo-af460",
  storageBucket: "authdemo-af460.appspot.com",
  messagingSenderId: "637542878622",
  appId: "1:637542878622:web:7684fa9b406b404f819a8f",
  measurementId: "G-ZFHSZ7DJ3E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
