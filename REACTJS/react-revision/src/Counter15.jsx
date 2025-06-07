import React, { useState } from 'react';

function Counter15() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}></button>
    </div>
  );
}
export default Counter15;