// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyqedsAMtopZBLY4eXuqSByHf8Q5hwXJY",
  authDomain: "mievento-fc0b2.firebaseapp.com",
  projectId: "mievento-fc0b2",
  storageBucket: "mievento-fc0b2.appspot.com",
  messagingSenderId: "433355063325",
  appId: "1:433355063325:web:a619ecd9dc56679272c6f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app,auth}