import TopLeftForm from "../Components/Topleft.jsx";
import React from "react";

const TopLeft = (props) => {
  console.log(props.product);
  return (
    <TopLeftForm
      name={props.product.name}
      nameSeller={props.product.nameVendedor}
      price={props.product.price}
      description={props.product.description}
    />
  );
};
export default TopLeft;
