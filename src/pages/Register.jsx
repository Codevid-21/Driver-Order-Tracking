import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();

    //req.body.name, req.body.surname, req.body.email, req.body.tel, req.body.address, req.body.city

const newUser = {
    password: password,
    isAdmin: true,
}
// const newUser = {
//     name: "Ali",
//     surname: "Veli",
//     email: email,
//     password: password,
//     tel: "1341234",
//     address: "Zuhause",
//     city: "Hamburg",
//     isAdmin: true,
//     // tip: "kitchen"
// }


    const url = `${process.env.REACT_APP_API_SERVER}/users/${email}`;
    // const url = `${process.env.REACT_APP_API_SERVER}/users/${email}`;
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
