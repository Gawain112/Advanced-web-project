import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  /* Chris Carr fs */
  apiKey: "AIzaSyCUABEh2ypaoLMvn_ZnaCgf6fgGiiBqDMY",
  authDomain: "add-data-database.firebaseapp.com",
  projectId: "add-data-database",
  storageBucket: "add-data-database.appspot.com",
  messagingSenderId: "932770559709",
  appId: "1:932770559709:web:2e3cc31ef0c4b0ca364d34",
  /* sam lord fs
  apiKey: "AIzaSyAhQEw9MtCtYvdx4fHHjbULW4EU23_YibA",
  authDomain: "cardiomyopathy-feed.firebaseapp.com",
  projectId: "cardiomyopathy-feed",
  storageBucket: "cardiomyopathy-feed.appspot.com",
  messagingSenderId: "892710548509",
  appId: "1:892710548509:web:ec102a131cdb22f09302f4"
  */
};

firebase.initializeApp(firebaseConfig);
const firebaseAuthentication = firebase.auth();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebaseAuthentication, firebaseFireStore, timestamp };
