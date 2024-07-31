// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4a1CYhHlXxZmAYXIa8K7h2YEU7GnwE2U",
  authDomain: "hspantryapp-bf522.firebaseapp.com",
  projectId: "hspantryapp-bf522",
  storageBucket: "hspantryapp-bf522",
  messagingSenderId: "941976677673",
  appId: "1:941976677673:web:f7969d4ce3c0fb2c959b38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { app, firestore };