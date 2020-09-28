import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="">ComoEnCasa</Navbar.Brand>
    <Nav className="mr-auto"></Nav>
    <Button variant="outline-light">Login</Button>
  </Navbar>
);

export default NavBar;
