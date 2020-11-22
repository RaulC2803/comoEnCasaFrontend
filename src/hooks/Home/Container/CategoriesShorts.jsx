import React from "react";
import CategoriesShortsForm from "../Components/CategoriesShorts.jsx";

const CategoriesShorts = (props) => {
  const handleClick = (e) => {
    if (e.target.id) {
      props.handleSearchProductbyCategorie(e.target.id);
    } else {
      props.cacheProductList();
    }
  };
  return <CategoriesShortsForm handleClick={handleClick} />;
};

export default CategoriesShorts;
