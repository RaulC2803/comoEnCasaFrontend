import React from "react";
import BottomRightForm from "../Components/BottomRight.jsx";
import Resena from "../Components/Resena.jsx";

const BottomRight = (props) => {
  const items = [];
  for (const [index, value] of props.reviews.entries()) {
    items.push(
      <ul key={index}>
        <Resena name={value.comprador.name} comentary={value.comentary} />
      </ul>
    );
  }
  return <BottomRightForm items={items} />;
};

export default BottomRight;
