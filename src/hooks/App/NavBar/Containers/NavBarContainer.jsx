import React from "react";
import NavBar from "../Components/NavBar.jsx";
import { useLocation } from "react-router-dom";

const NavBarContainer = () => {
  const locate = useLocation().pathname;
  const isLogged = () => {
    console.log(locate);
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
  return <NavBar isLogged={isLogged()} />;
};

export default NavBarContainer;
