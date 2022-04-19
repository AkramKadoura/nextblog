import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyArJhTmbtGY1Kruj7U5at3mMikYgqjtMSI",
    authDomain: "nextblog-db.firebaseapp.com",
    projectId: "nextblog-db",
    storageBucket: "nextblog-db.appspot.com",
    messagingSenderId: "654504819503",
    appId: "1:654504819503:web:5592eb5e044e21171f7fda"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export const firestore = firebase.firestore();
export const storage = firebase.storage();

