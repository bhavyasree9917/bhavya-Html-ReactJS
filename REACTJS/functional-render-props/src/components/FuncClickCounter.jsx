import React from "react";

const FuncClickCounter = ({
  count,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <div>
      <button onClick={handleIncrement}>Increment opeartor</button>
      <button onClick={handleDecrement}>decrement opeartor </button>
      <button onClick={handleReset}>reset</button>
      <h2>{count}</h2>
    </div>
    
  );
};

export default FuncClickCounter;