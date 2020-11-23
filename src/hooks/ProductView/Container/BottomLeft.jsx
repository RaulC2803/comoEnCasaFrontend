import React, { useState } from "react";
import BottomLeftForm from "../Components/BottomLeft.jsx";
import PageLoading from "../../../pages/PageLoading.jsx";
import api from "../../../services/Comprador.js";

const BottomLeft = (props) => {
  const [state, setState] = useState({
    isLoadding: false,
    error: null,
    data: null,
  });

  const [canasta, setCanasta] = useState({
    subTotal: 0,
    total: 0,
    cantidad: 0,
  });

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setCanasta({
      cantidad: e.target.value,
      subTotal: props.product.price,
      total: e.target.value * props.product.price,
    });
  };
  const handleSubmit = () => {
    setState({ ...state, isLoadding: true });
    api.customer
      .addHistory(canasta, props.idc, props.product.idProducto)
      .then((items) => {
        setState({ ...state, isLoadding: false, data: items });
      });
  };

  let average =
    (props.stars[0] * 0 +
      props.stars[1] * 1 +
      props.stars[2] * 2 +
      props.stars[3] * 3 +
      props.stars[4] * 4 +
      props.stars[5] * 5) /
    props.stars[6];
  if (!average) {
    average = 0;
  }
  if (state.isLoadding) {
    return <PageLoading />;
  } else {
    return (
      <BottomLeftForm
        star0={(props.stars[0] / props.stars[6]) * 100}
        star1={(props.stars[1] / props.stars[6]) * 100}
        star2={(props.stars[2] / props.stars[6]) * 100}
        star3={(props.stars[3] / props.stars[6]) * 100}
        star4={(props.stars[4] / props.stars[6]) * 100}
        star5={(props.stars[5] / props.stars[6]) * 100}
        average={average}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
      />
    );
  }
};

export default BottomLeft;
