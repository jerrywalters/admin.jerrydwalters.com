import React from 'react';
import classNames from 'classnames';
import { browserHistory } from 'react-router';

// bring in icons
import morty from '../../images/morty-icon.svg'
import flower from '../../images/flower-icon.svg'
import lawnchair from '../../images/lawnchair-icon.svg'
import moondog from '../../images/moondog-icon.svg'
import hands from '../../images/hands-icon.svg'
import box from '../../images/box-icon.svg'

const ConversationCard = ({conversation, currentConversation, updateCurrentConversation}) => {
  const messages = conversation.messages[conversation.messages.length-1];
  const lastMessage = (typeof messages !== "undefined") ? messages.message : 'loading messages';
  const author = (typeof messages !== "undefined") ? messages.author : 'loading author';
  const conversationId = conversation.conversationId;
  const userName = conversation.name;
  const isOnline = conversation.isNephewOnline;
  const lastChatTime = new Date(conversation.lastChat).toString('yyyy-MM-dd');
  const identity = conversation.identity;

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

  function getImg(identity) {
    switch (identity) {
      case 1:
        return morty
      case 2:
        return hands
      case 3: 
        return lawnchair
      case 4: 
        return moondog
      case 5:
        return box
      case 6:
        return flower
      default:
        return moondog
    }
  }

  console.log(getImg())

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
        <img className="conversation-item__pic" alt="portrait" src={getImg(identity)} />
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
