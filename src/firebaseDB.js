import firebase from 'firebase';
import { addNewMessage, addNewConversation } from './actions';
import store from './index';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyA1Db7hSJ658255QfdZ09mjJR4VxcXbDP8",
  authDomain: "portfolio-chat.firebaseapp.com",
  databaseURL: "https://portfolio-chat.firebaseio.com",
  storageBucket: "portfolio-chat.appspot.com",
  messagingSenderId: "892675563096"
};

firebase.initializeApp(config);

// Database stuff
const db = firebase.database();

// db.ref('conversations')
//   .on('child_added', function(data) {
//     const conversation = data.val();
//     const conversationId = conversation.conversationId;
//     store.dispatch(addNewConversation(conversation));
//   });

function uid(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
}

export function getUserId(){
  var userId = '';
  // get and or set user
  if(localStorage.user){
    var userId = localStorage.user;
    console.log('you exist:', userId);
    firebase.database().ref('conversations/' + userId).set({
      conversationId: userId
    });
  } else {
    userId = uid();
    localStorage.user = userId;
    console.log('created user');
    firebase.database().ref('conversations/' + userId).set({
      conversationId: userId,
      createdOn: Date.now()
    });
  }
  return userId;
}

let userId = getUserId();

db.ref('messages')
  .orderByChild('conversationId')
  .equalTo(userId)
  .on('child_added', function(data) {
    const message = data.val();
    store.dispatch(addNewMessage(message));
   });


export default db;
