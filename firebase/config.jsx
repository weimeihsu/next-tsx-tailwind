// Import the functions you need from the SDKs you need
import exp from "constants";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0GBOURr6G-nkCT_oL9jjKhf2nwaw80VY",
  authDomain: "my-vue-8743f.firebaseapp.com",
  databaseURL: "https://my-vue-8743f-default-rtdb.firebaseio.com",
  projectId: "my-vue-8743f",
  storageBucket: "my-vue-8743f.appspot.com",
  messagingSenderId: "4609273216",
  appId: "1:4609273216:web:3d968bac26418e7de3e565",
  measurementId: "G-DLNJSBPKGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }