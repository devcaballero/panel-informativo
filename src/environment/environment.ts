// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWalKfXXrjF02A600DnH9Arj5I8KVLFxA",
  authDomain: "panel-informativo.firebaseapp.com",
  projectId: "panel-informativo",
  storageBucket: "panel-informativo.appspot.com",
  messagingSenderId: "67666095644",
  appId: "1:67666095644:web:5161c9cfaa63866d0bf9d9",
  measurementId: "G-D2GVLJ65MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);