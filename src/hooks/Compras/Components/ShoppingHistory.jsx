import React, { useState } from "react";
import { Form, Button, Col, Row, Dropdown, DropdownButton, Container } from "react-bootstrap";

import "./style/ShoppingHistory.css"

const ShoppingHistory = () => (
    <div className="container-shoppingHistory">
        <div className='container-form'>
            <div className='container-title'>
                <h2>Historial de Compras</h2>
            </div>

            <div className="container-table">
                <Container fluid>
                    <Row>
                        <Col sm>Compras Finalizadas</Col>
                        <Col sm>Datos de Envío</Col>
                        <Col sm>Datos Proveedor</Col>
                        <Col sm>Datos de Pago</Col>
                        <Col sm>Código Pedido</Col>
                        <Col sm>Estado</Col>
                    </Row>

                    {/*Aqui va Componente FILA con la data de las compras hechas por un cliente*/}

                </Container>
            </div>
        </div>
    </div>
)

export default ShoppingHistory