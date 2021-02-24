import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA50CWBNkgind68HHIuWZ5cj0Zx4fuipKI",
  authDomain: "group-cardiomyopathy.firebaseapp.com",
  projectId: "group-cardiomyopathy",
  storageBucket: "group-cardiomyopathy.appspot.com",
  messagingSenderId: "803448949764",
  appId: "1:803448949764:web:fdf6ccba16d0d69cb93951",
};

firebase.initializeApp(firebaseConfig);
const firebaseAuthenticationService = firebase.auth();
const firebaseFireStore = firebase.firestore();

export { firebaseAuthenticationService, firebaseFireStore };
