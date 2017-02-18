import * as firebase from 'firebase'

// Firebase settings
// ---------------------------------o
const config = {
  apiKey: "AIzaSyC5iuJFtXMaaJ5UbhZ1FAejp5sSDwvI9-8",
  authDomain: "wip-portfolio.firebaseapp.com",
  databaseURL: "https://wip-portfolio.firebaseio.com",
  storageBucket: "wip-portfolio.appspot.com",
  messagingSenderId: "118188664735"
}
// Initialize database
firebase.initializeApp(config)

// Export database
const Database = firebase.database()

export default Database
