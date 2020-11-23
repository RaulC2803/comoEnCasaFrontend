import callApi from "./Service";

const api = {
  seller: {
    registerSeller(data) {
      return callApi("/vendedor/registrar", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
    registerProduct(data, id) {
      return callApi(`/vendedor/producto/registrar/${id}`, {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
  },
};

export default api;
