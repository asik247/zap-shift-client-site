// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC232kdqp0y6g_4Dy3IYOCCYF2La1rXiGQ",
    authDomain: "zap-shift-bde07.firebaseapp.com",
    projectId: "zap-shift-bde07",
    storageBucket: "zap-shift-bde07.firebasestorage.app",
    messagingSenderId: "323736640136",
    appId: "1:323736640136:web:bacc7744805d2f536bdd3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);