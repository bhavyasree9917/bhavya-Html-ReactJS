import React, { useState } from 'react';

function Form() {

  const [name, setName] = useState('');
  
  const [email, setEmail] = useState('');

  return (
    <div>
      <h2>User Form</h2>

      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <h3>Entered Information:</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Form;
