import React, { useState, useEffect } from "react";
import axios from "axios";

import RegisterCustomerForm from "../Components/RegisterCustomer.jsx";

const API = "https://comoencasa-289703.rj.r.appspot.com/comprador/register";

const RegisterCustomer = () => {
  const initialState = {
    isLoaded: false,
    error: null,
    data: null,
  };
  const [state, setState] = useState(initialState);
  const [customer, setCustomer] = useState({
    name: "",
    lastname: "",
    date: "",
    dni: "",
    n_mobile: "",
    email: "",
    password: "",
    address: "",
  });

  const handleNameChange = (event) => {
    setCustomer({ ...customer, name: event.target.value });
  };

  const handleLastNameChange = (event) => {
    setCustomer({ ...customer, lastname: event.target.value });
  };

  const handleEmailChange = (event) => {
    setCustomer({ ...customer, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setCustomer({ ...customer, password: event.target.value });
  };

  const handleDniChange = (event) => {
    setCustomer({ ...customer, dni: event.target.value });
  };

  const handleNumberChange = (event) => {
    setCustomer({ ...customer, n_mobile: event.target.value });
  };

  const handleAddressChange = (event) => {
    setCustomer({ ...customer, address: event.target.value });
  };

  const handleSubmit = () => {
    axios
      .post(API, customer)
      .then((res) => {
        setState({ ...state, isLoaded: true, data: res.data });
        console.log(state);
      })
      .catch((error) => {
        setState({ ...state, isLoaded: true, error: error });
        console.log(state.error);
      });
  };

  return (
    <div>
      <RegisterCustomerForm
        handleNameChange={handleNameChange}
        handleLastNameChange={handleLastNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleAddressChange={handleAddressChange}
        handleSubmit={handleSubmit}
        handleNumberChange={handleNumberChange}
        handleDniChange={handleDniChange}
        customer={customer}
      />
    </div>
  );
};

export default RegisterCustomer;
