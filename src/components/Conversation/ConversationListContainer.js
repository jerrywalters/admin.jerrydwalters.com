import { connect } from 'react-redux'
import ConversationList from './ConversationList'
import { updateCurrentConversation } from '../../actions/'

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
    currentConversation: state.currentConversation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentConversation: (conversationId) => {
      dispatch(updateCurrentConversation(conversationId));
    }
  }
}

const ConversationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList);

export default ConversationListContainer
