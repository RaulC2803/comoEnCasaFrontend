import React from "react";
import { Row, Col } from "react-bootstrap";

const ShoppingHistoryItem = (props) => (
  <Row lg={6}>
    <Col sm>
      <p>{props.item.date}</p>
    </Col>
    <Col sm>
      <p>{props.item.product_name}</p>
    </Col>
    <Col sm>
      <p>{props.item.seller_name}</p>
    </Col>
    <Col sm>
      <p>S/. {props.item.subTotal}</p>
    </Col>
    <Col sm>
      <p>S/. {props.item.total}</p>
    </Col>
    <Col sm>
      <p>{props.item.cantidad}</p>
    </Col>
  </Row>
);

export default ShoppingHistoryItem;
