// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDLXtEeH_p3sG1-ATKzrrL7CanJ7mgX_Ko",
    authDomain: "affable-app.firebaseapp.com",
    projectId: "affable-app",
    storageBucket: "affable-app.appspot.com",
    messagingSenderId: "858309546193",
    appId: "1:858309546193:web:a9fcc6a21a97f2bed435f0",
    measurementId: "G-P9EV432JTX"
  };

const firebaseApp = firebase.initializeApp
(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); 
const provider = new firebase.auth.
GoogleAuthProvider();

export { auth, provider }; 
export default db;