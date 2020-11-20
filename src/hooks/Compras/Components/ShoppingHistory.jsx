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

const ShoppingHistory = () => (
  <div className="form-shoppingHistory">
    <div className="title-shoppingHistory">
      <h2>Historial de Compras</h2>
    </div>
    <div className="container-table">
      <Container fluid>
        <Row>
          <Col sm>
            <strong>Compras Finalizadas</strong>
          </Col>
          <Col sm>
            <strong>Datos de Envío</strong>
          </Col>
          <Col sm>
            <strong>Datos Proveedor</strong>
          </Col>
          <Col sm>
            <strong>Datos de Pago</strong>
          </Col>
          <Col sm>
            <strong>Código Pedido</strong>
          </Col>
          <Col sm>
            <strong>Estado</strong>
          </Col>
        </Row>
        <div className="divider" />
        <Row className="rows-history">
          <Col sm>
            <p>Compras Finalizadas</p>
          </Col>
          <Col sm>
            <p>Datos de Envío</p>
          </Col>
          <Col sm>
            <p>Datos Proveedor</p>
          </Col>
          <Col sm>
            <p>Datos de Pago</p>
          </Col>
          <Col sm>
            <p>Código Pedido</p>
          </Col>
          <Col sm>
            <p>Estado</p>
          </Col>
        </Row>
        {/*Aqui va Componente FILA con la data de las compras hechas por un cliente*/}
      </Container>
    </div>
  </div>
);

export default ShoppingHistory;
