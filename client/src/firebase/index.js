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

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      alert('error creating user', error.message);
    }
  }
  // eslint-disable-next-line consistent-return
  return userRef;
};




export {
  storage, createUserProfileDocument, auth, firestore, firebase as default,
};
