import firebase from 'firebase';
import { browserHistory } from 'react-router';

const provider = new firebase.auth.GoogleAuthProvider();

// signs you in with google and then uses callback to push you to /admin
export function signIn(callback) {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    callback(result)
  });
}

// signs you out and then pushes you back to sign in page
export function signOut() {
  firebase.auth().signOut().then(function() {
    browserHistory.push('/signin');
}, function(error) {
  // An error happened.
});
}

export function requireAuth(nextState, replace, callback){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      callback();
    } else {
      replace('/signin');
      callback();
    }
  });
}

export function isAuthenticated(nextState, replace, callback){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      replace('/admin');
      callback();
    } else {
      callback();
    }
  });
}
