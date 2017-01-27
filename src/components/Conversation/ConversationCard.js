import React from 'react';
import { browserHistory } from 'react-router'

const ConversationCard = ({conversation}) => {
  const messages = conversation.messages[conversation.messages.length-1];
  const lastMessage = (typeof messages !== "undefined") ? messages.message : 'loading messages';
  const author = (typeof messages !== "undefined") ? messages.author : 'loading author';
  const conversationId = conversation.conversationId;
  const userName = conversation.name;
  const isOnline = conversation.isNephewOnline;
  const lastChatTime = new Date(conversation.lastChat).toString('yyyy-MM-dd');

  function navigateToConvo(id) {
    browserHistory.push(`/admin/conversations/${id}`);
  }

  return (
    <li onClick={()=>navigateToConvo(conversationId)}>
      <p>{userName}</p>
      <p>online:{(isOnline === true) ? 'online' : 'offline'}</p>
      <p>last message:{lastMessage} by: {author}</p>
      <p>at: {lastChatTime}</p>
    </li>
  )
}

export default ConversationCard
