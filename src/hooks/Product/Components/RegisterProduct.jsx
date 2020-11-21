import React, { useState } from "react";
import { Form, Button, Col, Row, Dropdown, DropdownButton } from "react-bootstrap";

import "./style/RegisterProduct.css";

const RegisterProductForm = (props) => (
  <div className="container-register-Product">
  <div className="container-form-Product">
    <h3> Registrar Producto </h3>
    <Form noValidate validated={props.validated}>
      
      <Form.Row>
        <Form.Group as={Col} controlId="validationCustomName">
          <Form.Label>Título del producto</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Ingresa el nombre del producto que vas a ofrecer."
            onChange={props.handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
          * {props.formErrors.name}
        </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <hr></hr>
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
            name="price"
            type="text"
            placeholder="Ingresa el precio."
            onChange={props.handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
          * {props.formErrors.price}
        </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group controlId="SelectCustom">
          <Form.Label>Stock Inicial</Form.Label>
          <Form.Control
            name="stock"
            type="number"
            min="0"
            onChange={props.handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
          * {props.formErrors.stock}
        </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="FormGridDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            rows={3}
            placeholder="Brevemente describe tu producto. "
            onChange={props.handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
          * {props.formErrors.description}
        </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group controlId="formGridUploader">
          <Form.Label>Imágenes</Form.Label>
          <Form.File
            name="images"
            id="custom-file"
            label="Sube una imagen de tu producto"
            custom
            onChange={props.handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
          * {props.formErrors.images}
        </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Button variant="dark" type="submit" onClick={props.handleSubmitLog}>
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

export default RegisterProductForm;