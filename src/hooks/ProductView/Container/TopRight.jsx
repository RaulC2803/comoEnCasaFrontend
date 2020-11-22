import React from "react";
import TopRightForm from "../Components/TopRight.jsx";

const TopRight = (props) => {
  const seller = props.product.vendedor;
  return (
    <TopRightForm
      name={seller.name}
      address={seller.address}
      n_mobile={seller.n_mobile}
      email={seller.email}
    />
  );
};

export default TopRight;
