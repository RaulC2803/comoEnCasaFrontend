import React from "react";
import NavBar from "../hooks/NavBar.jsx"
import ShoppingHistory from "../hooks/Compras/Components/ShoppingHistory"

const ShoppingHistoryPage = () => (
    <div className="container-page">
        <NavBar />
        <ShoppingHistory />
    </div>
);

export default ShoppingHistoryPage