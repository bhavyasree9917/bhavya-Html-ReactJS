import React, { Component } from 'react';

class ClickCount extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Click Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Click Me</button>
      </div>
    );
  }
}

export default ClickCount;
