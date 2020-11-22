import React, { useState, useEffect } from "react";
import ProductForm from "../Components/Product.jsx";
import ProductListForm from "../Components/ProductList.jsx";
import PageLoading from "../../../pages/PageLoading.jsx";
import api from "../../../services/Producto.js";

const ProductList = () => {
  const initialState = {
    isLoading: true,
    error: null,
    data: null,
  };

  const [state, setState] = useState(initialState);
  let firsTime = true;

  useEffect(() => {
    if (firsTime) {
      api.product.getProductList().then((items) => {
        setState({ ...state, isLoading: false, data: items });
      });
    }
    firsTime = false;
  }, []);

  if (state.isLoading === true) {
    return <PageLoading />;
  } else {
    const items = [];
    if (state.data) {
      for (const [index, product] of state.data.entries()) {
        items.push(
          <ul key={index} style={{ listStyle: "none" }}>
            <ProductForm product={product} />
          </ul>
        );
      }
      return <ProductListForm items={items} />;
    }
  }
};

export default ProductList;
