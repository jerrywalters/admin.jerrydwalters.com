import React, { Component } from 'react'

class Admin extends Component {
  render(props) {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Admin
