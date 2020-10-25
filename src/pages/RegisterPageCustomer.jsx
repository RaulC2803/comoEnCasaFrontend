import React from "react";
import RegisterCustomer from "../hooks/RegisterUser/Container/RegisterCustomer.jsx";
import NavBar from "../hooks/NavBar.jsx";

import "./style/RegisterPage.css";

const RegisterPageCustomer = () => (
  <div className="container-page">
    <NavBar />
    <RegisterCustomer />
  </div>
);

export default RegisterPageCustomer;
