import React from "react";
import { Navbar, Nav, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import DehazeTwoToneIcon from "@material-ui/icons/DehazeTwoTone";

import "./style/NavBar.css";

const NavBar = (props) => (
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand>
      <Link to="/" className="landing">
        <h3>ComoEnCasa</h3>
      </Link>
    </Navbar.Brand>
    <Nav className="mr-auto"></Nav>

    {(!props.isLogged && (
      <Link to="/login">
        <Button variant="outline-light">Login</Button>
      </Link>
    )) || (
      <div>
        <Link to="/">
          <Button variant="outline-light">{props.userName}</Button>
        </Link>
        <Link to="/historialcompras">
          <Button variant="outline-light">My History</Button>
        </Link>
      </div>
    )}
  </Navbar>
);

export default NavBar;
