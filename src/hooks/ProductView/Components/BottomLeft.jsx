import React from "react";
import { Row, Col, Image, Button, ProgressBar } from "react-bootstrap";
import StarIcon from "@material-ui/icons/Star";

const BottomLeft = () => (
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
                <ProgressBar animated variant="warning" now={20} />
              </div>
            </Row>
            <Row>
              <div className="start-accumulate">
                <p className="title-calification">
                  <StarIcon /> Calificación de 2
                </p>
                <ProgressBar animated variant="warning" now={50} />
              </div>
            </Row>
            <Row>
              <div className="start-accumulate">
                <p className="title-calification">
                  <StarIcon /> Calificación de 3
                </p>
                <ProgressBar animated variant="warning" now={70} />
              </div>
            </Row>
            <Row>
              <div className="start-accumulate">
                <p className="title-calification">
                  <StarIcon /> Calificación de 4
                </p>
                <ProgressBar animated variant="warning" now={30} />
              </div>
            </Row>
            <Row>
              <div className="start-accumulate">
                <p className="title-calification">
                  <StarIcon /> Calificación de 5
                </p>
                <ProgressBar animated variant="warning" now={80} />
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
              <StarIcon fontSize="large" /> 4.3
            </p>
          </div>
        </div>
      </Col>
    </Row>
  </Col>
);

export default BottomLeft;
