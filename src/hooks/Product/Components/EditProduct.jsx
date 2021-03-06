import React, { useState } from "react";
import { Link } from "react-router-dom"
import { Form, Button, Dropdown, Col, Row, DropdownButton } from "react-bootstrap";
import "./style/EditProduct.css"

const EditProductForm = (props) => (
    <div className="container-Edit-Product">
        <div className="container-form-EditProduct">
            <h3>Editar Producto</h3>
            <Form>

                <Form.Row>
                    <Form.Group as={Col} controlId="validationCustomName">
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder={props.product.name}
                            onChange={props.handleChange}
                        />
                    </Form.Group>
                </Form.Row>

                <hr></hr>
                {/*<Form.Row>*/}
                <DropdownButton variant="dark" id="dropdown-item-button" drop={'right'} title="Categoría">
                    <Dropdown.ItemText>Cambia la categoría del producto</Dropdown.ItemText>

                    {/*DUMMY* - implementar for loop*/}
                    <Dropdown.Item as="button">Comida</Dropdown.Item>
                    <Dropdown.Item as="button">Artesanía</Dropdown.Item>
                    <Dropdown.Item as="button">Jardin</Dropdown.Item>

                </DropdownButton>
                {/*</Form.Row>*/}
                <hr></hr>

                <Form.Row>
                    <Form.Group as={Col} controlId="validationCustomName">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            name="price"
                            type="text"
                            placeholder={props.product.price}
                            onChange={props.handleChange}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group controlId="SelectCustom">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                            name="stock"
                            type="number"
                            placeholder={props.product.stock}
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
                            placeholder={props.product.description}
                            onChange={props.handleChange}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group controlId="formGridUploader">
                        <Form.Label>Imagen</Form.Label>
                        <Form.File
                            name="images"
                            id="custom-file"
                            label="Sube una imagen de tu producto"
                            custom
                            onChange={props.handleChange}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>

                    <Link to={"/myProducts"}>
                        <Button variant="dark" onClick={props.handleSubmit}>
                            Guardar cambios
                </Button>
                    </Link>

                    <Button variant="dark" onClick={props.deleteProduct}>
                        Eliminar
                     </Button>

                    <Link to={"/myProducts"}>
                        <Button variant="dark" >
                            Cancelar
                </Button>
                    </Link>
                </Form.Row>

            </Form>

        </div>
    </div>
)

export default EditProductForm;