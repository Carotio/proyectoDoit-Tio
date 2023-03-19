import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVX61wclpuWEvKgVmuySTQbhAqaxZU10w",
  authDomain: "pf-tuplantita-carolinatio.firebaseapp.com",
  projectId: "pf-tuplantita-carolinatio",
  storageBucket: "pf-tuplantita-carolinatio.appspot.com",
  messagingSenderId: "699770163793",
  appId: "1:699770163793:web:f1360d45e002d25cd9de70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

