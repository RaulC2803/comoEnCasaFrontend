import React from "react";
import { Row, Col, Image, Button, ProgressBar, Form } from "react-bootstrap";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import test from "../../../assets/images/DiversidadAsegurada.png";

import "./style/BottomRight.css";

const BottomRight = () => (
  <Col>
    <Row className="container-parts">
      <Col>
        <div className="title-review">
          <p>Reseñas</p>
        </div>
        <div className="container-review">
          <Form.Group controlId="review-view">
            <Form.Control as="select" multiple>
              <option>
                <div className="user-review">
                  <p className="user-review-name">Jorge Nitales</p>
                  <p className="user-review-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum perspiciatis reiciendis magni id harum ducimus illo
                    illum totam minus impedit esse voluptatum doloribus iste
                    nulla, quaerat dignissimos dolorem praesentium ipsam.
                  </p>
                </div>
              </option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </div>
      </Col>
    </Row>
  </Col>
);

export default BottomRight;
