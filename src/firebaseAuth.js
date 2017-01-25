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

// why dont these work?
// check to see if you're signed in, if so, push to admin
// export function isAuthenticated(nextState, replace) {
//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       return true
//     } else {
//       return false
//     }
//   });
// }
// check to see if signed in, if not redirect to login
// export function requireAuth(nextState, replace) {
//     if (isAuthenticated === false) {
//       replace({
//         pathname: '/signin'
//       })
//     } else if (isAuthenticated === true){
//       replace({
//         pathname: '/admin'
//       })
//     }
// }
