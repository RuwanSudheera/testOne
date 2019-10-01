import firebase from "firebase";
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyB05nogBvC8Yqbsn_0vN4l3QLqN0nRbbaU",
    authDomain: "react-drawer-5689f.firebaseapp.com",
    databaseURL: "https://react-drawer-5689f.firebaseio.com",
    projectId: "react-drawer-5689f",
    storageBucket: "react-drawer-5689f.appspot.com",
    messagingSenderId: "233130914908",
    appId: "1:233130914908:web:07886c90a7683a1b9ca299",
    measurementId: "G-6ZQKJDL1B0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}
