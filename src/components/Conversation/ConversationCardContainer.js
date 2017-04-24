import { connect } from 'react-redux'
import ConversationCard from './ConversationCard'
import { updateCurrentConversation, updateNewMessage } from '../../actions/'

const mapStateToProps = (state) => {
  return {
    currentConversation: state.currentConversation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentConversation: (conversationId) => {
      dispatch(updateCurrentConversation(conversationId))
    },
    updateNewMessage: (conversationId, newMessage) => {
      dispatch(updateNewMessage(conversationId, newMessage))
    }
  }
}

const ConversationCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationCard)

export default ConversationCardContainer
