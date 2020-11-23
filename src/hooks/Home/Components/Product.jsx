import React from "react";
import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";

import test from "../../../assets/images/DiversidadAsegurada.png";

import "./style/Product.css";

const ProductForm = (props) => {
  const id = props.product.idProducto;
  const url = `/productview/${props.idc}/${id}`;
  return (
    <Col lg="auto" className="col-item">
      <Link to={url}>
        <div className="product-item">
          <Image src={test} />
          <div className="details">
            <strong className="title">{props.product.name}</strong>
            <p className="store">{props.product.nameVendedor}</p>
            <p className="price">$ {props.product.price}</p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default ProductForm;
