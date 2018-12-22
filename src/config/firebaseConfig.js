import firebase from 'firebase';

// innovoskies realtime DB - avj2352
var config = {
  apiKey: "AIzaSyAtx_DzvsbqAS4t18yXpZLap6WmPf1xASs",
  authDomain: "innovoskies-2018.firebaseapp.com",
  databaseURL: "https://innovoskies-2018.firebaseio.com",
  projectId: "innovoskies-2018",
  storageBucket: "innovoskies-2018.appspot.com",
  messagingSenderId: "951743521809"
};
  
// Initialize Firebase
firebase.initializeApp(config);
  
export const ref = firebase.database().ref();
export const storageObj = firebase.storage();
export const firebaseAuth = firebase.auth;

// Profile table
export const profileRef = firebase.database().ref('/profile');