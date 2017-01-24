import firebase from 'firebase';
import { browserHistory } from 'react-router';

const provider = new firebase.auth.GoogleAuthProvider();

export function signIn(cb) {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    cb(result)
  });
}

export function signOut() {
  firebase.auth().signOut().then(function() {
    browserHistory.push('/signin');
}, function(error) {
  // An error happened.
});
}
