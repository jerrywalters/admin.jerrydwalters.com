import { connect } from 'react-redux'
import ConversationCard from './ConversationCard'
import { updateCurrentConversation } from '../../actions/'

const mapStateToProps = (state) => {
  return {
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

const ConversationCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationCard);

export default ConversationCardContainer
