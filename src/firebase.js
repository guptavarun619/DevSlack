import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyD0EgoXspeJXcKRLc_JhCpB2cufRt8hOJ8",
  authDomain: "slack-clone-c6d1f.firebaseapp.com",
  databaseURL: "https://slack-clone-c6d1f.firebaseio.com",
  projectId: "slack-clone-c6d1f",
  storageBucket: "slack-clone-c6d1f.appspot.com",
  messagingSenderId: "1000656022630",
  appId: "1:1000656022630:web:aed19bf9c22c05bbeb91a7",
  measurementId: "G-WHDKSQKV7B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
