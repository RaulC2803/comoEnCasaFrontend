import callApi from "./Service";

const api = {
  customer: {
    registerCustomer(data) {
      return callApi("/comprador/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
  },
};

export default api;
