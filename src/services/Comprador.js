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
      return callApi(`/comprador/get/${id}`);
    },
  },
};

export default api_Customer;
