import dotenv from "dotenv";
// eslint-disable-next-line
dotenv.config({path: `${__dirname}/.env`});
// eslint-disable-next-line
import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import Login from "./pages/Login.jsx";
// eslint-disable-next-line
import Admin from "./pages/Admin.jsx";
// eslint-disable-next-line
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(() => {
    const lcSt = JSON.parse(localStorage.getItem("isLoggedIn"));
    return lcSt ? lcSt : false;
  });

  const checkAuth = async () => {

    // const url = `http://localhost:2005/auth`;
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

  // SOCKET IO
  // const io = require("socket.io")(2005);
  // const socket = io("ws://localhost:2005");
  // socket.on("connect", () => {
  //   // either with send()
  //   socket.send("Hello!");
  //   // or with emit() and custom event names
  //   socket.emit(
  //     "salutations",
  //     "Hello!",
  //     { mr: "john" },
  //     Uint8Array.from([1, 2, 3, 4])
  //   );
  // });
  // // handle the event sent with socket.send()
  // socket.on("message", (data) => {
  //   console.log(data);
  // });
  // // handle the event sent with socket.emit()
  // socket.on("greetings", (elem1, elem2, elem3) => {
  //   console.log(elem1, elem2, elem3);
  // });

  return (
    <div className="App" id="app">
      {isLogin ? (
        <Admin setIsLogin={setIsLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;
