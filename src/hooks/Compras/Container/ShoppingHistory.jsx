import React from "react";
import ShoppingHistoryItem from "../Components/ShoppingHistoryItem.jsx";
import ShoppingHistoryForm from "../Components/ShoppingHistory.jsx";

const ShoppingHistory = (props) => {
  const row_items = [];

  for (const [index, value] of props.items.entries()) {
    row_items.push(
      <ul key={index} styel={{ listStyle: "none" }}>
        <ShoppingHistoryItem item={value} />
      </ul>
    );
  }
  console.log(props.items);
  return <ShoppingHistoryForm items={row_items} />;
};

export default ShoppingHistory;
