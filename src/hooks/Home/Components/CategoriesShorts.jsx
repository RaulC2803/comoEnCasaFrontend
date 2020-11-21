import React from "react";
import { Button, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import PanToolIcon from "@material-ui/icons/PanTool";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import BathtubIcon from "@material-ui/icons/Bathtub";
import StarRateTwoToneIcon from "@material-ui/icons/StarRateTwoTone";
import LocalFloristTwoToneIcon from "@material-ui/icons/LocalFloristTwoTone";
import RestaurantTwoToneIcon from "@material-ui/icons/RestaurantTwoTone";

import "./style/CategoriesShorts.css";

const CategoriesShortsForm = () => {
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
      Cocina
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
            <Button>
              <FastfoodIcon />
            </Button>
          </OverlayTrigger>

          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={render2}
          >
            <Button>
              <PanToolIcon />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={render3}
          >
            <Button>
              <HomeWorkIcon />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={render4}
          >
            <Button>
              <BathtubIcon />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={render5}
          >
            <Button>
              <LocalFloristTwoToneIcon />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={render6}
          >
            <Button>
              <RestaurantTwoToneIcon />
            </Button>
          </OverlayTrigger>
        </div>
      </Row>
    </div>
  );
};
export default CategoriesShortsForm;
