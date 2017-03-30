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
        <div className="signout-button"
             onClick={()=>signOut()}
             alt="sign out">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
        </div>
      </header>
      <ul className="conversation-list">
        {convoList}
      </ul>
    </div>
  )
}

export default ConversationList;
