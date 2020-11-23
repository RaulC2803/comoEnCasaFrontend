import React from "react";
import ProductForm from "../Components/Product.jsx";
import ProductListForm from "../Components/ProductList.jsx";

const ProductList = (props) => {
  const items = [];
  props.data.forEach(function (product, index) {
    items.push(
      <ul key={index} style={{ listStyle: "none" }}>
        <ProductForm product={product} idc={props.idc} />
      </ul>
    );
  });
  return <ProductListForm items={items} />;
};

export default ProductList;
