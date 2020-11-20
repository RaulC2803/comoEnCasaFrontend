import React from "react";
import { Row, Col, Image, Button, ProgressBar } from "react-bootstrap";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import test from "../../../assets/images/DiversidadAsegurada.png";

const TopRight = () => (
  <Col>
    <Row className="container-parts">
      <Col>
        <div className="image-productview">
          <Image src={test} />
        </div>
      </Col>
      <Col>
        <div className="product-data">
          <p className="product-title">Don Pepe</p>
          <p className="product-store">Av. Por ahí 554</p>
          <p className="product-price">
            S/. 5.00 <LocalGroceryStoreIcon fontSize="large" />
          </p>
          <div className="product-details">
            <p className="product-details-title">Descripción</p>
            <p className="product-details-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              et recusandae quibusdam earum voluptatibus doloribus. Hola señores
            </p>
          </div>
        </div>
      </Col>
    </Row>
  </Col>
);

export default TopRight;
