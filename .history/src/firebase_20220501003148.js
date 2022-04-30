// Import the functions you need from the SDKs you need
import firebase from './firebase';
import { initializeApp } from "./firebase/app";
import { getAnalytics } from "./firebase/analytics";
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
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const analytics = getAnalytics(app);

export { auth, provider, storage };
export default db;
