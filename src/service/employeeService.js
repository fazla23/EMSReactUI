import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/api/employee/getAll");
};

const create = (data) => {
  console.log(data);
  return httpClient.post("/api/employee", data);
};

const get = (employeeId) => {
  return httpClient.get(`/api/employee/${employeeId}`);
};

const update = (data) => {
  return httpClient.put("/api/employee", data);
};

const remove = (employeeId) => {
  console.log(employeeId);
  return httpClient.delete(`/api/employee/${employeeId}`);
};

const exportedObject = {
  getAll,
  create,
  get,
  update,
  remove,
};
export default exportedObject;
