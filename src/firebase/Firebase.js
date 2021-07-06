import firebase from "firebase/app";
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCoVuF-vGBN2xP9fSg2CEBuwFFK1rKrf2U",
    authDomain: "pokedex-app-7ca0d.firebaseapp.com",
    projectId: "pokedex-app-7ca0d",
    storageBucket: "pokedex-app-7ca0d.appspot.com",
    messagingSenderId: "288285619131",
    appId: "1:288285619131:web:168f4997c422ea1cb58a9e"
});

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};