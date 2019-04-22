import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var config = {
  apiKey: "AIzaSyD_L1qLQ-R5DT3C2LdhR6nlX9X5QpBq9vI",
  authDomain: "react-slacker-1fc71.firebaseapp.com",
  databaseURL: "https://react-slacker-1fc71.firebaseio.com",
  projectId: "react-slacker-1fc71",
  storageBucket: "react-slacker-1fc71.appspot.com",
  messagingSenderId: "350078431944"
};
firebase.initializeApp(config);

export default firebase