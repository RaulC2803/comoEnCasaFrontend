import { call } from "file-loader";
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
      return callApi(`/producto/obtener/vendedor/${id}`);
    },
    searchProductByName(name) {
      return callApi(`/producto/buscar/${name}`);
    },
    searchProductByCategorie(name) {
      return callApi(`/producto/categoria/${name}`);
    },
    getReview(id) {
      return callApi(`/producto/resena/listar/${id}`);
    },
    getCantStars(id) {
      return callApi(`/producto/stars/${id}`);
    },
    deleteProduct(id) {
      return callApi(`/producto/eliminar/${id}`, {
        method: "DELETE",
      });
    },
    actualizarProduct(data, id) {
      return callApi(`/producto/actualizar/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
    },
  },
};
export default api;
