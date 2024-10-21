// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJAMuZUOzZHUxGcFycJ2C835Q1QPP0b_Y",
  authDomain: "movielist-70ea1.firebaseapp.com",
  projectId: "movielist-70ea1",
  storageBucket: "movielist-70ea1.appspot.com",
  messagingSenderId: "445916118162",
  appId: "1:445916118162:web:5dca6f93c3e8bb3c823a4b",
  measurementId: "G-8BJ04BTDR6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
