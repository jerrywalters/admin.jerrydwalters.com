import firebaseDb from '../firebaseDb';

export const SEND__MESSAGE = 'SEND__MESSAGE';
export const ADD__CONVERSATION = 'ADD__CONVERSATION';
export const ADD__MESSAGE__TO__CONVERSATION = 'ADD__MESSAGE__TO__CONVERSATION';
export const UPDATE__CONVERSATION = 'UPDATE__CONVERSATION';

export function addConversation(conversation) {
  return {
    type: ADD__CONVERSATION,
    conversation
  }
}

export function addMessageToConversation(message, lastChat) {
  return {
    type: ADD__MESSAGE__TO__CONVERSATION,
    message,
    lastChat
  }
}

// TODO: rename this action to make sense, "updateConnection"
export function updateConversation(isNephewOnline, conversationId) {
  return {
    type: UPDATE__CONVERSATION,
    isNephewOnline,
    conversationId
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
