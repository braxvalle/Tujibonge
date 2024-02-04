// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQKRnu60K-YzT7T_IxPYOjkx6xLsc6Kvs",
  authDomain: "tujibonge-f8797.firebaseapp.com",
  projectId: "tujibonge-f8797",
  storageBucket: "tujibonge-f8797.appspot.com",
  messagingSenderId: "365649422740",
  appId: "1:365649422740:web:6bc19f4d2062e09f9b0781",
  measurementId: "G-KSKTQDLMD9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
