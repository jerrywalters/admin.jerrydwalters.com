import React from 'react';
import { browserHistory } from 'react-router';

import ConversationCard from './ConversationCard';
import { signOut } from '../../firebaseAuth';

const ConversationList = ({conversations}) => {

  const convoList = conversations
    .map((conversation, index) => <ConversationCard key={index} conversation={conversation}/>);

  // routes you back to admin panel
  function backToAdmin() {
    browserHistory.push('/admin')
  }

  return (
    <div className="sidebar">
      <header className="admin-header">
        <h1 className="home-button" onClick={ () => backToAdmin()}>Portfolio Support</h1>
        <button className="signout-button"onClick={()=>signOut()}>sign out</button>
      </header>
      <ul className="conversation-list">
        {convoList}
      </ul>
    </div>
  )
}

export default ConversationList;
