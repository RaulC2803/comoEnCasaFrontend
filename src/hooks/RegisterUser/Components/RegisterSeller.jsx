import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const RegisterSellerForm = (props) => (
  <Form noValidate validated={props.validated}>
    <Form.Row>
      <Form.Group as={Col} controlId="validationCustomName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Introduzca su nombre"
          onChange={props.handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          * {props.formErrors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridLastName">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control
          name="lastname"
          type="text"
          placeholder="Introduzca sus apellidos"
          onChange={props.handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          * {props.formErrors.lastname}
        </Form.Control.Feedback>
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Introduzca su email"
          onChange={props.handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          * {props.formErrors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          onChange={props.handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          * {props.formErrors.password}
        </Form.Control.Feedback>
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridDni">
        <Form.Label>DNI</Form.Label>
        <Form.Control
          name="dni"
          type="text"
          placeholder="Introduzca su DNI"
          onChange={props.handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          * {props.formErrors.dni}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridNumber">
        <Form.Label>Número Celular</Form.Label>
        <Form.Control
          name="n_mobile"
          type="text"
          placeholder="973..."
          onChange={props.handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          * {props.formErrors.n_mobile}
        </Form.Control.Feedback>
      </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridAddress1">
      <Form.Label>Dirección</Form.Label>
      <Form.Control
        name="address"
        type="text"
        placeholder="1234 Main St"
        onChange={props.handleChange}
        required
      />
      <Form.Control.Feedback type="invalid">
        * {props.formErrors.address}
      </Form.Control.Feedback>
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

    <Button onClick={props.handleSubmit} variant="dark" className="form-button">
      Registrarse
    </Button>
  </Form>
);

export default RegisterSellerForm;
