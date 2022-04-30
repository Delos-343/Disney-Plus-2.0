// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrp_clo_SYQAqpQgH2ITFX-0OFS043LDo",
    authDomain: "disneyplus-clone-e9c05.firebaseapp.com",
    projectId: "disneyplus-clone-e9c05",
    storageBucket: "disneyplus-clone-e9c05.appspot.com",
    messagingSenderId: "168968182077",
    appId: "1:168968182077:web:aec437d69befe241100d54",
    measurementId: "G-9TSWGKE9N6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = Firestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = storage();

export { auth, provider, storage };
export default db;