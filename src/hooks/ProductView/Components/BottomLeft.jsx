import React from "react";
import { Form, Row, Col, Image, Button, ProgressBar } from "react-bootstrap";
import StarIcon from "@material-ui/icons/Star";

import "./style/BottomLeft.css";

const BottomLeftForm = (props) => (
  <Col>
    <Row className="container-parts">
      <Col>
        <div className="product-data">
          <Button variant="dark" className="product-calification-button">
            Calificar Producto
          </Button>
          <div className="review-average">
            <Row>
              <div className="start-accumulate">
                <p className="title-calification">
                  <StarIcon /> Calificación de 1
                </p>
                <ProgressBar animated variant="warning" now={props.star1} />
              </div>
            </Row>
            <Row>
              <div className="start-accumulate">
                <p className="title-calification">
                  <StarIcon /> Calificación de 2
                </p>
                <ProgressBar animated variant="warning" now={props.star2} />
              </div>
            </Row>
            <Row>
              <div className="start-accumulate">
                <p className="title-calification">
                  <StarIcon /> Calificación de 3
                </p>
                <ProgressBar animated variant="warning" now={props.star3} />
              </div>
            </Row>
            <Row>
              <div className="start-accumulate">
                <p className="title-calification">
                  <StarIcon /> Calificación de 4
                </p>
                <ProgressBar animated variant="warning" now={props.star4} />
              </div>
            </Row>
            <Row>
              <div className="start-accumulate">
                <p className="title-calification">
                  <StarIcon /> Calificación de 5
                </p>
                <ProgressBar animated variant="warning" now={props.star5} />
              </div>
            </Row>
          </div>
        </div>
      </Col>
      <Col>
        <div className="container-review-title">
          <p className="review-title">Calificación</p>
          <div className="number-review">
            <p>
              <StarIcon fontSize="large" />
              {props.average}
            </p>
          </div>
          <div className="button-buy">
            <Form>
              <Form.Group controlId="buy">
                <Form.Label>Añadir a la canasta</Form.Label>
                <Form.Control type="number" onChange={props.handleOnChange} />
              </Form.Group>
            </Form>
            <Button onClick={props.handleSubmit} variant="dark">
              Añadir a la canasta
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  </Col>
);

export default BottomLeftForm;
