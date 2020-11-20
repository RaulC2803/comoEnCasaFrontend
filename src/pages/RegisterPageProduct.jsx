
import React from "react";
//import NavBar from "../hooks/App/Containers/NavBarContainer.jsx"
import RegisterProduct from "../hooks/Product/Container/RegisterProduct.jsx";
// Importar hoja de estilo
import "./style/RegisterPage.css";

const RegisterPageProduct = () => (
    <div className="container-page-RegisterPage">
        {/*<NavBar />*/}
        <RegisterProduct />
    </div>
);

export default RegisterPageProduct;