// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACAVy1wquh9cU6Rf9rcBI0CyWXDTuPtc8",
  authDomain: "todo-list-e01fc.firebaseapp.com",
  projectId: "todo-list-e01fc",
  storageBucket: "todo-list-e01fc.appspot.com",
  messagingSenderId: "645820338730",
  appId: "1:645820338730:web:ead0068fc1c52350e96953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)