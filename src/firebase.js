// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.REACRT_APP_API_KEY ,
  authDomain:process.env.REACRT_APP_AUTH_DOMAIN ,
  databaseURL:process.env.REACRT_APP_DATABASE_URL ,
  projectId:process.env.REACRT_APP_PROJECT_ID ,
  storageBucket:process.env.REACRT_APP_STORAGE_BUCKET ,
  messagingSenderId:process.env.REACRT_APP_MESSAGING_SENDER_ID ,
  appId:process.env.REACRT_APP_APP_ID ,
  measurementId:process.env.REACRT_APP_MESSAGING_ID, 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);