import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDOyYxR8LtLxw5T-LD7eBqd-OlhEMv8vDM',
  authDomain: 'react-slack-clone-38e3b.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-38e3b.firebaseio.com',
  projectId: 'react-slack-clone-38e3b',
  storageBucket: 'react-slack-clone-38e3b.appspot.com',
  messagingSenderId: '89013533718',
  appId: '1:89013533718:web:b3729449401a76d87b8937',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};
