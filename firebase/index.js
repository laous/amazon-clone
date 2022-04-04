import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJu-FHUWmi710UKbhy9KPlutgRVnsZjKQ",
  authDomain: "next-9a26e.firebaseapp.com",
  projectId: "next-9a26e",
  storageBucket: "next-9a26e.appspot.com",
  messagingSenderId: "136168654415",
  appId: "1:136168654415:web:b3c6a899bb16b2c111cc3a"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
// const app = firebase.initializeApp(firebaseConfig);


const db = app.firestore()

export default db;