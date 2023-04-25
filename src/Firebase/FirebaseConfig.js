// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    // paste your firebase config here
    apiKey: "AIzaSyCecetqP2u9IuW-hh0stwACH1XbROzWgZM",
    authDomain: "procart-2067c.firebaseapp.com",
    projectId: "procart-2067c",
    storageBucket: "procart-2067c.appspot.com",
    messagingSenderId: "231593623229",
    appId: "1:231593623229:web:3c225699e90838cafd41d4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { storage, db };
