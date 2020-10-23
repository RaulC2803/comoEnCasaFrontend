import React from "react";
import RegisterSeller from "../hooks/RegisterUser/Components/RegisterSeller.jsx";
import NavBar from "../hooks/NavBar.jsx";

import "./style/RegisterPage.css";

const RegisterPageSeller = () => (
  <div className="container-page">
    <NavBar />
    <RegisterSeller />
  </div>
);

export default RegisterPageSeller;
