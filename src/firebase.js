import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH,
    projectId: process.env.REACT_APP_PROJ,
    storageBucket: process.env.REACT_APP_STOR,
    messagingSenderId: process.env.REACT_APP_MSG,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEAS
});

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;
const db = firebaseApp.firestore();
export default db;