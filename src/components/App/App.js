import React, { Component } from 'react'
import '../../styles/main.scss'
import Shapes from '../Background/Shapes'

// import ConversationListContainer from '../Conversation/ConversationListContainer'

class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
        <Shapes />
      </div>
    );
  }
}

export default App
