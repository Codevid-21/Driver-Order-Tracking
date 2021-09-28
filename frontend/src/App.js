import React, {useState} from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Orders from "./pages/Orders.jsx";
import NewDriver from "./pages/NewDriver.jsx";
import SelectDrivers from "./pages/SelectDrivers.jsx";
import Summary from "./pages/Summary.jsx";


function App() {
  const [click, setClick] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar click={click} setClick={setClick} />
        <Switch>
          <Route exact path="/" > <Home click={click} /> </Route>
          <Route path="/orders"> <Orders /> </Route>
          <Route path="/newdriver"> <NewDriver /> </Route>
          <Route path="/selectdrivers"> <SelectDrivers /> </Route>
          <Route path="/summary"> <Summary /> </Route>
        </Switch>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
