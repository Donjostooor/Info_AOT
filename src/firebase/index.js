// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//db main
const firebaseConfig = {
  apiKey: "AIzaSyDUdquI4ae4S6d0FyIsMz8PB9ycdRp9L5I",
  authDomain: "aot-info-f2b82.firebaseapp.com",
  projectId: "aot-info-f2b82",
  storageBucket: "aot-info-f2b82.appspot.com",
  messagingSenderId: "746742242068",
  appId: "1:746742242068:web:e58bc5a42bb9a5bc810001"
};
/*
// tester
const firebaseConfig = {
  apiKey: "AIzaSyDN6lgn5g0VqMK_m8-bU56JdN2t2BRUTgQ",
  authDomain: "tester-2-949ac.firebaseapp.com",
  projectId: "tester-2-949ac",
  storageBucket: "tester-2-949ac.appspot.com",
  messagingSenderId: "817793978234",
  appId: "1:817793978234:web:4dfab753e4259bcb74d0c3",
  measurementId: "G-W9WYQRDRW0"
};*/
export default firebaseConfig;