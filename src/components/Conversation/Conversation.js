import React, { Component } from 'react'
import classNames from 'classnames'

import ConversationListContainer from './ConversationListContainer'

// for some reason this only works when I define isTypingTimeout here
var isTypingTimeout;

export default class Conversation extends Component {

  // the way i'm using class here isn't ideal. hard to reason about
  // FIXTHIS: bloated class component
  scrollToBottom () {
    const messageList = document.getElementsByClassName('message-list');
    // if(messageList) {
    //   messageList[0].scrollTop = messageList[0].scrollHeight;
    // }
    if(messageList) {
      messageList[0].scrollTop = messageList[0].scrollHeight;
      // very slight delay here so scrollheight is set properly for images and isTyping
      setTimeout(() => messageList[0].scrollTop = messageList[0].scrollHeight, 10)
    } 
  }

  componentDidMount() {
    // setTimeout(() => {
      this.scrollToBottom();
    // }, 100)
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { params, conversations, sendMessage, updateIsTyping } = this.props;
    const conversationId = params.id;

    // helper functions for form
    function isUncleTyping() {
      if (isTypingTimeout !== undefined) clearTimeout(isTypingTimeout);

      updateIsTyping(conversationId, true);
      isTypingTimeout = setTimeout(function() {
        updateIsTyping(conversationId, false);
      }, 3000);
    }

    function formSubmit(inputText) {
      let text = inputText.trim();
      if(!text || text === ' ') {
      } else {
        sendMessage(text, conversationId);
        // tell client that you're not typing anymore so message doesn't stack
        updateIsTyping(conversationId, false);
        document.getElementById('chat__input').value = '';
      }
    }

    // submit typing by hitting return key (because it's a texteditable div)
    function handleTyping(e) {
      const keyCode = e.keyCode;

      if (keyCode === 13 && e.shiftKey) {
      } else if (keyCode === 13) {
          const input = document.getElementById('chat__input');
          formSubmit(input.innerText);
          input.innerHTML = '';
          e.preventDefault();
      }
    }

    function openImageNewTab(url){
      const win = window.open(url, '_blank');
      win.focus();
    }

    let messageList = [];
    // this will break without this, but read more about typeof being unreliable with let and const
    if(typeof conversations !== "undefined") {
      // get the index of the conversation matching this convo id (found in route params)
      const conversationPos = conversations.findIndex(convo => convo.conversationId === conversationId );
      const thisConversation = conversations[conversationPos];
      
      if(typeof thisConversation !== "undefined") {
        // FIXTHIS: if I need to use var here to keep them from block scope, i'm doing something wrong
        var userName = thisConversation.name;
        var firstName = (typeof userName !== "undefined") ? userName.split(" ")[0] : userName;
        var isTyping = thisConversation.clientIsTyping;
        var isOnline = thisConversation.isNephewOnline;

        messageList = thisConversation.messages.map((message, index) => {
          if (message.message.startsWith('data:')) {
            return (
              <li key={index} className={`client-messages__item message-list__item--frame client-messages__item--${message.author}`}>
                <img alt="client drawing" 
                    className={`message-list__item--image message-list__item--${message.author}`}
                    onDoubleClick={() => openImageNewTab(message.message)} 
                    src={message.message} />
              </li>
            )
          } 
          return (
            <li className={`message-list__item message-list__item--${message.author}`} key={index}>{message.message}</li>
          )
        })
      }
    }

    // classes 
    const statusClasses = classNames({
      'conversation-status__status' : true,
      'conversation-item__status--online' : isOnline,
      'conversation-item__status--offline' : !isOnline
    })

    const isTypingClasses = classNames({
      'message-list__item--isTyping' : isTyping,
      'message-list__item--notTyping' :  !isTyping
    }) 

  return (
    <div>
      <main className="admin-main">
        <ConversationListContainer />
        <section className="conversation">
          <header className="conversation__header">
              <h3 className="user-name">{userName}</h3>
              <div className="conversation-status">
                <span className={statusClasses}></span>
                <p className="conversation-status__text"> {isOnline ? 'online' : 'offline'} </p>
              </div>
          </header>
          <ul className="message-list">
            {messageList}
            <li className={isTypingClasses}>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
          <form className="chat-form">
            <div className="chat-form__input" 
                   id="chat__input"
                   placeholder={`Message ${firstName}`}
                   contentEditable="true" 
                   type="text" 
                   onKeyDown={(e) => handleTyping(e)}
                   onKeyPress={() => isUncleTyping()}>
            </div>
          </form>
        </section>
      </ main>
      <div className="bg-light">
      </div>
    </div>
  )
  }
}
