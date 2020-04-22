import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBiUVmm4uW4-BrAS7-sqoSYPzpW2hMxGjo",
  authDomain: "think-piece-live-e2c0d.firebaseapp.com",
  databaseURL: "https://think-piece-live-e2c0d.firebaseio.com",
  projectId: "think-piece-live-e2c0d",
  storageBucket: "think-piece-live-e2c0d.appspot.com",
  messagingSenderId: "1068019654412",
  appId: "1:1068019654412:web:4309585a7785ed2c5ef329",
  measurementId: "G-SRBB4DWL12",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

// For console debugging
window.firebase = firebase;

export default firebase;
