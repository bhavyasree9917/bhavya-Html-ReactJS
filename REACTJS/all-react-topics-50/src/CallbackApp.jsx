import React, { useState, useCallback } from 'react';

export default function CallbackApp() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    padding: '10px',
  };

  return (
    <div style={theme}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setDark(d => !d)}>Toggle Theme</button>
    </div>
  );
}
