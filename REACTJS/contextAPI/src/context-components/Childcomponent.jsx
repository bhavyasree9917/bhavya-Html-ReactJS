import React, { Component } from 'react'
import UserComponent from './Usercomponent'

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Child Component !</h2>
        <hr />
        <UserComponent message={this.props.message}/>
        
      </div>
    )
  }
}
