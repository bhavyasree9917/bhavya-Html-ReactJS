import React from 'react';

function SiblingB({ receivedMessage }) {
  return (
    <div>
      <h3>Sibling</h3>

      <p>Received: {receivedMessage}</p>
    </div>
  );
}

export default SiblingB;
