// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpAuV2_--Ma2J-BicCF3LOvyw5WHhKO6k",
  authDomain: "ema-jhon-c7596.firebaseapp.com",
  projectId: "ema-jhon-c7596",
  storageBucket: "ema-jhon-c7596.appspot.com",
  messagingSenderId: "104335118252",
  appId: "1:104335118252:web:02194e7d8dbae232d4b409",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
