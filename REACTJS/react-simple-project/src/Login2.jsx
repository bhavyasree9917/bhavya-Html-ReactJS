import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login2 = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users2")) || [];
    const matched = storedUsers.find(
      (u) => u.email === user.email && u.password === user.password
    );


    if (matched) {
      navigate("/dashboard2");
    } else {
      setError("Invalid !!");
    }
  };


  return (
    <div>
      <h2>Login2 Page</h2>
      <form>
        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} value={user.email} /><br />
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} value={user.password} /><br />
        <button type="button" onClick={handleSubmit}>Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );

  
};

export default Login2;
