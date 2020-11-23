import React, { useState, useEffect } from "react";
import "../Components/style/EditProduct.css";
import EditProductForm from "../Components/EditProduct.jsx";
import ProductForm from "../Components/Product"
import api from "../../../services/Producto.js";
import { useParams, Redirect } from 'react-router-dom'
import PageLoading from "../../../pages/PageLoading"

//const API = "https://comoencasa-289703.rj.r.appspot.com/producto/registrar{id}"
const EditProduct = () => {


    const { id } = useParams()

    const initialState = {
        isLoading: true,
        error: null,
        data: null,
        direccion: null
    };

    const [state, setState] = useState(initialState);

    const [product, setProduct] = useState({
        name: "",
        categoria: "comida",
        price: "",
        description: "",
        imagen: "",
        tags: "",
        stock: ""
    });

    const [validated, setValidated] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        switch (name) {
            case "name":
                setProduct({ ...product, name: value });
                console.log(value)
                break;
            case "category":
                setProduct({ ...product, categoria: value });
                console.log(value)
                break;
            case "price":
                setProduct({ ...product, price: value });
                console.log(value)
                break;
            case "description":
                setProduct({ ...product, description: value });
                console.log(value)
                break;

            case "imagen":
                files = event.target.files[0];
                break;

            case "tags":
                setProduct({ ...product, tags: value });
                console.log(value)
                break;
            case "stock":
                setProduct({ ...product, stock: value });
                console.log(value)
                break;
            default:
                break;
        }
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            event.preventDefault();
            setValidated(false);
        } else {
            setValidated(true);
        }
    };

    const handleSubmit = async (event) => {
        console.log(product)
        setState({ ...state, isLoading: true, error: null });
        try {
            console.log("handlesubmit")
            api.product.actualizarProduct(product, id)
            setState({ ...state, isLoading: false, data: res });
        } catch (error) {
            setState({ ...state, isLoading: false, error: error });
            console.log(state.error)
        }
    };



    useEffect(() => {
        api.product.getProduct(id).then((items) => {
            setState({ ...state, isLoading: false, data: items });
        });
    }, []);

    const deleteProduct = () => {
        console.log(id)
        setState({ ...state, isLoading: true, error: null });

        api.product.deleteProduct(id).then(items => {
            setState({ ...state, isLoading: false, direccion: items });
        })
    }

    //console.log("hola")
    if (state.isLoading === true) {
        return (<PageLoading />);
    }
    else {
        if (state.direccion) {
            return <Redirect to="/myProducts" />
        }
        else {
            if (state.data) {
                return (
                    <EditProductForm
                        product={state.data}
                        deleteProduct={deleteProduct}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                    />

                );
            }
        }
    }
};

export default EditProduct