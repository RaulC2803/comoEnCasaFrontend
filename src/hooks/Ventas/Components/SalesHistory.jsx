import React from "react";
import { Form, Button, Col, Row, Dropdown, DropdownButton, Container } from "react-bootstrap";

import "./style/SalesHistory.css"

const SalesHistory = () => (
    <div className='container-salesHistory'>
        <div className='container-form'>
            <div className='container-title'>
                <h2>Historial de Ventas</h2>
            </div>

            <div className="container-table">
                <Container fluid>
                    <Row>
                        <Col sm>Ventas Finalizadas</Col>
                        <Col sm>Datos de Envío</Col>
                        <Col sm>Datos Proveedor</Col>
                        <Col sm>Datos de Pago</Col>
                        <Col sm>Código Pedido</Col>
                        <Col sm>Estado</Col>
                    </Row>

                    {/*Aqui va Componente FILA con la data de las ventas hechas por un vendedor*/}

                </Container>
            </div>

        </div>
    </div>
)

export default SalesHistory