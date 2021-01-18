import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const fbConfig = {
  apiKey: "AIzaSyDLkh0aGBITSOCOy9XC7YMI3YviUk-kkSs",
  authDomain: "marvel-comics-bookstore.firebaseapp.com",
  databaseURL: "https://marvel-comics-bookstore.firebaseio.com",
  projectId: "marvel-comics-bookstore",
  storageBucket: "marvel-comics-bookstore.appspot.com",
  messagingSenderId: "809045215571",
  appId: "1:809045215571:web:fa28089b8b9df8c0d239a6",
  measurementId: "G-8X8Y7Y4J1B",
};
firebase.initializeApp(fbConfig);
export default firebase;
