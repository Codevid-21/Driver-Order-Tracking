import React from 'react'

function Login() {
    return (
      <div class="mainLogin">
      <div class="container">
        <label for="uname">
          <b>Username</b>
        </label>

        <input type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw">
          <b>Password</b>
        </label>

        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>

        <label>
          Remember me:
          <input type="checkbox" checked="checked" name="remember" />
        </label>
      </div>

      <div class="container">
        <button type="button" class="cancelbtn">
          Cancel
        </button>
        {/* <span class="psw">Forgot <a href="#">password?</a></span> */}
      </div>
    </div>
    )
}

export default Login;
