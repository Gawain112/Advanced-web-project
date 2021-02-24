import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUABEh2ypaoLMvn_ZnaCgf6fgGiiBqDMY",
  authDomain: "add-data-database.firebaseapp.com",
  projectId: "add-data-database",
  storageBucket: "add-data-database.appspot.com",
  messagingSenderId: "932770559709",
  appId: "1:932770559709:web:2e3cc31ef0c4b0ca364d34",
};

firebase.initializeApp(firebaseConfig);
const firebaseAuthentication = firebase.auth();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebaseAuthentication, firebaseFireStore, timestamp };
