// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB61Yqe32KwQMp7Ui-HFLSfqDN-SO0NYSI",
  authDomain: "clone-cae02.firebaseapp.com",
  projectId: "clone-cae02",
  storageBucket: "clone-cae02.appspot.com",
  messagingSenderId: "336315643115",
  appId: "1:336315643115:web:1bd53c70b0740c6c2bfaae",
  measurementId: "G-ET5Y9LSTD9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();


export { db, auth };
