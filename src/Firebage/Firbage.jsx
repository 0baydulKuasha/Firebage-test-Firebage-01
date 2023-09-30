// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHgNyaqZHEPnKPvwG8OrCCRnRsgvJxDbA",
  authDomain: "firbage-test.firebaseapp.com",
  projectId: "firbage-test",
  storageBucket: "firbage-test.appspot.com",
  messagingSenderId: "198843158606",
  appId: "1:198843158606:web:70c30d4fb6dbf9a267331f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
