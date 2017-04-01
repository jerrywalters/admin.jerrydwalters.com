import React from 'react';
import classNames from 'classnames';
import { browserHistory } from 'react-router';

const ConversationCard = ({conversation, currentConversation, updateCurrentConversation}) => {
  const messages = conversation.messages[conversation.messages.length-1];
  const lastMessage = (typeof messages !== "undefined") ? messages.message : 'loading messages';
  const author = (typeof messages !== "undefined") ? messages.author : 'loading author';
  const conversationId = conversation.conversationId;
  const userName = conversation.name;
  const isOnline = conversation.isNephewOnline;
  const lastChatTime = new Date(conversation.lastChat).toString('yyyy-MM-dd');

  let truncMessage = lastMessage.substring(0, 70);
  lastMessage.length > 70 ? truncMessage += ' ...' : '';

  const statusClasses = classNames({
    'conversation-item__status' : true,
    'conversation-item__status--online' : isOnline,
    'conversation-item__status--offline' : !isOnline
  })

  const cardClasses = classNames({
    'conversation-item' : true,
    'conversation-item--selected' : conversationId === currentConversation
  })

  function navigateToConvo(id) {
    browserHistory.push(`/admin/conversations/${id}`);
  }

  return (
    <li className={cardClasses} 
        onClick={()=> {
          updateCurrentConversation(conversationId)
          navigateToConvo(conversationId)
        }}>
      <div className="conversation-item__info">
        <div className="conversation-item__pic"></div>
        <h3 className="conversation-item__name">{userName}</h3>
        <span className={statusClasses}></span>
      </div>
      <div className="conversation-item__message-container">
          <p className="conversation-item__message">{truncMessage.startsWith('data:') ? `${userName} sent you a drawing!` : truncMessage}</p>
      </div>
    </li>
  )
}

export default ConversationCard
