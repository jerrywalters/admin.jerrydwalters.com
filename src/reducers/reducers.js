import { SEND__MESSAGE, ADD__NEW__MESSAGE, ADD__CONVERSATION } from '../actions'

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    // case ADD__NEW__MESSAGE:
    //   return Object.assign({}, state, {
    //     messages: [...state.messages, action.message]
    //   });
      case ADD__CONVERSATION:
        return Object.assign({}, state, {
          conversations: [...state.conversations, action.conversation]
        });
   default:
    return state;
  }
}

export default rootReducer;
