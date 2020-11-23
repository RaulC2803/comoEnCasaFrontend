import React, { useState } from "react";
import { Form, Button, Col, Row, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom"

import "./style/RegisterProduct.css";

const RegisterProductForm = (props) => (
  <div className="container-register-Product">
    <div className="container-form-Product">
      <h3> Registrar Producto </h3>
      <hr></hr>

      <Form>

        <Form.Row>
          <Form.Group as={Col} controlId="validationCustomName">
            <Form.Label>Título del producto</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Ingresa el nombre del producto que vas a ofrecer."
              onChange={props.handleChange}
            />
          </Form.Group>
        </Form.Row>

        <hr></hr>
        <Form.Label>Categoría</Form.Label>
        <Form.Row>
          <select value="category" onChange={props.handleChange}>
            <option value="comida">Comida</option>
            <option value="manualidades">Manualidades</option>
            <option value="decoracion">Decoración</option>
            <option value="cudiadopersonal">Cuidado Personal</option>
            <option value="jardin">Jardín</option>
            <option value="bebida">Bebida</option>
          </select>
        </Form.Row>
        <hr></hr>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Label>Precio del producto</Form.Label>
            <Form.Control
              name="price"
              type="number"
              placeholder="Ingresa el precio."
              onChange={props.handleChange}
            />
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
            />
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
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="validationCustomName">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              name="tags"
              type="text"
              placeholder="Ingresa tags para el producto."
              onChange={props.handleChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group>
            <Form.File name="imagen" onChange={props.handleChange} id="exampleFormControlFile1" label="Example file input" />
          </Form.Group>
        </Form.Row>
        
        <br></br>

        <Form.Row>
          <Button onClick={props.handleSubmit} variant="dark" >
            Registrar
                </Button>
          <Link to={'/myproducts'}>
            <Button variant="dark" type="submit" >
              Cancelar
                </Button>
          </Link>

        </Form.Row>
      </Form>
    </div>
  </div>
)

export default RegisterProductForm;