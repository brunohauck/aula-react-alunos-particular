import http from "./http-common";

const getAll = () => {
  return http.get("/users");
};

const get = id => {
  return http.get(`/users/${id}`);
};

const create = data => {
  return http.post("/users", data);
};

const login = data => {
  return http.post("https://startdev-backend-brunohauck677519.codeanyapp.com/usuario/autenticate", data);
};

const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};

const remove = id => {
  return http.delete(`/users/${id}`);
};



const HttpService = {
  getAll,
  get,
  login,
  create,
  update,
  remove
};

export default HttpService;