import React, { useState } from 'react';
import SiblingA from './SiblingA';
import SiblingB from './SiblingB';

function Parent22() {
  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h2>Parent</h2>
      <SiblingA sendMessage={handleMessage} />
      <SiblingB receivedMessage={message} />
    </div>
  );
}

export default Parent22;
