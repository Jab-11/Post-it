// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8N6eh6Lj1wHQpgVPuIyfF1XDbOfROvHU",
  authDomain: "react-post-it.firebaseapp.com",
  projectId: "react-post-it",
  storageBucket: "react-post-it.appspot.com",
  messagingSenderId: "686684699739",
  appId: "1:686684699739:web:3ea9be25ce3b405d99537e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };