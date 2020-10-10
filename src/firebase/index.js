import * as firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBCpLufsheebsudaDWnP_72mYIbUcF3Kdo",
    authDomain: "react-yugicueva.firebaseapp.com",
    databaseURL: "https://react-yugicueva.firebaseio.com",
    projectId: "react-yugicueva",
    storageBucket: "react-yugicueva.appspot.com",
    messagingSenderId: "132306586954",
    appId: "1:132306586954:web:62db68443983cf0700c5b3",
    measurementId: "G-0VN07KTLZW"
});

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app);
}