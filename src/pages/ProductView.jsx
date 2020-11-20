import React from "react";
import Topleft from "../hooks/ProductView/Components/Topleft.jsx";
import TopRight from "../hooks/ProductView/Components/TopRight.jsx";
import BottomLeft from "../hooks/ProductView/Components/BottomLeft.jsx";
import BottomRight from "../hooks/ProductView/Components/BottomRight.jsx";
import { Row, Col } from "react-bootstrap";

import "./style/ProductView.css";

const ProductView = () => (
  <div className="container-productview">
    <div className="container-rows">
      <Row>
        <Topleft />
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
