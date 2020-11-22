import React from "react";
import MyProducts from "../hooks/Product/Container/MyProducts.jsx";
import { useParams } from "react-router-dom";
import "./style/HomePage.css"


const PageMyProducts = () => (
  
  //const idComprador = useParams();

  <div className="container-home">
    <div className="container-main">
      <MyProducts />
    </div>
  </div>
);

export default PageMyProducts;

