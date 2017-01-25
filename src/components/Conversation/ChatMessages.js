import React from 'react';

const ChatMessages = ({messages}) => {
  let messageList = messages.map(
    (message, index) => <li key={index}>{message.message} </li>
  )
  return (
    <div>
      <ul>
        {messageList}
      </ul>
    </div>
  )
}

export default ChatMessages;
