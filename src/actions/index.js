import firebaseDb from '../firebaseDb';

export const SEND__MESSAGE = 'SEND__MESSAGE';
// export const ADD__NEW__MESSAGE = 'ADD__NEW__MESSAGE';
export const ADD__CONVERSATION = 'ADD__CONVERSATION'
export const ADD__MESSAGE__TO__CONVERSATION = 'ADD__MESSAGE__TO__CONVERSATION'

export function addConversation(conversation) {
  return {
    type: ADD__CONVERSATION,
    conversation
  }
}

export function addMessageToConversation(message) {
  return {
    type: ADD__MESSAGE__TO__CONVERSATION,
    message
  }
}

export function sendMessage(message, conversationId) {
  firebaseDb.ref('messages').push({
    message,
    author: 'uncle',
    conversationId: conversationId,
    createdOn: Date.now(),
  }, function(){
    console.log('message sent');
  })
  return {
    type: SEND__MESSAGE
  }
}
// export function addNewMessage(message){
//   return {
//     type: ADD__NEW__MESSAGE,
//     message,
//   }
// }
//
// // pushes message to firebase
// export function sendMessage(message) {
//   firebaseDB.ref('messages').push({
//     message,
//     author: 'uncle',
//     conversationId: getUserId(),
//     createdOn: Date.now(),
//   }, function(){
//     console.log('success');
//   })
//   return {
//     type: SEND__MESSAGE
//   }
// }
