import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKK6-p8ecx6UuwnW7f_sA4zp6a9br4cH0",
  authDomain: "clone-f2f5a.firebaseapp.com",
  projectId: "clone-f2f5a",
  storageBucket: "clone-f2f5a.appspot.com",
  messagingSenderId: "741776514806",
  appId: "1:741776514806:web:cc4ba2e23881963fc8d6d7",
  measurementId: "G-JS6WM31T71",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider, firebaseApp };
