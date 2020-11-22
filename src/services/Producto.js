import callApi from "./Service";

const api = {
  product: {
    getProductList() {
      return callApi("/producto/listar");
    },
    getProduct(id) {
      return callApi(`/producto/obtener/${id}`);
    },
    getProductListBySeller(id) {
      return callApi(`/producto/obtener/vendedor/${id}`)
    },
  },
};

export default api;
