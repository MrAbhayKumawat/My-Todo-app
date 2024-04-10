import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
    apiKey: "AIzaSyAB_fvIaSVjnXcRGwUdjuaV4552P1Vl2sg",
    authDomain: "todo-app-69979.firebaseapp.com",
    projectId: "todo-app-69979",
    storageBucket: "todo-app-69979.appspot.com",
    messagingSenderId: "901666108940",
    appId: "1:901666108940:web:eb72c49591cf60b1a32029"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);