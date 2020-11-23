import React, { useState } from "react";
import NavBarContainer from "../hooks/App/NavBar/Containers/NavBarContainer.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import RegisterPageCustomer from "../pages/RegisterPageCustomer.jsx";
import RegisterPageSeller from "../pages/RegisterPageSeller.jsx";
import Login from "../pages/Login.jsx";
import RegisterPageProduct from "../pages/RegisterPageProduct.jsx";
import PageMyProducts from "../pages/PageMyProducts.jsx";
import ShoppingHistoryPage from "../pages/ShoppingHistoryPage";
import SalesHistoryPage from "../pages/SalesHistoryPage";
import HomePage from "../pages/HomePage";
import Footer from "../hooks/Footer.jsx";
import ProductView from "../pages/ProductViewPage.jsx";
import PageEditProduct from "../pages/PageEditProduct.jsx";
import ProductViewAsSeller from "../pages/ProductViewPageAsSeller.jsx";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./style/App.css";

const NotFound = () => (
  <div className="container-notfound">
    <h1>Página no Encontrada</h1>
  </div>
);

const App = () => {
  const [userName, setUserName] = useState("");
  const handleChangeUser = (name) => {
    setUserName(name);
  };
  return (
    <Router>
      <nav>
        <NavBarContainer
          useName={userName}
          handleChangeUser={handleChangeUser}
        />
      </nav>
      <Switch>
        <Redirect exact from="/" to="/land" />
        <Route exact path="/land" component={LandingPage} />
        <Route exact path="/home/:id" component={HomePage} />
        <Route exact path="/comprador" component={RegisterPageCustomer} />
        <Route exact path="/vendedor" component={RegisterPageSeller} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/registrarProducto"
          component={RegisterPageProduct}
        />
        <Route exact path="/myProducts" component={PageMyProducts} />
        <Route
          exact
          path="/historialcompras/:id"
          component={ShoppingHistoryPage}
        />
        <Route exact path="/productview/:id/:idp" component={ProductView} />
        <Route exact path="/editproduct/:id" component={PageEditProduct} />
        <Route
          exact
          path="/productviewSeller/:id"
          component={ProductViewAsSeller}
        />
        <Route exact path="/historialVentas" component={SalesHistoryPage} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
