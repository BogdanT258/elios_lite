import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAanq1FWNww0tIJcPjdp3IjYyec5W98G4Q",
    authDomain: "elios-lite.firebaseapp.com",
    projectId: "elios-lite",
    storageBucket: "elios-lite.appspot.com",
    messagingSenderId: "19696942624",
    appId: "1:19696942624:web:b3c21c2edda2bed5348645",
    measurementId: "G-FJ10CCE4H9"
};

const app = initializeApp(firebaseConfig);

const firedb = getFirestore(app);

export { app, firedb };
