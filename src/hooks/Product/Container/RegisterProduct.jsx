import React, { useState, useEffect } from "react";
import axios from "axios";

import RegisterProduct from "../Components/RegisterProduct.jsx";

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

  const handleNameChange = (event) => {
    setProduct({ ...product, name: event.target.value });
  };

  const handlePriceChange = (event) => {
    setProduct({ ...product, price: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setProduct({ ...product, description: event.target.value });
  };

  const handleImagesChange = (event) => {
    setProduct({ ...product, images: event.target.value });
  };

  const handleTagsChange = (event) => {
    setProduct({ ...product, tags: event.target.value });
  };

  const handleStockChange = (event) => {
      setProduct({ ...product, stock: event.target.value });
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

  return (
    <div>
      <RegisterProductForm
        handleNameChange={handleNameChange}
        handlePriceChange={handlePriceChange}
        handleDescriptionChange={handleDescriptionChange}
        handleImagesChange={handleImagesChange}
        handleTagsChange={handleTagsChange}
        handleStockChange={handleStockChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegisterProduct;