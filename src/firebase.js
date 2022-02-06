// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCzW2uv-xvLV2z3krqG2IUUJWSfZKrCodc",
    authDomain: "disney-with-react.firebaseapp.com",
    projectId: "disney-with-react",
    storageBucket: "disney-with-react.appspot.com",
    messagingSenderId: "842161533532",
    appId: "1:842161533532:web:40ef052a03d995d301ac99",
    measurementId: "G-R5NKXHTK0C"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();



export default db;
