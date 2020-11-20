import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import "./style/Login.css";

const Login = () => (
  <div className="container-login">
    <div className="container-login-form">
      <h2>Ingresar</h2>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={1}></Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={1}></Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <div className="button-login">
          <Button variant="dark">Iniciar</Button>
        </div>
      </Form>
    </div>
  </div>
);

export default Login;
