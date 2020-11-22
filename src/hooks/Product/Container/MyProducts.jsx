import React, { useEffect, useState } from "react";
import ProductForm from "../Components/Product"
import "../Components/style/MyProducts.css";
import MyProductsList from "../Components/MyProducts.jsx";
import PageLoading from "../../../pages/PageLoading.jsx";
import api from "../../../services/Producto.js";

const MyProducts = () => {
    const initialState = {
        isLoading: true,
        error: null,
        data: null
    };

    const [state, setState] = useState(initialState);

    const UserTest = 1

    useEffect(() => {
        api.product.getProductListBySeller(UserTest).then((items) => {
            setState({ ...state, isLoading: false, data: items });
        });
    }, []);

    if (state.isLoading === true) {
        return <PageLoading />;
    } else {
        const items = [];
        if (state.data) {
            for (const [index, product] of state.data.entries()) {
                items.push(
                    <ul key={index} style={{ listStyle: "none" }}>
                        <ProductForm product={product} />
                    </ul>
                );
            }
            return <MyProductsList items={items} />;
        }
    }
};

export default MyProducts;