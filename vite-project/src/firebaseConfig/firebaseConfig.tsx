// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvTNvbZDTZIW3xEoaXHv6uDagK5Jya6U4",
  authDomain: "user-authentication-8a2d1.firebaseapp.com",
  projectId: "user-authentication-8a2d1",
  storageBucket: "user-authentication-8a2d1.appspot.com",
  messagingSenderId: "261220201734",
  appId: "1:261220201734:web:f85254d450a20416711a87",
  measurementId: "G-XZTXF64MQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
