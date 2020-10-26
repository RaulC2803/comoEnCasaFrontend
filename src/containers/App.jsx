import React from "react";
import NavBar from "../hooks/NavBar.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import RegisterPageCustomer from "../pages/RegisterPageCustomer.jsx";
import RegisterPageSeller from "../pages/RegisterPageSeller.jsx";
import Login from "../pages/Login.jsx";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./style/App.css";

const NotFound = () => (
  <div>
    <h1>Página no Encontrada</h1>
  </div>
);

const App = () => (
  <Router>
    <nav>
      <NavBar />
    </nav>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={LandingPage} />
      <Route exact path="/comprador" component={RegisterPageCustomer} />
      <Route exact path="/vendedor" component={RegisterPageSeller} />
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
