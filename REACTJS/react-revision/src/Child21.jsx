import React from 'react';

function Child21({ onSend }) {
  const sendData = () => {
    onSend('Hello from child!');
  };

  return (
    <div>
      <h3>Child</h3>
      <button onClick={sendData}>Send Message</button>
    </div>
  );
}

export default Child21;
