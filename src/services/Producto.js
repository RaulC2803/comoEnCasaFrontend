import callApi from "./Service";

const api = {
  product: {
    getProductList() {
      return callApi("/producto/listar");
    },
    getProduct(id) {
      return callApi(`/producto/obtener/${id}`);
    },
  },
};

export default api;
