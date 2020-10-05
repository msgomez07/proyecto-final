import React from "react";
import "./App.css";
import InitialContainer from "./components/section-inicio/InitialContainer";
import RegistroContainer from "./components/section-registro/RegistroContainer";
import QuienesContainer from "./components/section-quienes somos/QuienesContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/section-menu/Menu";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/inicio">
            <InitialContainer />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/registro">
            <RegistroContainer />
          </Route>
          <Route path="/quienes-somos">
            <QuienesContainer />
          </Route>
          <Route path="/">
            <InitialContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
