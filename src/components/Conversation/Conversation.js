import React from 'react';
import { browserHistory } from 'react-router';
import ConversationListContainer from './ConversationListContainer'

const Conversation = ({ params, sendMessage, conversations }) => {
  const conversationId = params.id;
  let messageList = [];

  // conditional necessary because otherwise conversations is initially undefined, breaking it
  if(typeof conversations !== "undefined") {
    // get the index of the conversation matching this convo id (found in route params)
    const conversationPos = conversations.findIndex(convo => convo.conversationId === conversationId );
    const thisConversation = conversations[conversationPos];
    console.log('thisconvo:', thisConversation)
    if(typeof thisConversation !== "undefined") {
      messageList = thisConversation.messages.map(
        (message, index) => <li key={index}>{message.author + ': ' + message.message}</li>
      )
    }
  }
  // on submit push the value of the input as a message to db via sendMessage action
  function chatSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('chat__input').value;
    sendMessage(input, conversationId);
    document.getElementById('chat__input').value = '';
  }
  // routes you back to admin panel
  function backToAdmin() {
    browserHistory.push('/admin')
  }
  // routes you to particular conversation
  // function navigateToConvo(id) {
  //   browserHistory.push(`/admin/conversations/${id}`);
  // }
  // list of conversations by id
  // let conversationList = conversations.map(
  //   (conversation, index) => <li key={index}>{conversation.conversationId}</li>
  // )

  return (
    <div>
      <ul>
        {messageList}
      </ul>
      <form onSubmit={(e) => chatSubmit(e)}>
        <input id="chat__input" type="text"></input>
        <input type="submit" ></input>
      </form>
      <button onClick={e => backToAdmin(e)}>back</button>
      <ConversationListContainer />
    </div>
  )
}

export default Conversation;
