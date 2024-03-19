// Import the functions you need from the SDKs you need
import exp from "constants";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsuWQ0f_NvsVRQ07FdvhiZqL7f9FWbiI0",
  authDomain: "vuetify-5dea0.firebaseapp.com",
  projectId: "vuetify-5dea0",
  storageBucket: "vuetify-5dea0.appspot.com",
  messagingSenderId: "276835695748",
  appId: "1:276835695748:web:526dfe212c52ca978596d1",
  measurementId: "G-NKKMG2VFQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }