import React, { useState, useCallback } from 'react';

export default function CallbackAppTwo() {
  const [count, setCount] = useState(10);
  const [dark, setDark] = useState(false);

  const decrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  const theme = {
    backgroundColor: dark ? '#222' : '#f9f9f9',
    color: dark ? '#f9f9f9' : '#222',
    padding: '9px',
    borderRadius: '10px',
  };

  return (
    <div style={theme}>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>Decrease here</button>
      <button onClick={() => setDark(d => !d)}>Toggle Theme</button>
    </div>
  );
}
