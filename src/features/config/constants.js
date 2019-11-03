import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBmJiGeHFj3gv-dIC10siwQvFNmXH7qrJk",
  authDomain: "doppelganger-app1.firebaseapp.com",
  databaseURL: "https://doppelganger-app1.firebaseio.com",
  projectId: "doppelganger-app1",
  storageBucket: "doppelganger-app1.appspot.com",
  messagingSenderId: "930649592976",
  appId: "1:930649592976:web:87294338aa3e88d716b415",
  measurementId: "G-YZSHN24Z32"
};
firebase.initializeApp(firebaseConfig);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
export const db = firebase
  .firestore()
  .settings({ timestampsInSnapshots: true });
