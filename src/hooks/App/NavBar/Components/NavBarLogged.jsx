import React, { useState } from "react";
import { Navbar, Nav, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import DehazeTwoToneIcon from "@material-ui/icons/DehazeTwoTone";

import "./style/NavBar.css";

const NavBarLogged = (props) => (
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand>
      <Link to="/home" className="landing">
        <h3>ComoEnCasa</h3>
      </Link>
    </Navbar.Brand>
    <Nav className="mr-auto"></Nav>
    <Nav>
      <Link to="/land">
        <Button variant="outline-light">Cerrar Sesión</Button>
      </Link>
    </Nav>
  </Navbar>
);
export default NavBarLogged;
