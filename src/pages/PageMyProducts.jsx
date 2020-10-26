import React from "react";
// Importar componentes
import NavBar from "../hooks/NavBar.jsx"

import MyProducts from "../hooks/Product/Components/MyProducts.jsx";

// Importar hoja de estilo

const PageMyProducts = () => (
    <div className="container-page">
        <NavBar />
        <MyProducts/>
    </div>
)

export default PageMyProducts