import React from "react";
import SearchBar from "../hooks/Home/Container/SearchHome.jsx";
import CategoriesShorts from "../hooks/Home/Container/CategoriesShorts";
import ProductList from "../hooks/Home/Container/ProductList";
import { useParams } from "react-router-dom";

import "./style/HomePage.css";

const HomePage = () => {
  const idComprador = useParams();

  return (
    <div className="container-home">
      <div className="container-main">
        <SearchBar />
        <CategoriesShorts />
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
