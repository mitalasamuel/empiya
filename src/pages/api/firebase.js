import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC3pfpJaCHj-PvT0BKoQ6Idrr1c1DsYMlY",
    authDomain: "empiya-e78ea.firebaseapp.com",
    projectId: "empiya-e78ea",
    storageBucket: "empiya-e78ea.appspot.com",
    messagingSenderId: "608156601828",
    appId: "1:608156601828:web:86a3e14c82154c1ac24bf1",
    measurementId: "G-XMDKZFL1CC"
  };
  

// Check if Firebase app is already initialized
if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}


export const auth = firebase.auth();
export default firebase;