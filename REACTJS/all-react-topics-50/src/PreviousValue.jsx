import React, { useEffect, useRef, useState } from 'react';

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <h2>Now: {count}</h2>
      <h2>Before: {prevCountRef.current}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
export default PreviousValue;
