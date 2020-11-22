import React from "react";
import { Row, Col, Image, Button, ProgressBar } from "react-bootstrap";

import "./style/TopRight.css";

const TopRightForm = (props) => (
  <Col>
    <Row className="container-parts">
      <Col>
        <div className="image-productview">
          <Image src={props.images} />
        </div>
      </Col>
      <Col>
        <div className="product-data">
          <p className="store-title">{props.name}</p>
          <p className="store-address">{props.address}</p>
          <div className="store-details">
            <p className="store-details-title">Descripción</p>
            <div className="store-details-description">
              <p className="store-details-description-movil">Móvil</p>
              <p>{props.n_mobile}</p>
              <p className="store-details-description-email">Email</p>
              <p>{props.email}</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Col>
);

export default TopRightForm;
