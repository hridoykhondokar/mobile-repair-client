import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./Component/Home/Home/Home";
import Login from './Component/Login/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import ChoosePlan from './Component/Home/ChoosePlan/ChosePlan';
import MyPlan from './Component/Dashboard/MyPlan/MyPlan';
import AllOrder from './Component/Dashboard/AllOrder/AllOreder';
import AddAdmin from './Component/Dashboard/AddAdmin/AddAdmin';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState([]);

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/plan/:id">
              <ChoosePlan></ChoosePlan>
            </PrivateRoute>
            <Route path="/allOrder">
              <AllOrder></AllOrder>
            </Route>
            <Route path="/addAdmin">
              <AddAdmin></AddAdmin>
            </Route>
            <Route path="/myPlans">
              <MyPlan></MyPlan>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
