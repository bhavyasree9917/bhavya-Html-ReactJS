import React, { Component } from 'react';

class HoverCount extends Component {
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
        <h2 onMouseOver={this.increment}>Hovered {this.state.count} times</h2>
      </div>
    );
  }
}

export default HoverCount;
