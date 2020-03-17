import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB5AoKno4jKV1aDhg8jwbn_npKsA1qaLH4',
  authDomain: 'crwn-db-e8d14.firebaseapp.com',
  databaseURL: 'https://crwn-db-e8d14.firebaseio.com',
  projectId: 'crwn-db-e8d14',
  storageBucket: 'crwn-db-e8d14.appspot.com',
  messagingSenderId: '258546546505',
  appId: '1:258546546505:web:8189f58cc6694a0ef6cc98'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
