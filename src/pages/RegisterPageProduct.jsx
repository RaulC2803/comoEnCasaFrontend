
import React from "react";
// Importar componentes
import NavBar from "../hooks/NavBar.jsx"
import RegisterProduct from "../hooks/Product/Components/RegisterProduct.jsx";
// Importar hoja de estilo


const RegisterPageProduct = () => (
    <div className="container-page">
        <NavBar />
        <RegisterProduct />
    </div>
);

export default RegisterPageProduct;