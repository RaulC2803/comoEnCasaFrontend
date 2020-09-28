import React from "react";
import { Row, Card, Col, Container } from "react-bootstrap";

import interaccionImg from "../assets/images/Interaccionfugaz.png";
import diversidadImg from "../assets/images/DiversidadAsegurada.png";
import visibleImg from "../assets/images/visibleImg.png";

import "./style/Benefits.css";

const Benefits = () => (
  <Container fluid="true">
    <div className="Titulo">
      <h2>Beneficios</h2>
    </div>
    <Row sm={3} className="justify-content-md-center">
      <Col md="auto">
        <Card style={{ width: "18rem", margin: "0 2%" }}>
          <Card.Img variant="top" src={interaccionImg} alt="Image1" />
          <Card.Body>
            <Card.Title>Interacción Fugaz</Card.Title>
            <Card.Text>
              Brindamos una comunicación cliente-vendedor efectiva, segura y
              rápida
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md="auto">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={diversidadImg} alt="Image1" />
          <Card.Body>
            <Card.Title>Diversidad Asegurada</Card.Title>
            <Card.Text>
              Contamos con una gran cantidad de productos en diferentes
              categorías
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md="auto">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={visibleImg} />
          <Card.Body>
            <Card.Title>Hazte Visible</Card.Title>
            <Card.Text>
              Alta exposición para vendedores que buscan ofrecer sus productos
              y/o servicios.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Benefits;
