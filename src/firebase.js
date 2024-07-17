import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCw3h5FBSme802VgA3GONP8RbtHVNbJUBI",
  authDomain: "url-shortener-894e4.firebaseapp.com",
  projectId: "url-shortener-894e4",
  storageBucket: "url-shortener-894e4.appspot.com",
  messagingSenderId: "379171907229",
  appId: "1:379171907229:web:be71ede865be7f9c3bd674",
  measurementId: "G-ECMD6SDJRN"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, query, where, onSnapshot };
