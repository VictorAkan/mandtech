// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGK1rx4j9cpYeQUcOWzcwQ0VJtS-QEsc8",
    authDomain: "mandtech-8ac5e.firebaseapp.com",
    projectId: "mandtech-8ac5e",
    storageBucket: "mandtech-8ac5e.appspot.com",
    messagingSenderId: "84829640571",
    appId: "1:84829640571:web:c595a1298e9956cb278fde",
    measurementId: "G-C2GR2YS2FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {db, auth, storage}