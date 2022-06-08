// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmJKsawedt2GU2UrmFWbf9jmsFoAgEea4",
  authDomain: "challenge-2509f.firebaseapp.com",
  projectId: "challenge-2509f",
  storageBucket: "challenge-2509f.appspot.com",
  messagingSenderId: "951165175515",
  appId: "1:951165175515:web:9eadefa064d277ebd92efe",
  measurementId: "G-LX9EN6YLCL",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
