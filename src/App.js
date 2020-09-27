import React from "react";
import "./App.css";
import InitialContainer from "./components/section-inicio/InitialContainer";
import RegistroContainer from "./components/section-registro/RegistroContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/inicio">
            <InitialContainer />
          </Route>
          <Route path="/registro">
            <RegistroContainer />
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
