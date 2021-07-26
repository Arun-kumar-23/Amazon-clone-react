import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD9182YNxWAve4BGqCf-B76ZA9OMPG3Kmg",
    authDomain: "clone-react-c0d3a.firebaseapp.com",
    projectId: "clone-react-c0d3a",
    storageBucket: "clone-react-c0d3a.appspot.com",
    messagingSenderId: "602319340830",
    appId: "1:602319340830:web:a7a1d5a8c05e9825d3b50f",
    measurementId: "G-6VYX0Y0CZH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}