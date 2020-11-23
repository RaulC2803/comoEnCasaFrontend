import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import api_Seller from "../../../services/Vendedor.js";
import "../Components/style/RegisterProduct.css";
import RegisterProductForm from "../Components/RegisterProduct.jsx";
import PageLoading from "../../../pages/PageLoading.jsx";

const RegisterProduct = () => {
  const initialState = {
    isLoading: false,
    error: null,
    data: null,
  };

  const [state, setState] = useState(initialState);

  const [product, setProduct] = useState({
    name: "",
    categoria: "comida",
    price: "",
    description: "",
    images: "sdasdfdergr4g4",
    tags: "",
    stock: ""
  });

  const formErrors = {
    name: "Ingrese un nombre de producto válido",
    categoria: "Por favor Ingresa una categoría",
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
      case "category":
        setProduct({ ...product, categoria: value });
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

  const id = 22
  const handleSubmit = async (event) => {
    console.log(product)
    setState({ ...state, isLoading: true, error: null });
    try {
      console.log("handlesubmit")
      const res = await api_Seller.seller.registerProduct(product, id);
      setState({ ...state, isLoading: false, data: res });
    } catch (error) {
      setState({ ...state, isLoading: false, error: error });
      console.log(state.error)
    }
  };

  if (state.data) {
    console.log("asdasd")
    const id = state.data.idVendedor;
    const url = `/myProducts`;
    return <Redirect to={url} />;
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