import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXOjk-GgzG0teW_7baipxJ100SlYEGDgs",
    authDomain: "knightly-app.firebaseapp.com",
    projectId: "knightly-app",
    storageBucket: "knightly-app.firebasestorage.app",
    messagingSenderId: "86174464367",
    appId: "1:86174464367:web:81b2bac65374632a00109a",
    measurementId: "G-6PVLSTM722"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
