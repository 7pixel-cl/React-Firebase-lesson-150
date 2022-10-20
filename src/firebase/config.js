import firebase from "firebase/app ";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClRqYv0xb6D-vQMUJPitvmQBXKOnuQMBs",
  authDomain: "react-firebase-l150-7pixel.firebaseapp.com",
  projectId: "react-firebase-l150-7pixel",
  storageBucket: "react-firebase-l150-7pixel.appspot.com",
  messagingSenderId: "496327385772",
  appId: "1:496327385772:web:ae069e53104e181b977509",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firestore
const projectFirestore = firebase.firestore();
// Initialize Firebase Auth
const projectAuth = firebase.auth();

// Timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
