import React, { useState, useEffect } from "react";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
// import api from "./api/fetchDataFromDB.js";
import "./App.css";
import api from "./api/fetchDataFromDB.js";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  // const checkAuth = async () => {
  //   const url = `http://localhost:2005/auth`;
  //   const result = await api.fetchDataFromDB(url);
  //   return result;
  // };

  // const [isLogin, setIsLogin] = useState(async () => {
  //   const result = await checkAuth().then((result) => {
  //     return result;
  //   });
  //   return result;
  // });
  const checkAuth = () => {
    const url = `http://localhost:2005/auth`;
    api.fetchDataFromDB(url).then((result) => {
      console.log("token deneme", result);
      setIsLogin(true);
    });
  };
  useEffect(() => {
    checkAuth();
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
