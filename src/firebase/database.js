import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdK51TJ9dL5WuTTqM4TwdCOkCyGLGPbBc",
  authDomain: "advanced-web-project.firebaseapp.com",
  projectId: "advanced-web-project",
  storageBucket: "advanced-web-project.appspot.com",
  messagingSenderId: "886901891838",
  appId: "1:886901891838:web:f474c075836f6208befbaf",
};

firebase.initializeApp(firebaseConfig);
const firebaseAuthenticationService = firebase.auth();
const firebaseFireStore = firebase.firestore();

export { firebaseAuthenticationService, firebaseFireStore };
