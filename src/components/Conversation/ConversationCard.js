import React from 'react';
import { browserHistory } from 'react-router'

const ConversationCard = ({conversation}) => {
  let conversationId = conversation.conversationId;

  function navigateToConvo(id) {
    browserHistory.push(`/admin/conversations/${id}`);
  }
  
  return (
    <li onClick={()=>navigateToConvo(conversationId)}>
      <p>ConversationId: {conversationId}</p>
    </li>
  )
}

export default ConversationCard
