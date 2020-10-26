import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import SearchBar from "../../SearchBar"
import BasicTable from "../../BasicTable"
//estilos
import "./style/MyProducts.css";

const MyProducts = () => (
    <div className="container-myproducts">
        <div className="container-form">
            <h2>Mis Productos</h2>
            <SearchBar />
            <div className="container-table">
                <Container fluid>
                    <Row>
                        <Col sm>Producto</Col>
                        <Col sm>Precio</Col>
                        <Col sm>Descripcion</Col>
                        <Col sm>Sección</Col>
                        <Col sm>Stock</Col>
                    </Row>

                    {/*Aqui va Componente FILA con la data de los productos de un vendedor*/}

                </Container>
            </div>



            <div className="container-button">
                <Button variant="dark" type="submit" >
                    Agregar nuevo producto
            </Button>
                <Button variant="dark" type="submit" >
                    Guardar
            </Button>

            </div>
        </div>
    </div>


)

export default MyProducts