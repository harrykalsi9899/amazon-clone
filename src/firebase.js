import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJbxySJ2JxvS2Uc24EczleW_9iMiK1uS4",
  authDomain: "clone-a8661.firebaseapp.com",
  databaseURL: "https://clone-a8661.firebaseio.com",
  projectId: "clone-a8661",
  storageBucket: "clone-a8661.appspot.com",
  messagingSenderId: "359467319595",
  appId: "1:359467319595:web:1c345d9f23cd3f813e856e",
  measurementId: "G-BB47Y3WLWG",
});

const auth = firebase.auth();

export { auth };
