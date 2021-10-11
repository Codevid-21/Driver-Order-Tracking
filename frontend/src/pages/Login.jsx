import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Login({ setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const url = `http://localhost:2005/users/login`;
  const options = {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-type": "application/json", // The type of data you're sending
    }
  };
  const isAdmin = () => {
    fetch(url, options).then(result => {
      if(result.ok){
        setIsLogin(true);
        history.push("/");
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
    <div className="mainLogin">
      <form className="container" onSubmit={submitForm}>
        <label htmlFor="uname">
          <b>Username</b>
        </label>

        <input type="text" placeholder="Enter Username" name="uname" required value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="psw">
          <b>Password</b>
        </label>

        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="loginButton" >Login</button>

        {/* <label>
          Remember me:
          <input type="checkbox" checked="checked" name="remember" />
        </label> */}
      </form>

      {/* <div class="container">
        <button type="button" class="cancelbtn">
          Cancel
        </button>
        <span class="psw">Forgot <a href="#">password?</a></span>
      </div> */}
    </div>
  )
}

export default Login;
