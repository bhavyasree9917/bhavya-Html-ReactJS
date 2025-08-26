import React, { Component } from "react";
import HOCDemo from "./HocDemo";

class HoverCounterDemo extends Component {
  render() {
    const { count, handleIncrement, handleDecrement, handleReset } = this.props;
    return (
      <>
        <h2>The Count : {count}</h2>
        <button onMouseOver={handleIncrement}>Increment.. </button>
        <button onMouseOver={handleDecrement}>Decrement..</button>
        <button onMouseOver={handleReset}>Reset. </button>
      </>
    ); 
    
  }
}
export default HOCDemo(HoverCounterDemo);
