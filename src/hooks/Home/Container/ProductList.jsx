import React from "react";
import ProductForm from "../Components/Product.jsx";
import ProductListForm from "../Components/ProductList.jsx";

const ProductList = (props) => {
  const items = [];
  for (const [index, product] of props.data.entries()) {
    items.push(
      <ul key={index} style={{ listStyle: "none" }}>
        <ProductForm product={product} />
      </ul>
    );
  }
  return <ProductListForm items={items} />;
};

export default ProductList;
