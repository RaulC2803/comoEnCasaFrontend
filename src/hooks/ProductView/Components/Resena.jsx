import React from "react";
import { Row, Col } from "react-bootstrap";

import "./style/Resena.css";
const Resena = (props) => (
  <Row className="row-review">
    <Col>
      <label className="user-review">{props.name}</label>
      <p className="text-review">{props.comentary}</p>
    </Col>
  </Row>
);

export default Resena;
