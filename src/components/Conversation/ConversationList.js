import React from 'react'
import { browserHistory } from 'react-router'
import _ from 'lodash'

import ConversationCard from './ConversationCardContainer'
import { signOut } from '../../firebaseAuth'

const ConversationList = ({ conversations, currentConversation, updateCurrentConversation }) => {

  
  // sort array of conversations from false to true for isOnline
  // reverse order so online users show at top of list
  // then create list to render in UI
  const convoList = 
    conversations
    // sort by date
    // .sort((a, b) => b.createdOn - a.createdOn)
    .sort((a,b) => a.createdOn > b.createdOn ? 1 : -1)
    .sort((a, b) => a.isNephewOnline - b.isNephewOnline)
    .reverse()
    .map((conversation, index) => <ConversationCard key={index} conversation={conversation} currentConversation={currentConversation} />)

  // routes you back to admin panel
  function backToAdmin() {
    browserHistory.push('/admin')
  }

  return (
    <div className="sidebar">
      <header className="admin-header">
        <h1 className="home-button" 
            onClick={() => {
                updateCurrentConversation('')
                backToAdmin()
              }}>Portfolio Support</h1>
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

export default ConversationList
