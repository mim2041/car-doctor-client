// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTEv-xxJO_6DGlJvyVRhR9i8NyVPK2dxM",
  authDomain: "car-doctor-162b1.firebaseapp.com",
  projectId: "car-doctor-162b1",
  storageBucket: "car-doctor-162b1.appspot.com",
  messagingSenderId: "1093613419597",
  appId: "1:1093613419597:web:1984093958d14d8a42b004"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;