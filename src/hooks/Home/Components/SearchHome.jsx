import React from "react";
import visibleImg from "../../../assets/images/visibleImg.png";
import Gravatar from "../../Gravatar.jsx";
import { Form, Image, Button } from "react-bootstrap";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { Link } from "react-router-dom";

import "./style/SearchBar.css";

const SearchBarForm = (props) => (
  <div className="Container-Search">
    <div className="sub-container">
      <Gravatar src={props.email} />
      <div className="Search-Form">
        <Form>
          <Form.Control
            type="text"
            placeholder="Escribe lo que quieres obtener"
            className="bar"
            onKeyPress={props.handleSubmit}
          />
        </Form>
      </div>
      <div>
        <Link to={props.url}>
          <Button className="button-history" variant="outline-light">
            <ReceiptIcon />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default SearchBarForm;
