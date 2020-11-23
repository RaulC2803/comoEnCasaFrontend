import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import api_Customer from "../../../services/Comprador.js";
import RegisterCustomerForm from "../Components/RegisterCustomer.jsx";
import PageLoading from "../../../pages/PageLoading.jsx";
import ubigeo from "../../../services/ubigeo.js";

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

  const [optionProvince, setOptionProvince] = useState([]);
  const [optionDistrit, setOptionDistrit] = useState([]);
  const [departament, setDepartament] = useState("");
  const [province, setProvince] = useState("");
  const [distrit, setDistrit] = useState("");
  const [province_array, setProvinceArray] = useState([]);
  const [distrit_array, setDistritArray] = useState([]);

  const loadUbigeos = () => {
    const departament_array = ubigeo.departamentos;
    let items = [];
    departament_array.forEach((dep) => {
      items.push(
        <option key={dep.id_ubigeo} value={dep.id_ubigeo}>
          {dep.nombre_ubigeo}
        </option>
      );
    });
    return items;
  };

  const handleChangeDepartaments = (event) => {
    const id_ubigeo = event.target.value;
    const pro_array = ubigeo.provincias[id_ubigeo];

    const index = event.target.selectedIndex - 1;
    const depa_select = ubigeo.departamentos[index];

    let items = [];
    pro_array.forEach((pro) => {
      items.push(
        <option key={pro.id_ubigeo} value={pro.id_ubigeo}>
          {pro.nombre_ubigeo}
        </option>
      );
    });
    setOptionProvince(items);
    setDepartament(depa_select);
    setProvinceArray(pro_array);
  };

  const handleChangeProvince = (event) => {
    const id_ubigeo = event.target.value;

    const index = event.target.selectedIndex - 1;

    const dist_array = ubigeo.distritos[id_ubigeo];

    let items = [];
    dist_array.forEach((dis) => {
      items.push(
        <option key={dis.id_ubigeo} value={dis.id_ubigeo}>
          {dis.nombre_ubigeo}
        </option>
      );
    });
    setOptionDistrit(items);
    setProvince(province_array[index]);
    setDistritArray(dist_array);
  };

  const handleChangeDistrit = (event) => {
    const index = event.target.selectedIndex - 1;
    setDistrit(distrit_array[index]);
  };

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
        const res = await api_Customer.customer.registerCustomer({
          ...customer,
          address:
            customer.address +
            " " +
            departament.nombre_ubigeo +
            ", " +
            province.nombre_ubigeo +
            ", " +
            distrit.nombre_ubigeo,
        });
        setState({ ...state, isLoading: false, data: res });
      } catch (error) {
        setState({ ...state, isLoading: false, error: error });
      }
    } else {
      console.log("No válido");
    }
  };

  if (state.data) {
    const id = state.data.idComprador;
    const url = `/home/${id}`;
    return <Redirect to={url} />;
  }
  if (state.isLoading === true) {
    return (
      <div>
        <PageLoading />
      </div>
    );
  } else {
    return (
      <div className="form-register">
        <h2>REGISTRARSE COMO COMPRADOR</h2>
        <RegisterCustomerForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          validated={validated}
          formErrors={formErrors}
          loadUbigeos={loadUbigeos}
          handleChangeDepartaments={handleChangeDepartaments}
          handleChangeProvince={handleChangeProvince}
          handleChangeDistrit={handleChangeDistrit}
          optionProvince={optionProvince}
          optionDistrit={optionDistrit}
        />
      </div>
    );
  }
};

export default RegisterCustomer;
