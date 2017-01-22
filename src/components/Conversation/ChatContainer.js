import { connect } from 'react-redux';
import Chat from './Chat';

import { sendMessage } from '../../actions'

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => {
      dispatch(sendMessage(message));
    }
  }
}

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default ChatContainer
