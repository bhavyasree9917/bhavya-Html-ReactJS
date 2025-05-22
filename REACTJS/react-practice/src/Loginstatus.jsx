import React, { Component } from 'react';

class Loginstatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  toggleLogin = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  };

  render() {
    return (
      <div>
        <h2>{this.state.isLoggedIn ? 'Welcome back!' : 'Please log in'}</h2>
        <button onClick={this.toggleLogin}>
          {this.state.isLoggedIn ? 'Log out' : 'Log in'}
        </button>
      </div>
    );
  }
}

export default Loginstatus;
