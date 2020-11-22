import React from "react";
import { Button, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import PanToolIcon from "@material-ui/icons/PanTool";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import BathtubIcon from "@material-ui/icons/Bathtub";
import StarRateTwoToneIcon from "@material-ui/icons/StarRateTwoTone";
import LocalFloristTwoToneIcon from "@material-ui/icons/LocalFloristTwoTone";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

import "./style/CategoriesShorts.css";

const CategoriesShortsForm = (props) => {
  const render1 = (props) => (
    <Tooltip id="button-Tooltip" {...props}>
      Comida
    </Tooltip>
  );
  const render2 = (props) => (
    <Tooltip id="button-Tooltip" {...props}>
      Manualidades
    </Tooltip>
  );
  const render3 = (props) => (
    <Tooltip id="button-Tooltip" {...props}>
      Decoración
    </Tooltip>
  );
  const render4 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Cuidado Personal
    </Tooltip>
  );
  const render5 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Jardín
    </Tooltip>
  );
  const render6 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Bebida
    </Tooltip>
  );

  return (
    <div className="container-categories">
      <Row>
        <p className="subtitle">
          <StarRateTwoToneIcon />
          <strong>Búsqueda por Categorias</strong>
        </p>
      </Row>
      <Row>
        <div className="buttons-categories">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={render1}
          >
            <Button onClick={props.handleClick} id={"Comida"}>
              <FastfoodIcon onClick={props.handleClick} id={"Comida"} />
            </Button>
          </OverlayTrigger>

          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={render2}
          >
            <Button id={"Manualidades"} onClick={props.handleClick}>
              <PanToolIcon id={"Manualidades"} onClick={props.handleClick} />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={render3}
          >
            <Button id={"Decoracion"} onClick={props.handleClick}>
              <HomeWorkIcon id={"Decoracion"} onClick={props.handleClick} />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={render4}
          >
            <Button id={"CuidadoPersonal"} onClick={props.handleClick}>
              <BathtubIcon id={"CuidadoPersonal"} onClick={props.handleClick} />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={render5}
          >
            <Button id={"Jardin"} onClick={props.handleClick}>
              <LocalFloristTwoToneIcon
                id={"Jardin"}
                onClick={props.handleClick}
              />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={render6}
          >
            <Button id={"Bebida"} onClick={props.handleClick}>
              <FreeBreakfastIcon id={"Bebida"} onClick={props.handleClick} />
            </Button>
          </OverlayTrigger>
        </div>
      </Row>
    </div>
  );
};
export default CategoriesShortsForm;
