import { 
  ADD__CONVERSATION, 
  ADD__MESSAGE__TO__CONVERSATION, 
  UPDATE__CONVERSATION, 
  UPDATE__CURRENT__CONVERSATION 
} from '../actions'

const rootReducer = (state = {}, action) => {
  switch (action.type) {
      case ADD__CONVERSATION:
        return Object.assign({}, state, {
          conversations: [...state.conversations, action.conversation]
        });
      case ADD__MESSAGE__TO__CONVERSATION:
        const msgConversationId = action.message.conversationId;
        // is the conversations cnoversation id equal to ur message conversationId?
        const conversationIndex = state.conversations.findIndex(conversation => conversation.conversationId === msgConversationId);
        const prevConversation = state.conversations[conversationIndex];
        return Object.assign({}, state, {
          conversations: [
            ...state.conversations.slice(0, conversationIndex),
            Object.assign({}, prevConversation, {
              messages: [...prevConversation.messages, action.message],
              lastChat: action.lastChat
            }),
            ...state.conversations.slice(conversationIndex + 1)
          ]
        });
      case UPDATE__CONVERSATION:
        // TODO: remind me to refactor this shit into a function after i get a remote job
        const conversationId = action.conversationId;
        const convoIndex = state.conversations.findIndex(conversation => conversation.conversationId === conversationId);
        const previousConversation = state.conversations[convoIndex];
        return Object.assign({}, state, {
          conversations: [
            ...state.conversations.slice(0, convoIndex),
            Object.assign({}, previousConversation, {
              isNephewOnline: action.isNephewOnline,
              clientIsTyping: action.clientIsTyping
            }),
            ...state.conversations.slice(convoIndex + 1)
          ]
        })
      case UPDATE__CURRENT__CONVERSATION:
        return Object.assign({}, state, {
          currentConversation: action.currentConversation
        })
   default:
    return state;
  }
}

export default rootReducer;
