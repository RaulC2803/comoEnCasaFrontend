import React from "react";
import { Col, Image } from "react-bootstrap";

import test from "../../../assets/images/DiversidadAsegurada.png";
import "./style/Product.css";

const ProductForm = () => (
  <Col lg="auto" className="col-item">
    <div className="product-item">
      <Image src={test} />
      <div className="details">
        <strong className="title">Lomito Saltado</strong>
        <p className="store">Pepito Store</p>
        <p className="price">$ 5.0</p>
      </div>
    </div>
  </Col>
);

export default ProductForm;
