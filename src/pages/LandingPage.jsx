import React from "react";
import NavBar from "../hooks/NavBar";
import Info from "../hooks/Info";
import Register from "../hooks/Register.jsx";
import Benefits from "../hooks/Benefits";
import Footer from "../hooks/Footer";
import { Row, Col } from "react-bootstrap";

import "./style/LandingPage.css";

const LandingPage = () => (
  <div>
    <nav>
      <NavBar />
    </nav>
    <div className="Container">
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
    <Footer></Footer>
  </div>
);

export default LandingPage;
