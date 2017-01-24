import React from 'react';
import { signOut } from '../../firebaseAuth';

const ConversationList = ({conversations}) => {
  console.log('conversationscontainer:', conversations)
  let conversationList = conversations.map(
    (conversation, index) => <li key={index}>{conversation.conversationId}</li>
  )

  return (
    <div>
      <ul>
        {conversationList}
        <button onClick={()=>signOut()}>sign out</button>
      </ul>
    </div>
  )
}

export default ConversationList;
