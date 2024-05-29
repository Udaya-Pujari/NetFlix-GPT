// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTn5LAa1m5gHpCr7s0QRns8xkEIEo_hYo",
  authDomain: "netflixgpt-b55d5.firebaseapp.com",
  projectId: "netflixgpt-b55d5",
  storageBucket: "netflixgpt-b55d5.appspot.com",
  messagingSenderId: "147346036722",
  appId: "1:147346036722:web:3ada8790403fac5f72bd6b",
  measurementId: "G-0CLRDVN6Z5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//insted of calling auth everywhere ,I will make it here as central so that every file can access
export const auth = getAuth();
