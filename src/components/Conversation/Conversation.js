import React from 'react';
import { browserHistory } from 'react-router';

const Conversation = ({ params, sendMessage, conversations }) => {
  const conversationId = params.id;
  let messageList = [];

  if(typeof conversations !== "undefined") {
    const conversationPos = conversations.findIndex(convo => convo.conversationId === conversationId );
    const thisConversation = conversations[conversationPos];
    console.log('thisconvo:', thisConversation)
    if(typeof thisConversation !== "undefined") {
      messageList = thisConversation.messages.map(
        (message, index) => <li key={index}>{message.author + ': ' + message.message}</li>
      )
    }
  }

  function chatSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('chat__input').value;
    sendMessage(input, conversationId);
    document.getElementById('chat__input').value = '';
  }

  function backToAdmin() {
    browserHistory.push('/admin')
  }

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
    </div>
  )
}

export default Conversation;
