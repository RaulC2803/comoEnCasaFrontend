import React, { useState } from "react";
import NavBar from "../Components/NavBar.jsx";
import { useLocation } from "react-router-dom";

const NavBarContainer = (props) => {
  const locate = useLocation().pathname;
  const isLogged = () => {
    if (
      locate != "/login" &&
      locate != "/comprador" &&
      locate != "/vendedor" &&
      locate != "/land"
    ) {
      return true;
    } else {
      return false;
    }
  };
  return <NavBar isLogged={isLogged()} userName={props.userName} />;
};

export default NavBarContainer;
