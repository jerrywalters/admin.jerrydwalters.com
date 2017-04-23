import { connect } from 'react-redux'
import ConversationCard from './ConversationCard'
import { updateCurrentConversation, updateRead } from '../../actions/'

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
    updateRead: (conversation, read) => {
      dispatch(updateRead(conversation, read))
    }
  }
}

const ConversationCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationCard)

export default ConversationCardContainer
