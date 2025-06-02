import React from 'react';

function SiblingA({ sendMessage }) {
  const handleClick = () => {
    sendMessage('Message from Sibling A');
  };

  return (
    <div>
      <h3>Sibling A</h3>
      <button onClick={handleClick}>Send to Sibling B</button>
    </div>
  );
}

export default SiblingA;
