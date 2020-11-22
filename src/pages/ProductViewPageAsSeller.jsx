import React, { useState, useEffect } from "react";
import TopLeft from "../hooks/Product/ProductView/Container/TopLeft";
import TopRight from "../hooks/Product/ProductView/Container/TopRight";
import BottomLeft from "../hooks/Product/ProductView/Container/BottomLeft";
import BottomRight from "../hooks/Product/ProductView/Container/BottomRight";
import PageLoading from "./PageLoading.jsx";
import api from "../services/Producto.js";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

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
      const url = `/editproduct/${id}`
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

            <Row>
              <Button variant="dark" type="submit">
              <Link to={url} className="editproduct">
                Editar
              </Link>
              </Button>
            </Row>

          </div>
        </div>
      );
    }
  }
};
export default ProductView;
