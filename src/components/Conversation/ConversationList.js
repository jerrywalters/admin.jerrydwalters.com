import React from 'react';
import { signOut } from '../../firebaseAuth';
import ConversationCard from './ConversationCard';

const ConversationList = ({conversations}) => {

  const convoList = conversations
    .map((conversation, index) => <ConversationCard key={index} conversation={conversation}/>);

  return (
    <div>
      <ul>
        {convoList}
      </ul>
      <button onClick={()=>signOut()}>sign out</button>
    </div>
  )
}

export default ConversationList;
