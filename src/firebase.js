// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXyGDWEtGL7sDjGDdSuzAHydKkjNcQyAM",
  authDomain: "test-project-fc23b.firebaseapp.com",
  databaseURL: "https://test-project-fc23b-default-rtdb.firebaseio.com",
  projectId: "test-project-fc23b",
  storageBucket: "test-project-fc23b.appspot.com",
  messagingSenderId: "87127082698",
  appId: "1:87127082698:web:4d8d271790b5744bbd1633",
  measurementId: "G-1QRW4JE4E6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };