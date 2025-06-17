import React, { Component } from 'react';

class CounterTwo extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Counter Two: {this.state.count}</h2>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterTwo;
