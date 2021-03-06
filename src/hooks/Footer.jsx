import React from "react";
import { Row, Col } from "react-bootstrap";
import RoomIcon from "@material-ui/icons/Room";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

import "./style/Footer.css";

const Footer = () => (
  <footer className="footer-style">
    <Row className="justify-content-md-center">
      <Col>
        <Row>
          <Col>
            <p>
              <RoomIcon fontSize="large" className="Iconos" />
              Calle Los Nogales 326 San Isidro
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <PhoneRoundedIcon fontSize="large" className="Iconos" /> +51 965
              460 180
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <EmailRoundedIcon fontSize="large" className="Iconos" />
              hackberry@gmail.com
            </p>
          </Col>
        </Row>
      </Col>

      <Col>
        <Row>
          <h3>Sobre la compañía</h3>
        </Row>
        <Row>
          <p>
            Compañía creada en Lima, Perú a mediados del 2020 dentro de la
            crisis mundial que generó la pandemia.
          </p>
        </Row>
        <Row>
          <FacebookIcon className="Iconos" />
          <TwitterIcon className="Iconos" />
          <GitHubIcon className="Iconos" />
          <small>&copy; Copyright 2020, HackBerry Corporation</small>
        </Row>
      </Col>
    </Row>
  </footer>
);

export default Footer;
