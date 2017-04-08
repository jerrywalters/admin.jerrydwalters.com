import { connect } from 'react-redux'
import { sendMessage, updateIsTyping } from '../../actions/'
import Conversation from './Conversation'

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message, conversationId) => {
      dispatch(sendMessage(message, conversationId));
    },
    updateIsTyping: (conversationId, typing) => {
      dispatch(updateIsTyping(conversationId, typing));
    }
  }
}

const ConversationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation);

export default ConversationContainer
