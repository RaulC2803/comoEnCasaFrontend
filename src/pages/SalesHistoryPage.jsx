import React from 'react'
import NavBar from "../hooks/NavBar"
import SalesHistory from "../hooks/Ventas/Components/SalesHistory"

const SalesHistoryPage = () => (
    <div className="container-page">
        <NavBar />
        <SalesHistory />
    </div>
)

export default SalesHistoryPage