import React from "react";
import { Form, Button, Col } from "react-bootstrap";

import "./style/Register.css";

const Register = () => (
  <div className="Formulario">
    <h1 className="titulo-Formulario">Participa de este cambio</h1>
    <Form>
      <Form.Row>
        <Col>
          <Form.Group controlId="nombreForm">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="apellidoForm">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Group controlId="emailForm">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Row>
        <Col>
          <Form.Group controlId="dniForm">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="passwordForm">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Col>
      </Form.Row>
      <Button className="Button-Register" variant="dark" type="submit">
        Únete a nosotros
      </Button>
    </Form>
  </div>
);

export default Register;
