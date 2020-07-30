import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDHzF_gOziThbJlix5--WQUiWYJXK4nJQc',
  authDomain: 'txroofingsolutions-193d8.firebaseapp.com',
  databaseURL: 'https://txroofingsolutions-193d8.firebaseio.com',
  projectId: 'txroofingsolutions-193d8',
  storageBucket: 'txroofingsolutions-193d8.appspot.com',
  messagingSenderId: '519820450785',
  appId: '1:519820450785:web:f5711b796594742ff190a0',
  measurementId: 'G-9D2YCQ871M'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
