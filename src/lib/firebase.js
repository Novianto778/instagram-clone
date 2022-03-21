import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgDIWO9MZNFaN5us5o9W0iQ1nAxOsZdY8",
  authDomain: "instagram-clone-3a30e.firebaseapp.com",
  projectId: "instagram-clone-3a30e",
  storageBucket: "instagram-clone-3a30e.appspot.com",
  messagingSenderId: "956774543850",
  appId: "1:956774543850:web:e39093fdf98c8918208293",
};

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
