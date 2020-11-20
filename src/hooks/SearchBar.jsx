import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style/SearchBar.css";

const SearchBar = () => (
  <Navbar className="bg-light justify-content-between">
    <Form inline>
      <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  </Navbar>
);

export default SearchBar;
