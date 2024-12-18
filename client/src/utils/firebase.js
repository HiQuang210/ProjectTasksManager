// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanagerhtn.firebaseapp.com",
  projectId: "taskmanagerhtn",
  storageBucket: "taskmanagerhtn.firebasestorage.app",
  messagingSenderId: "866501792317",
  appId: "1:866501792317:web:c3931d852d8ea2354f1054",
  measurementId: "G-T3FV3JN07Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);