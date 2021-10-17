import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDBselFDLkJZcd6qee0hn4ToKxd35lxETU",
  authDomain: "twitter-project-ebfd9.firebaseapp.com",
  projectId: "twitter-project-ebfd9",
  storageBucket: "twitter-project-ebfd9.appspot.com",
  messagingSenderId: "1062215900102",
  appId: "1:1062215900102:web:9c500b4af4157c0bb330c7",
  measurementId: "G-LD44TT76TY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;