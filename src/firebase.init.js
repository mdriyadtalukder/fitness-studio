// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGAhvGKWFamHKNPN_dreYGuECce30J7nk",
  authDomain: "jack-fitness-studio.firebaseapp.com",
  projectId: "jack-fitness-studio",
  storageBucket: "jack-fitness-studio.appspot.com",
  messagingSenderId: "897586934621",
  appId: "1:897586934621:web:da3b410f2932c11886eeb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;