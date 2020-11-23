import callApi from "./Service";

const api_Customer = {
  customer: {
    registerCustomer(data) {
      return callApi("/comprador/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
    getCustomer(id) {
      console.log("buscando");
      return callApi(`/comprador/get/${id}`);
    },
    getHistory(id) {
      return callApi(`/comprador/factura/listar/${id}`);
    },
    addHistory(data, idc, idp) {
      return callApi(`/comprador/factura/registrar/${idc}/${idp}`, {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
  },
};

export default api_Customer;
