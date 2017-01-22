import firebaseDB, { getUserId } from '../firebaseDB';

export const SEND__MESSAGE = 'SEND__MESSAGE';
export const ADD__NEW__MESSAGE = 'ADD_NEW_MESSAGE';

export function addNewMessage(message){
  return {
    type: ADD__NEW__MESSAGE,
    message,
  }
}

// pushes message to firebase
export function sendMessage(message) {
  firebaseDB.ref('messages').push({
    message,
    author: 'client',
    conversationId: getUserId(),
    createdOn: Date.now(),
  }, function(){
    console.log('success');
  })
  return {
    type: SEND__MESSAGE
  }
}
