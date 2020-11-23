import React, { useState } from "react";
import NavBarLogged from "../Components/NavBarLogged.jsx";
import NavBarNoLogged from "../Components/NavBarNoLogged.jsx";
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
  if (isLogged()) {
    return <NavBarLogged userName={props.userName} />;
  } else {
    return <NavBarNoLogged />;
  }
};

export default NavBarContainer;
