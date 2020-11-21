import React from "react";
import { Row, Col, Image, Button, ProgressBar } from "react-bootstrap";
import test from "../../../assets/images/DiversidadAsegurada.png";

import "./style/TopRight.css";

const TopRightForm = () => (
  <Col>
    <Row className="container-parts">
      <Col>
        <div className="image-productview">
          <Image src={test} />
        </div>
      </Col>
      <Col>
        <div className="product-data">
          <p className="store-title">Don Pepe</p>
          <p className="store-address">Av. Por ahí 554</p>
          <div className="store-details">
            <p className="store-details-title">Descripción</p>
            <p className="store-details-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              et recusandae quibusdam earum voluptatibus doloribus. Hola señores
            </p>
          </div>
        </div>
      </Col>
    </Row>
  </Col>
);

export default TopRightForm;
