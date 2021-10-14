import React, { useState } from 'react';
import { Redirect } from 'react-router';

function Login({ setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = `http://localhost:2005/users/login`;
  const options = {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-type": "application/json", // The type of data you're sending
    },
    credentials: 'include',
  };
  const isAdmin = () => {
    fetch(url, options).then(result => {
      if (result.ok) {
        setIsLogin(true);
        <Redirect to="/" />;
      }
    });
  }

  const submitForm = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    isAdmin();
  }

  return (
    <div className="login">
      <div className="logo">
        <img src={"/images/login_logo.png"} alt="delivery_logo" />
      </div>
      <h1>Driver &amp; Order <br />Tracking</h1>

      <form onSubmit={submitForm}>
        <input type="email" placeholder="Enter Email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter Password" name="psw" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" className="loginButton" value="Login" />
      </form>
    </div>
  )
}

export default Login;
