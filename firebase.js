import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBF2X-ZSRPxw3MYcofqo9fuR9OJACZT4mI",
    authDomain: "uber-eats-clone-rn-f7205.firebaseapp.com",
    projectId: "uber-eats-clone-rn-f7205",
    storageBucket: "uber-eats-clone-rn-f7205.appspot.com",
    messagingSenderId: "928512003231",
    appId: "1:928512003231:web:4f0bb47d192c257fb8a6aa"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;