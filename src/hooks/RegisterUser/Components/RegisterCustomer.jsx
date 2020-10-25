import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

import "./style/Register.css";

const RegisterCustomerForm = (props) => (
  <div className="container-form z-depth-3">
    <h2>REGISTRARSE COMO CLIENTE</h2>
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduzca su nombre"
            onChange={props.handleNameChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduzca sus apellidos"
            onChange={props.handleLastNameChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduzca su email"
            onChange={props.handleEmailChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={props.handlePasswordChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridDni">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduzca su DNI"
            onChange={props.handleDniChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridNumber">
          <Form.Label>Número Celular</Form.Label>
          <Form.Control
            type="text"
            placeholder="973..."
            onChange={props.handleNumberChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          placeholder="1234 Main St"
          onChange={props.handleAddressChange}
        />
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

      <Button variant="dark" onClick={props.handleSubmit}>
        Registrarse
      </Button>
    </Form>
  </div>
);

export default RegisterCustomerForm;
