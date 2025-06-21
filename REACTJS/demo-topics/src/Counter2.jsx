import React, { Component } from "react";

export default class Counter2 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        
        <p onMouseOver={this.increment}>
          Hover : {this.state.count}
        </p>
      </div>
    );
  }
}
