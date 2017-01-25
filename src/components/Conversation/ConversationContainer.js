import { connect } from 'react-redux';
import { sendMessage } from '../../actions/';
import Conversation from './Conversation';

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message, conversationId) => {
      dispatch(sendMessage(message, conversationId));
    }
  }
}

const ConversationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation);

export default ConversationContainer;
