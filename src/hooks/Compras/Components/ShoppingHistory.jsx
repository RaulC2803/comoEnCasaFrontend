import React, { useState } from "react";
import {
  Form,
  Button,
  Col,
  Row,
  Dropdown,
  DropdownButton,
  Container,
} from "react-bootstrap";

import "./style/ShoppingHistory.css";

const ShoppingHistoryForm = (props) => (
  <div className="form-shoppingHistory">
    <div className="title-shoppingHistory">
      <h2>Historial de Compras</h2>
    </div>
    <div className="container-table">
      <Container fluid>
        <Row>
          <Col sm>
            <strong>Fecha</strong>
          </Col>
          <Col sm>
            <strong>Nombre del Producto</strong>
          </Col>
          <Col sm>
            <strong>Nombre del Vendedor</strong>
          </Col>
          <Col sm>
            <strong>Sub Total</strong>
          </Col>
          <Col sm>
            <strong>Total</strong>
          </Col>
          <Col sm>
            <strong>Cantidad</strong>
          </Col>
        </Row>
        <div className="divider" />
        <Row className="rows-history">
          <Col>{props.items}</Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default ShoppingHistoryForm;
