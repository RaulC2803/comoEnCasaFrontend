import React, { useState, useEffect } from "react";
import ShoppingHistory from "../hooks/Compras/Container/ShoppingHistory.jsx";
import api_Customer from "../services/Comprador.js";
import { useParams } from "react-router-dom";
import PageLoading from "./PageLoading.jsx";

import "./style/ShoppingHistoryPage.css";

const ShoppingHistoryPage = () => {
  const { id } = useParams();

  const initialState = {
    isLoading: true,
    error: null,
    data: null,
  };

  const [state, setState] = useState(initialState);

  const loadHistory = () => {
    api_Customer.customer.getHistory(id).then((items) => {
      setState({ ...state, isLoading: false, data: items });
    });
  };

  useEffect(() => {
    setState({ ...state, isLoading: true, error: null });
    loadHistory();
  }, []);

  if (state.isLoading) {
    return <PageLoading />;
  } else {
    if (state.data) {
      return (
        <div className="container-shopping-history">
          <ShoppingHistory items={state.data} />
        </div>
      );
    }
  }
};
export default ShoppingHistoryPage;
