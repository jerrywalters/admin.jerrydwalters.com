import { connect } from 'react-redux';
import ConversationList from './ConversationList';

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const ConversationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList);

export default ConversationListContainer;
