import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './style/Table1.css'

const BasicTable = () => (
    <div>
        <Container fluid>
            <Row>
                <Col sm>Producto</Col>
                <Col sm>Descripcion</Col>
                <Col sm>Sección</Col>
                <Col sm>Stock</Col>
            </Row>
        </Container>
    </div>
);

export default BasicTable;
