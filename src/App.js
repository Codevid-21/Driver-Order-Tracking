import React, { useState, useEffect } from "react";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import "./App.css";
import dotenv from "dotenv";
dotenv.config();

function App() {
  const [isLogin, setIsLogin] = useState(() => {
    const lcSt = JSON.parse(localStorage.getItem("isLoggedIn"));
    return lcSt ? lcSt : false;
  });

  const checkAuth = async () => {
    const url = `http://localhost:2005/auth`;
    
    const options = {
      credentials: "include",
    };
    const data = await fetch(url, options);
    const res = await data.json();
    if (res.token) {
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      setIsLogin(true);
    } else if (data.status === 401) {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    const lcSt = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (lcSt === null) {
      checkAuth();
    } else if (lcSt) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <div className="App">
      {isLogin ? (
        <Admin setIsLogin={setIsLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;
