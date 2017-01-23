import firebase from 'firebase';
import { addNewMessage, addConversation, addMessageToConversation } from './actions';
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

// db stuff
const db = firebase.database();

db.ref('conversations').on('child_added', function(data) {
  const conversation = data.val();
  const conversationId = conversation.conversationId;
  conversation.messages = [];
  store.dispatch(addConversation(conversation));
  db.ref('messages')
    .orderByChild('conversationId')
    .equalTo(conversationId)
    .on('child_added', function(data) {
      const message = data.val();
      store.dispatch(addMessageToConversation(message));
    });
});

// db.ref('messages')
//   .orderByChild('conversationId')
//   .equalTo(userId)
//   .on('child_added', function(data) {
//     const message = data.val();
//     store.dispatch(addNewMessage(message));
//    });


export default db;
