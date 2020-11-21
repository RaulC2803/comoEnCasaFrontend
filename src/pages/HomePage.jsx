import React from "react";
import SearchBar from "../hooks/Home/Container/SearchHome.jsx";
import CategoriesShorts from "../hooks/Home/Container/CategoriesShorts";
import ProductList from "../hooks/Home/Container/ProductList";

import "./style/HomePage.css";

const HomePage = () => (
  <div className="container-home">
    <div className="container-main">
      <SearchBar />
      <CategoriesShorts />
      <ProductList />
    </div>
  </div>
);

export default HomePage;
