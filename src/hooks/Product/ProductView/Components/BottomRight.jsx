import React from "react";
import { Row, Col, Image, Button, ProgressBar, Form } from "react-bootstrap";
import Resena from "./Resena.jsx";

import "./style/BottomRight.css";

const BottomRight = () => (
  <Col>
    <Row className="container-parts">
      <Col>
        <Row>
          <div className="title-review">
            <p>Reseñas</p>
          </div>
        </Row>
        <Row>
          <div className="container-review">
            <Resena />
            <Resena />
            <Resena />
            <Resena />
            <Resena />
          </div>
        </Row>
      </Col>
    </Row>
  </Col>
);

export default BottomRight;
