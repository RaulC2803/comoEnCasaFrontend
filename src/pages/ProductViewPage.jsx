import React, { useState, useEffect } from "react";
import TopLeft from "../hooks/ProductView/Container/TopLeft.jsx";
import TopRight from "../hooks/ProductView/Container/TopRight.jsx";
import BottomLeft from "../hooks/ProductView/Container/BottomLeft.jsx";
import BottomRight from "../hooks/ProductView/Container/BottomRight.jsx";
import PageLoading from "./PageLoading.jsx";
import api from "../services/Producto.js";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import "./style/ProductView.css";

const ProductView = () => {
  const initialState = {
    isLoading: true,
    error: null,
    data: null,
  };

  const [state, setState] = useState(initialState);
  const { id } = useParams();

  useEffect(() => {
    api.product.getProduct(id).then((items) => {
      setState({ ...state, isLoading: false, data: items });
    });
  }, []);

  if (state.isLoading === true) {
    return <PageLoading />;
  } else {
    if (state.data) {
      return (
        <div className="container-productview">
          <div className="container-rows">
            <Row>
              <TopLeft product={state.data} />
              <TopRight product={state.data} />
            </Row>
            <Row>
              <BottomLeft />
              <BottomRight />
            </Row>
          </div>
        </div>
      );
    }
  }
};
export default ProductView;
