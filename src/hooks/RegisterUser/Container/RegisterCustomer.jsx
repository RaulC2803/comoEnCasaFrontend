import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import api from "../../../services/Comprador.js";
import RegisterCustomerForm from "../Components/RegisterCustomer.jsx";
import PageLoading from "../../../pages/PageLoading.jsx";

import "../Components/style/Register.css";

const RegisterCustomer = () => {
  const initialState = {
    isLoading: false,
    error: null,
    data: null,
  };

  const [state, setState] = useState(initialState);

  const [customer, setCustomer] = useState({
    name: "",
    lastname: "",
    dni: "",
    n_mobile: "",
    email: "",
    password: "",
    address: "",
  });

  const formErrors = {
    name: "se requiere 3 caracteres como mínimo",
    lastname: "se requiere 3 caracteres como mínimo",
    dni: "ingrese un documento de identidad válido",
    n_mobile: "ingrese un número móvil válido",
    email: "ingrese un email válido",
    password: "se requiere 6 caracteres como mínimo",
    address: "ingrese una dirección válida",
  };

  const [validated, setValidated] = useState(false);

  const emailRegex = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setCustomer({ ...customer, name: value });
        break;
      case "lastname":
        setCustomer({ ...customer, lastname: value });
        break;
      case "dni":
        setCustomer({ ...customer, dni: value });
        break;
      case "n_mobile":
        setCustomer({ ...customer, n_mobile: value });
        break;
      case "email":
        setCustomer({ ...customer, email: value });
        break;
      case "password":
        setCustomer({ ...customer, password: value });
        break;
      case "address":
        setCustomer({ ...customer, address: value });
        break;
      default:
        break;
    }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      event.preventDefault();
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  const handleSubmit = async (event) => {
    if (validated) {
      setState({ ...state, isLoading: true, error: null });
      try {
        const res = await api.customer.registerCustomer(customer);
        setState({ ...state, isLoading: false, data: res });
      } catch (error) {
        setState({ ...state, isLoading: false, error: error });
      }
    } else {
      console.log("No válido");
    }
  };

  if (state.data) {
    return <Redirect to="/login" />;
  }
  if (state.isLoading === true) {
    return (
      <div>
        <PageLoading />
      </div>
    );
  } else {
    return (
      <div className="container-register">
        <div className="container-form">
          <h2>REGISTRARSE COMO COMPRADOR</h2>
          <RegisterCustomerForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            validated={validated}
            formErrors={formErrors}
          />
        </div>
      </div>
    );
  }
};

export default RegisterCustomer;
