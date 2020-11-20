import React from "react";
import SearchBar from "../hooks/Home/Components/SearchHome.jsx";
import CategoriesShorts from "../hooks/Home/Components/CategoriesShorts";
import ProductList from "../hooks/Home/Components/ProductList";

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
