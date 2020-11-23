import React from "react";
import SearchBarForm from "../Components/SearchHome.jsx";
import api from "../../../services/Producto.js";

const SearchBar = (props) => {
  const url = `/historialcompras/${props.id}`;
  const handleSubmit = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      if (e.target.value != "") {
        props.handleSearchProduct(e.target.value);
      } else {
        props.cacheProductList();
      }
    }
  };
  return (
    <SearchBarForm url={url} handleSubmit={handleSubmit} email={props.email} />
  );
};
export default SearchBar;
