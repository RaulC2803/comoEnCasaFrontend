import React from "react";
import RegisterPageCustomer from "../pages/RegisterPageCustomer.jsx";
import { Button } from "react-bootstrap";
import SendIcon from "@material-ui/icons/Send";
import { Link, useRouteMatch } from "react-router-dom";

import "./style/Register.css";

const Register = () => (
  <div>
    <div className="Form-Usuario">
      <h4>Comenzar como Vendedor</h4>
      <p>
        No guardes tu talento solo para ti!. Empieza a comercializar tus
        productos con los demás, para que vean tu talento y calidad. Todos
        ganamos!
      </p>
      <Button variant="dark">
        <Link to="/vendedor" className="button-register">
          ÚNETE <SendIcon />
        </Link>
      </Button>
    </div>
    <div className="Form-Usuario">
      <h4>Comenzar como Comprador</h4>
      <p>
        Encuentra todo lo que puedas imaginar dentro del mundo de hecho con las
        propias manos de las personas. Recibirás un trato amigable de los
        vendedores, no esperarás mucho para que tu pedido llegue, y pagarás el
        precio justo.
      </p>
      <Link to="/comprador" className="button-register">
        <Button variant="dark">
          ÚNETE <SendIcon />
        </Button>
      </Link>
    </div>
  </div>
);

export default Register;
