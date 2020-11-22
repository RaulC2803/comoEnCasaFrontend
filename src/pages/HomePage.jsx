import React, { useState, useEffect } from "react";
import SearchBar from "../hooks/Home/Container/SearchHome.jsx";
import CategoriesShorts from "../hooks/Home/Container/CategoriesShorts";
import ProductList from "../hooks/Home/Container/ProductList";
import { useParams } from "react-router-dom";
import PageLoading from "./PageLoading.jsx";
import api from "../services/Producto.js";
import api_Customer from "../services/Comprador.js";

import "./style/HomePage.css";

const HomePage = () => {
  const { id } = useParams();

  const initialState = {
    isLoading: true,
    error: null,
    data: null,
  };

  const [user, setUser] = useState({});

  const [state, setState] = useState(initialState);

  const [list, setList] = useState([]);

  const loadProductList = () => {
    api.product.getProductList().then((items) => {
      setList(items);
      setState({ ...state, isLoading: false, data: items });
    });
  };

  const getCustomer = () => {
    api_Customer.customer.getCustomer(id).then((items) => {
      setUser(items);
    });
  };

  const cacheProductList = () => {
    setState({ ...state, isLoading: false, data: list });
  };

  useEffect(() => {
    setState({ ...state, isLoading: true, error: null });
    getCustomer();
    loadProductList();
  }, []);

  const handleSearchProduct = (name) => {
    setState({ ...state, isLoading: true, error: null });
    api.product.searchProductByName(name).then((items) => {
      setState({ ...state, isLoading: false, data: items });
    });
  };

  const handleSearchProductbyCategorie = (name) => {
    setState({ ...state, isLoading: true, error: null });
    api.product.searchProductByCategorie(name).then((items) => {
      setState({ ...state, isLoading: false, data: items });
    });
  };

  if (state.isLoading === true) {
    return <PageLoading />;
  } else {
    if (state.data) {
      return (
        <div className="container-home">
          <div className="container-main">
            <SearchBar
              handleSearchProduct={handleSearchProduct}
              cacheProductList={cacheProductList}
              email={user.email}
            />
            <CategoriesShorts
              handleSearchProductbyCategorie={handleSearchProductbyCategorie}
              cacheProductList={cacheProductList}
            />
            <ProductList data={state.data} />
          </div>
        </div>
      );
    }
  }
};

export default HomePage;
