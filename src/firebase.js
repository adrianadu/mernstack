// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB2AbLbcxmB-5IhrZEf2Pj7lFestmbr-7A",
    authDomain: "clone-dd975.firebaseapp.com",
    /*databaseURL:"https://clone-dd975.firebaseio.com",*/
    projectId: "clone-dd975",
    storageBucket: "clone-dd975.appspot.com",
    messagingSenderId: "18516573717",
    appId: "1:18516573717:web:3e1ceb17257b2b8620581c",
    measurementId: "G-YLVC9WNRP9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth,firebaseApp};