import React, { useState, useMemo } from 'react';

export default function MemoApp() {
  const [num, setNum] = useState(1);
  const [dark, setDark] = useState(false);

  const double = useMemo(() => num * 2, [num]);

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    padding: '10px',
  };

  return (
    <div style={theme}>
      <h2>Double: {double}</h2>
      <input
        type="number"
        value={num}
        onChange={e => setNum(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle </button>
    </div>
  );
}
