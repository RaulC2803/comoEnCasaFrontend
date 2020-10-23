import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

import "./style/Register.css";

const RegisterSeller = () => (
  <div className="container-form">
    <h2>REGISTRARSE COMO VENDEDOR</h2>
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Introduzca su nombre" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" placeholder="Introduzca sus apellidos" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Introduzca su email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Dirección</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      {/* Poner la base de datos se las regiones del Peru */}
      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Región</Form.Label>
          <Form.Control as="select" defaultValue="Elija...">
            <option>Elija...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Provincia</Form.Label>
          <Form.Control as="select" defaultValue="Elija...">
            <option>Elija...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Distrito</Form.Label>
          <Form.Control as="select" defaultValue="Elija...">
            <option>Elija...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Button variant="dark" type="submit">
        Registrarse
      </Button>
    </Form>
  </div>
);

export default RegisterSeller;
