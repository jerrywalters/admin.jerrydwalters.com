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
    <li className="conversation-item" onClick={()=>navigateToConvo(conversationId)}>
      <div className="conversation-item__info">
        <div className="conversation-item__pic"></div>
        <h3 className="conversation-item__name">{userName}</h3>
        <p className="conversation-item__date">{(isOnline === true) ? 'online' : 'offline'}</p>
      </div>
      <div className="conversation-item__message">
          <p>{lastMessage}</p>
      </div>
    </li>
  )
}

export default ConversationCard
