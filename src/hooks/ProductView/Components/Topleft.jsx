import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import test from "../../../assets/images/DiversidadAsegurada.png";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";

import "./style/TopLeft.css";

const TopleftForm = (props) => (
  <Col>
    <Row className="container-parts">
      <Col>
        <div className="image-productview">
          <Image src={test} />
        </div>
      </Col>
      <Col>
        <div className="product-data">
          <p className="product-title">{props.name}</p>
          <p className="product-store">{props.nameSeller}</p>
          <p className="product-price">
            S/. {props.price} <LocalGroceryStoreIcon fontSize="large" />
          </p>
          <div className="product-details">
            <p className="product-details-title">Descripción</p>
            <p className="product-details-description">{props.description}</p>
          </div>
        </div>
      </Col>
    </Row>
  </Col>
);

export default TopleftForm;
