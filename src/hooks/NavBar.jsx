import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style/NavBar.css";

const NavBar = () => (
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand>
      <Link to="/" className="landing">
        <h3>ComoEnCasa</h3>
      </Link>
    </Navbar.Brand>
    <Nav className="mr-auto"></Nav>
    <Link to="/login">
      <Button variant="outline-light">Login</Button>
    </Link>
  </Navbar>
);

export default NavBar;
