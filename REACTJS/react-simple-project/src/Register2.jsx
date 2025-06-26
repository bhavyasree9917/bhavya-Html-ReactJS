import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register2 = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const existingUsers = JSON.parse(localStorage.getItem("users2")) || [];
    localStorage.setItem("users2", JSON.stringify([...existingUsers, user]));
    navigate("/login2");
  };

  return (
    <div>
      <h2>Register2 Page</h2>
      <form>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleChange} value={user.username} /><br />
        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} value={user.email} /><br />
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} value={user.password} /><br />
        <button type="button" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};

export default Register2;
