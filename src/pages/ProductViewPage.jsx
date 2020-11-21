import React from "react";
import TopLeft from "../hooks/ProductView/Container/TopLeft.jsx";
import TopRight from "../hooks/ProductView/Container/TopRight.jsx";
import BottomLeft from "../hooks/ProductView/Container/BottomLeft.jsx";
import BottomRight from "../hooks/ProductView/Container/BottomRight.jsx";
import { Row, Col } from "react-bootstrap";

import "./style/ProductView.css";

const ProductView = () => (
  <div className="container-productview">
    <div className="container-rows">
      <Row>
        <TopLeft />
        <TopRight />
      </Row>
      <Row>
        <BottomLeft />
        <BottomRight />
      </Row>
    </div>
  </div>
);

export default ProductView;
