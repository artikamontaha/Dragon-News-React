// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrKHxzzZdBF8mFyb1BJOaEYveIPjHrZ_U",
  authDomain: "dragon-news-firebase-and-react.firebaseapp.com",
  projectId: "dragon-news-firebase-and-react",
  storageBucket: "dragon-news-firebase-and-react.firebasestorage.app",
  messagingSenderId: "286995934104",
  appId: "1:286995934104:web:1ce55b295721feda4cd9ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app