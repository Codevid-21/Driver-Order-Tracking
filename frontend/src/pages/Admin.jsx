import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Home from "../pages/Home.jsx";
import Orders from "../pages/Orders.jsx";
import NewUser from "../pages/NewUser.jsx";
import SelectDrivers from "../pages/SelectDrivers.jsx";
import Summary from "../pages/Summary.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

function Admin({ isLogin, setIsLogin }) {
    const [click, setClick] = useState(false);
    const [newUser, setNewUser] = useState(null);

    return (
        <BrowserRouter>
            <NavBar
                click={click}
                setClick={setClick}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                setNewUser={setNewUser}
            />
            <Switch>
                <Route exact path="/">
                    <Home click={click} />
                </Route>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/newdriver">
                    <NewUser newUser={newUser} />
                </Route>
                <Route path="/selectdrivers">
                    <SelectDrivers />
                </Route>
                <Route path="/summary">
                    <Summary />
                </Route>
                <Route path="/login">
                    <Login setIsLogin={setIsLogin} />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Admin
