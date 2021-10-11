import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Orders from "./pages/Orders.jsx";
import NewDriver from "./pages/NewDriver.jsx";
import SelectDrivers from "./pages/SelectDrivers.jsx";
import Summary from "./pages/Summary.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  const [click, setClick] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [newUser, setNewUser] = useState(null);

  return (
    <div className="App">
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
            <NewDriver newUser={newUser} />
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
    </div>
  );
}

export default App;
