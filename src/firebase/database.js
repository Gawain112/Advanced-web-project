import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhQEw9MtCtYvdx4fHHjbULW4EU23_YibA",
  authDomain: "cardiomyopathy-feed.firebaseapp.com",
  projectId: "cardiomyopathy-feed",
  storageBucket: "cardiomyopathy-feed.appspot.com",
  messagingSenderId: "892710548509",
  appId: "1:892710548509:web:ec102a131cdb22f09302f4"
};

firebase.initializeApp(firebaseConfig);
const firebaseAuthenticationService = firebase.auth();
const firebaseFireStore = firebase.firestore();

export { firebaseAuthenticationService, firebaseFireStore };
