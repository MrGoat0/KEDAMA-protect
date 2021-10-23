const callApi = async (url, reqOptions = {}) => {
  reqOptions.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    authorization: "Bearer " + localStorage.getItem("token"),
  };
  const response = await fetch("http://localhost:3001/api" + url, reqOptions);
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return callApi("/products/all");
    },
    create(reqOptions) {
      return callApi("/products/", reqOptions);
    },
    update(id, reqOptions) {
      return callApi("/products/" + id, reqOptions);
    },

    delete(id, reqOptions) {
      return callApi("/products/" + id, reqOptions);
    },

    info() {
      return callApi("/products/info");
    },
    slice(page) {
      return callApi("/products/slice/" + page);
    },
    filter(search) {
      return callApi("/products/filter/" + search);
    },
  },
  users: {
    getUser() {
      return callApi("/users/");
    },
    validateRole() {
      return callApi("/users/roles");
    },
    getAllUsers() {
      return callApi("/users/all");
    },
    getByEmail(email) {
      return callApi("/users/search/" + email);
    },
    updateUser(reqOptions) {
      return callApi("/users", reqOptions);
    },
    getByID(mongooseID) {
      return callApi("/users/sellerInfo/" + mongooseID);
    },
  },
  sales: {
    list() {
      return callApi("/sales/app");
    }, //reqOptions
    create(sale) {
      return callApi("/sales/", { method: "POST", body: JSON.stringify(sale) }); //{method: POST, body: JSON.stringify}
    },
    update(id, reqOptions) {
      return callApi("/sales/" + id, reqOptions);
    },
  },
};

export default api;
