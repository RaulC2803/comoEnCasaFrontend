import React from "react";
import Product from "./Product.jsx";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

import "./style/ProductList.css";

const ProductList = () => (
  <div className="container-productlist">
    <div>
      <Container fluid>
        <Row>
          <Col className="SubTitulo">
            <h2>Productos Cerca de Ti</h2>
          </Col>
        </Row>
        <Row md={3} lg={3}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Row>
      </Container>
    </div>
  </div>
);

export default ProductList;
