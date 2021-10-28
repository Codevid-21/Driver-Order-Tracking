import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();
    const newUser = {
        password: password,
        isAdmin: true,
    }

    // MAIN
    const url = `/users/${email}`;

    // DEV
    // const url = `http://localhost:2005/users/${email}`;

    const options = {
        method: "PUT",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json", // The type of data you're sending
        }
    };

    const isAdmin = () => {
        fetch(url, options).then(result => {
            if (result.ok) {
                // setIsLogin(true);
                history.push("/");
            }
            else {
                history.push("/newdriver");
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
                <h4>Register</h4>
                <label htmlFor="email">
                    <b>Email</b>
                </label>

                <input type="text" placeholder="Enter Email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

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

                <button type="submit" className="loginButton" >Register</button>
            </form>
        </div>
    )
}

export default Register
