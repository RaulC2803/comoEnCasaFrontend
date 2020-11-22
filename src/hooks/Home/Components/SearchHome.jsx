import React from "react";
import visibleImg from "../../../assets/images/visibleImg.png";
import Gravatar from "../../Gravatar.jsx";
import { Form, Image, Button } from "react-bootstrap";

import "./style/SearchBar.css";

const SearchBarForm = () => (
  <div className="Container-Search">
    <div className="sub-container">
      <Gravatar src={"raul.casanova.03@gmail.com"} />
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
