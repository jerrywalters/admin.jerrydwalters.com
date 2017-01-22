import { SEND__MESSAGE, ADD__NEW__MESSAGE} from '../actions'

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD__NEW__MESSAGE:
      return Object.assign({}, state, {
        messages: [...state.messages, action.message]
      });
   default:
    return state;
  }
}

export default rootReducer;
