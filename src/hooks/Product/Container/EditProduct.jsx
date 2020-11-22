import React, { useState, useEffect } from "react";
import "../Components/style/EditProduct.css";
import EditProductForm from "../Components/EditProduct.jsx";
import ProductForm from "../Components/Product"
import api from "../../../services/Producto.js";
import { useParams } from 'react-router-dom'
import PageLoading from "../../../pages/PageLoading"

//const API = "https://comoencasa-289703.rj.r.appspot.com/producto/registrar{id}"
const EditProduct = () => {


    const { id } = useParams()

    const initialState = {
        isLoading: true,
        error: null,
        data: null,
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        api.product.getProduct(id).then((items) => {
            setState({ ...state, isLoading: false, data: items });
        });
    }, []);

    //console.log("hola")
    if (state.isLoading === true) {
        return (<PageLoading />);
    }
    else {
        if (state.data) {
            return (
                <EditProductForm product={state.data} />
            );
        }
    }
};

export default EditProduct