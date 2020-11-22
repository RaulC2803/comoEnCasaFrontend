import TopLeftForm from "../Components/Topleft.jsx";
import React from "react";

const TopLeft = (props) => (
  <TopLeftForm
    name={props.product.name}
    nameSeller={props.product.vendedor.name}
    price={props.product.price}
    description={props.product.description}
  />
);

export default TopLeft;
