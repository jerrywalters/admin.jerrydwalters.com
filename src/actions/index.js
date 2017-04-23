import firebaseDb from '../firebaseDb'

export const ADD__CONVERSATION = 'ADD__CONVERSATION'
export const UPDATE__CURRENT__CONVERSATION = 'UPDATE__CURRENT__CONVERSATION'
export const ADD__MESSAGE__TO__CONVERSATION = 'ADD__MESSAGE__TO__CONVERSATION'
export const UPDATE__CONVERSATION = 'UPDATE__CONVERSATION'
export const UPDATE__IS__TYPING = 'UPDATE__IS__TYPING'
export const SEND__MESSAGE = 'SEND__MESSAGE'

export function addConversation(conversation) {
  return {
    type: ADD__CONVERSATION,
    conversation
  }
}

export function updateCurrentConversation(currentConversation) {
  return {
    type: UPDATE__CURRENT__CONVERSATION,
    currentConversation
  }
}

export function addMessageToConversation(message, lastChat) {
  return {
    type: ADD__MESSAGE__TO__CONVERSATION,
    message,
    lastChat
  }
}

export function updateConversation(conversationId, isNephewOnline, clientIsTyping, identity) {
  return {
    type: UPDATE__CONVERSATION,
    conversationId,
    isNephewOnline,
    clientIsTyping,
    identity
  }
}

export function updateIsTyping(conversationId, typing){
  firebaseDb.ref(`conversations/${conversationId}`).update({
    uncleIsTyping: typing
  })
  return {
    type: UPDATE__IS__TYPING,
  }
}

export function sendMessage(message, conversationId) {
  firebaseDb.ref('messages').push({
    message,
    author: 'uncle',
    conversationId: conversationId,
    createdOn: Date.now(),
  }, function(){
    console.log('message sent')
  })
  return {
    type: SEND__MESSAGE
  }
}
