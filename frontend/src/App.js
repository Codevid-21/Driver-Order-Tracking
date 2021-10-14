import React, { useState } from "react";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

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
