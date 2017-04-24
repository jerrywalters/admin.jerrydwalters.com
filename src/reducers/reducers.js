import { 
  ADD__CONVERSATION, 
  ADD__MESSAGE__TO__CONVERSATION, 
  UPDATE__CONVERSATION, 
  UPDATE__CURRENT__CONVERSATION,
  UPDATE__READ
} from '../actions'

// TODO: not DRY at all. Need to refactor these reducers to use an updateConversation function or something

const rootReducer = (state = {}, action) => {
  switch (action.type) {
      // case UPDATE__READ:
      //   const readConversationId = action.conversationId
      //   const convoInd = state.conversations.findIndex(conversation => conversation.conversationId === readConversationId)
      //   const preConversation = state.conversations[convoInd]
      //   return Object.assign({}, state, {
      //     conversations: [
      //       ...state.conversations.slice(0, convoInd),
      //       Object.assign({}, preConversation, {
      //         read: action.read
      //       }),
      //       ...state.conversations.slice(convoInd + 1)
      //     ]
      //   })
      case ADD__CONVERSATION:
        return Object.assign({}, state, {
          conversations: [...state.conversations, action.conversation]
        })
      case ADD__MESSAGE__TO__CONVERSATION:
        const msgConversationId = action.message.conversationId
        // is the conversations cnoversation id equal to your message conversationId?
        const conversationIndex = state.conversations.findIndex(conversation => conversation.conversationId === msgConversationId)
        const prevConversation = state.conversations[conversationIndex]
        return Object.assign({}, state, {
          conversations: [
            ...state.conversations.slice(0, conversationIndex),
            Object.assign({}, prevConversation, {
              messages: [...prevConversation.messages, action.message],
              lastChat: action.lastChat,
              read: false
            }),
            ...state.conversations.slice(conversationIndex + 1)
          ]
        })
      case UPDATE__CONVERSATION:
        const conversationId = action.conversationId
        const convoIndex = state.conversations.findIndex(conversation => conversation.conversationId === conversationId)
        const previousConversation = state.conversations[convoIndex]
        return Object.assign({}, state, {
          conversations: [
            ...state.conversations.slice(0, convoIndex),
            Object.assign({}, previousConversation, {
              isNephewOnline: action.isNephewOnline,
              clientIsTyping: action.clientIsTyping,
              identity: action.identity,
              adminNewMessage: action.adminNewMessage
            }),
            ...state.conversations.slice(convoIndex + 1)
          ]
        })
      case UPDATE__CURRENT__CONVERSATION:
        // const readConversationId = action.currentConversation
        // const convoInd = state.conversations.findIndex(conversation => conversation.conversationId === readConversationId)
        // const preConversation = state.conversations[convoInd]
        // return Object.assign({}, state, {
        //   currentConversation: action.currentConversation,
        //   conversations: [
        //     ...state.conversations.slice(0, convoInd),
        //     Object.assign({}, preConversation, {
        //       read: true
        //     }),
        //     ...state.conversations.slice(convoInd + 1)
        //   ]
        // })
        return Object.assign({}, state, {
          currentConversation: action.currentConversation
        })
   default:
    return state
  }
}

export default rootReducer
