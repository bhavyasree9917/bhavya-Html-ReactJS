import React from 'react';

function SiblingB({ receivedMessage }) {
  return (
    <div>
      <h3>Sibling B</h3>
      <p>Received: {receivedMessage}</p>
    </div>
  );
}

export default SiblingB;
