import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Components/style/RegisterProduct.css";
import RegisterProductForm from "../Components/RegisterProduct.jsx";

const API = "https://comoencasa-289703.rj.r.appspot.com/producto/registrar{id}";

const RegisterProduct = () => {
  const initialState = {
    isLoaded: false,
    error: null,
    data: null,
  };
  const [state, setState] = useState(initialState);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    images: "",
    tags: "",
    stock: ""
  });

  const formErrors = {
    name: "Ingrese un nombre de producto válido",
    price: "Ingrese un precio válido",
    description: "ingrese una descripcion válida",
    images: "ingrese un formato de imagen válido",
    tags: "ingrese tags válidos",
    stock: "Ingrese una cantidad de stock válida",
  };

  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setProduct({ ...product, name: value });
        break;
      case "price":
        setProduct({ ...product, price: value });
        break;
      case "description":
        setProduct({ ...product, description: value });
        break;
      case "images":
        setProduct({ ...product, images: value });
        break;
      case "tags":
        setProduct({ ...product, tags: value });
        break;
      case "stock":
        setProduct({ ...product, stock: value });
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

  const handleSubmit = () => {
    axios
      .post(API, product)
      .then((res) => {
        setState({ ...state, isLoaded: true, data: res.data });
        console.log(state);
      })
      .catch((error) => {
        setState({ ...state, isLoaded: true, error: error });
        console.log(state.error);
      });
  };

  if (state.data) {
    console.log("1")
    return <Redirect to="/registrarProducto" />;
  }
  if (state.isLoading === true) {
    console.log("2")
    return (
      <div>
        <PageLoading />
      </div>
    );
  } else {
    console.log("3")
    return (
          <RegisterProductForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            validated={validated}
            formErrors={formErrors}
          />
    );
  }
};

export default RegisterProduct;