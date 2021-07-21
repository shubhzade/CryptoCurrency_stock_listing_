import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBWNfJna543lQtQ2RQTc-KEhCse3qY1uBQ",
    authDomain: "crypto-site-58740.firebaseapp.com",
    projectId: "crypto-site-58740",
    storageBucket: "crypto-58740.appspot.com",
    messagingSenderId: "603652681767",
    appId: "1:603652681767:web:e114f25177eb372d6a1e02",
    measurementId: "G-SWW22TZSDX"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)

  const db=firebaseapp.firestore();
  const auth =firebase.auth();

  export {db ,auth};