import React, { useState } from 'react';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome, User!</h2>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Please log in</h2>
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      </div>
    );
  }
}

export default Login;
