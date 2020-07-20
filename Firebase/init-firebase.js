import app from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyApCswK8JlS9GPguaseWuJ8xnq5TuZMK6Q",
  authDomain: "nba-f-890a5.firebaseapp.com",
  databaseURL: "https://nba-f-890a5.firebaseio.com",
  projectId: "nba-f-890a5",
  storageBucket: "nba-f-890a5.appspot.com",
  messagingSenderId: "515533063517",
  appId: "1:515533063517:web:b863795fda332aa6"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
