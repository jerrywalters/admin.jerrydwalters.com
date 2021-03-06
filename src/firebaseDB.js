import firebase from 'firebase'
import { addConversation, addMessageToConversation, updateConversation, updateNewMessage } from './actions'
import store from './index'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyA1Db7hSJ658255QfdZ09mjJR4VxcXbDP8",
  authDomain: "portfolio-chat.firebaseapp.com",
  databaseURL: "https://portfolio-chat.firebaseio.com",
  storageBucket: "portfolio-chat.appspot.com",
  messagingSenderId: "892675563096"
}
firebase.initializeApp(config)

// db stuff
const db = firebase.database()

// add conversations to state

db.ref('conversations')
  .on('child_added', (data) => {
    const conversation = data.val()
    const conversationId = conversation.conversationId
    // remind me to figure out why this is necessary
    conversation.messages = []
    // conversation.adminNewMessage = true
    conversation.clientNewMessage = true
    // check for blank objects
    // without this admin would load blank conversations with 'isUncleOnline:true'
    if (typeof conversation.conversationId === 'undefined'){return}
    store.dispatch(addConversation(conversation))

    // add messages to conversations state via addMessageToConversation
    db.ref('messages')
      .orderByChild('conversationId')
      .equalTo(conversationId)
      .on('child_added', (data) => {
        const message = data.val()
        const lastChat = Date.now()
        store.dispatch(addMessageToConversation(message, lastChat))
      })
    checkOnline(conversationId)  
})

db.ref('conversations')
  .on('child_changed', (data) => {
    const conversation = data.val()
    let { conversationId, isNephewOnline, clientIsTyping, identity, adminNewMessage } = conversation
    // let conversationId = conversation.conversationId
    // let isNephewOnline = conversation.isNephewOnline
    // let clientIsTyping = conversation.clientIsTyping
    // let identity = conversation.identity
    // let adminNewMessage = conversation.adminNewMessage
    store.dispatch(updateConversation(conversationId, isNephewOnline, clientIsTyping, identity, adminNewMessage))
    checkOnline(conversationId)
})

function checkOnline(conversationId) {
  let convoRef = db.ref('conversations/' + conversationId)
  convoRef.update({
    isUncleOnline: true
  })
  convoRef.onDisconnect().update({
    isUncleOnline: false
  })
}


export default db
