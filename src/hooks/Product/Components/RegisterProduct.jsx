import React, { useState } from "react";
import { Form, Button, Col, Row, Dropdown, DropdownButton } from "react-bootstrap";

import "./style/RegisterProduct.css";

function Click() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={decrementCount}>Click to decrease by 1</button>
      <button onClick={incrementCount}>Click to increase by 1</button>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide number" : "Show number"}
      </button>
      {isVisible && (
        <input
          type="number"
          name="clicks"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
      )}
    </div>
  );
}

const RegisterProduct = (props) => (
  <div className="container-register">
  <div className="container-form">
    <h3> Registrar Producto </h3>
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Título del producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el nombre del producto que vas a ofrecer."
            onChange={props.handleNameChange}
          />
        </Form.Group>
      </Form.Row>

      {/*<Form.Row>*/}
      <DropdownButton variant="dark" id="dropdown-item-button" drop={'right'} title="Categoría">
        <Dropdown.ItemText>Elige una categoría</Dropdown.ItemText>

        {/*DUMMY* - implementar for loop*/}
        <Dropdown.Item as="button">Comida</Dropdown.Item>
        <Dropdown.Item as="button">Artesanía</Dropdown.Item>
        <Dropdown.Item as="button">Dices</Dropdown.Item>

      </DropdownButton>
      {/*</Form.Row>*/}
      <hr></hr>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPrice">
          <Form.Label>Precio del producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el precio."
            onChange={props.handlePriceChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group controlId="SelectCustom">
          <Form.Label>Stock Inicial</Form.Label>
          <Form.Control
            type="number"
            min="0"
            onChange={props.handleStockChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="FormGridDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Brevemente describe tu producto. "
            onChange={props.handleDescriptionChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group controlId="formGridUploader">
          <Form.Label>Imágenes</Form.Label>
          <Form.File
            id="custom-file"
            label="Sube una imagen de tu producto"
            custom
            onChange={props.handleImageChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Button variant="dark" type="submit" onClick={props.handleSubmit}>
          Registrar
                </Button>
        <Button variant="dark" type="submit">
          Cancelar
                </Button>
      </Form.Row>
    </Form>
  </div>
  </div>
)

export default RegisterProduct;