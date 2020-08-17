import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB5F3x05Au8Q1Z-SngX-5yifqTTKqdGfbA',
  authDomain: 'my-bookstore-10ebf.firebaseapp.com',
  databaseURL: 'https://my-bookstore-10ebf.firebaseio.com',
  projectId: 'my-bookstore-10ebf',
  storageBucket: 'my-bookstore-10ebf.appspot.com',
  messagingSenderId: '1026592209435',
  appId: '1:1026592209435:web:e3e47004ef5662fcec56be',
  measurementId: 'G-YW2ZYNY1LW',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(provider);


export {
  storage, signInWithGoogle, auth, firestore, firebase as default,
};
