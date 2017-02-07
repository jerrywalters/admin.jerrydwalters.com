import React from 'react';
import ConversationCard from './ConversationCard';

const ConversationList = ({conversations}) => {

  const convoList = conversations
    .map((conversation, index) => <ConversationCard key={index} conversation={conversation}/>);

  return (
    <div className="sidebar">
      <ul className="conversation-list">
        {convoList}
      </ul>
    </div>
  )
}

export default ConversationList;
