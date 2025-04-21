import React from "react";

const FuncClickCounter = ({
  count,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}></button>
      <h2>{count}</h2>
    </div>
    
  );
};

export default FuncClickCounter;