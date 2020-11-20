import React from "react";
import Info from "../hooks/Info";
import Register from "../hooks/Register.jsx";
import Benefits from "../hooks/Benefits";
import Nosotros from "../hooks/Nosotros";
import { Row, Col } from "react-bootstrap";

import "./style/LandingPage.css";

const LandingPage = () => (
  <div>
    <div className="Container-landing">
      <Row md={2}>
        <Col>
          <Info />
        </Col>
        <Col>
          <Register />
        </Col>
      </Row>
    </div>
    <div className="Container2">
      <Benefits />
    </div>
    <div className="Container3">
      <Nosotros />
    </div>
  </div>
);

export default LandingPage;
