import React, { useState } from 'react';
import Child21 from './Child21';

function Parent21() {
  const [message, setMessage] = useState('');

  const handleMessage = (dataFromChild) => {
    setMessage(dataFromChild);
  };

  return (
    <div>
      <h2>Parent</h2>
      <p>Message from child: {message}</p>
      <Child21 onSend={handleMessage} />
    </div>
  );
}
export default Parent21;

