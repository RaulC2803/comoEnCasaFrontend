import React from "react";
import { Row, Col } from "react-bootstrap";

import "./style/Resena.css";
const Resena = () => (
  <Row className="row-review">
    <Col>
      <label className="user-review">Eliseo Vargas</label>
      <p className="text-review">
        Producto de calidad, Lo recomiendo al 100%!!! Lo volvere a comprar. Muchas gracias
      </p>
    </Col>
  </Row>
);

export default Resena;
