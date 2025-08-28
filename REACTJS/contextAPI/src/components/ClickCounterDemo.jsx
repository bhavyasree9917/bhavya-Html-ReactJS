import React, { Component } from "react";
import HOCDemo from "./HocDemo";

class ClickCounterDemo extends Component {
  render() {
    const { count, handleIncrement, handleDecrement, handleReset } = this.props;
    return (
      <>
        <h2>The Count : {count}</h2>
        <button onClick={handleIncrement}>incremnet count</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handleReset}>Reset count </button>
      </>
    );
  }
}

export default HOCDemo(ClickCounterDemo);
