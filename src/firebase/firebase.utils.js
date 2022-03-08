import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjnToWEWYbPjyEdChYJjRtGH8dWJl1VdU",
  authDomain: "crwn-db-f9f51.firebaseapp.com",
  projectId: "crwn-db-f9f51",
  storageBucket: "crwn-db-f9f51.appspot.com",
  messagingSenderId: "140367041969",
  appId: "1:140367041969:web:4810a3b498dcf861251990",
  measurementId: "G-8WGHR11HZ2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;