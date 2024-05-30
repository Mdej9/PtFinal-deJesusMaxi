import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKyYHzisqFHjxu7ocXcuvGkN3-Zikeiv0",
  authDomain: "react-coder-2ce69.firebaseapp.com",
  projectId: "react-coder-2ce69",
  storageBucket: "react-coder-2ce69.appspot.com",
  messagingSenderId: "564543162910",
  appId: "1:564543162910:web:bd18d4d6b8403ebdacfc0f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(  <App />)
