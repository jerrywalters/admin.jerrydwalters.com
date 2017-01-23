import React from 'react';

const ConversationList = ({conversations}) => {
  console.log('conversationscontainer:', conversations)
  let conversationList = conversations.map(
    (conversation, index) => <li key={index}>{conversation.conversationId}</li>
  )
  return (
    <div>
      <ul>
        {conversationList}
      </ul>
    </div>
  )
}

export default ConversationList;
