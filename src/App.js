import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./Component/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
              <Home></Home>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
