import React from 'react';
import { browserHistory } from 'react-router'

const ConversationCard = ({conversation}) => {
  let conversationId = conversation.conversationId;
  let userName = conversation.name;
  let isOnline = conversation.isNephewOnline;

  function navigateToConvo(id) {
    browserHistory.push(`/admin/conversations/${id}`);
  }
  console.log(userName, isOnline)
  return (
    <li onClick={()=>navigateToConvo(conversationId)}>
      <p>{userName}</p>
      <p>online:{(isOnline === true) ? 'online' : 'offline'}</p>
    </li>
  )
}

export default ConversationCard
