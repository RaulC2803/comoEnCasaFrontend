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
    cargarImagen(data, id) {
      return callApi(`/producto/upload_imagen_producto/${id}`, {
        method: "POST",
        body: JSON.stringify(data),
      });
    }
  },
};

export default api;
