// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import { findByText } from "@testing-library/react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//FIREBASE CONFIG GOES below
const firebaseConfig=findByText();

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();


export { db, auth };
