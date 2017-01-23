import { ADD__CONVERSATION, ADD__MESSAGE__TO__CONVERSATION } from '../actions'

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
              messages: [...prevConversation.messages, action.message]
            }),
            ...state.conversations.slice(conversationIndex + 1)
          ]
        });
   default:
    return state;
  }
}

export default rootReducer;
