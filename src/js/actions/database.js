import * as firebase from 'firebase'

// Firebase settings
// ---------------------------------o
const config = {
  apiKey: 'AIzaSyB2tCfSN13YpN5Z9n7Mt0GMS-K0FIxSgqk',
  authDomain: 'portfolio-60b74.firebaseapp.com',
  databaseURL: 'https://portfolio-60b74.firebaseio.com',
  storageBucket: 'portfolio-60b74.appspot.com',
  messagingSenderId: '424290733122',
}
// Initialize database
firebase.initializeApp(config)

// Export database
const Database = firebase.database()

export default Database
