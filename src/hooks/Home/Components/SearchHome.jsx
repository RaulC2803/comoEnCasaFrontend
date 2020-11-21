import React from "react";
import visibleImg from "../../../assets/images/visibleImg.png";
import { Form, Image, Button } from "react-bootstrap";

import "./style/SearchBar.css";

const SearchBarForm = () => (
  <div className="Container-Search">
    <div className="sub-container">
      <Image src={visibleImg} roundedCircle />
      <div className="Search-Form">
        <Form>
          <Form.Control
            type="text"
            placeholder="Escribe lo que quieres obtener"
            className="bar"
          />
        </Form>
      </div>
    </div>
  </div>
);

export default SearchBarForm;
