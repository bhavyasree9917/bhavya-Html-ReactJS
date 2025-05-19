import React, { useState } from 'react';

function ClickCounter() {

  const [count, setCount] = useState(0);

  
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Click Counter</h2>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickCounter;
