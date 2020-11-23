import React from "react";
import { Link } from "react-router-dom"
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import SearchBar from "../../SearchBar";
import BasicTable from "../../BasicTable";
//estilos
import "./style/MyProducts.css";

const MyProductsList = (props) => (

  <div className="container-productlist">
    <h2>Mis Productos</h2>
    <Container fluid>
      <Row>
        <Row md={3} lg={3}>
          {props.items}
        </Row>
      </Row>

      <div className="container-button">
        <Link to={`/registrarProducto`}>
      <Button variant="dark" type="submit">
        Agregar
        </Button>
        </Link>
      <Button variant="dark" type="submit">
        Eliminar
        </Button>
      </div>
    </Container>

    
  </div>
);

export default MyProductsList;

