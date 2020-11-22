import React from "react";
import { Row, Col, Image, Button, ProgressBar, Form } from "react-bootstrap";

import "./style/BottomRight.css";

const BottomRight = (props) => (
  <Col>
    <Row className="container-parts">
      <Col>
        <Row>
          <div className="title-review">
            <p>Reseñas</p>
          </div>
        </Row>
        <Row>
          <div className="container-review">{props.items}</div>
        </Row>
      </Col>
    </Row>
  </Col>
);

export default BottomRight;
