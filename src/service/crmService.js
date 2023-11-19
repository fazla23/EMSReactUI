import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/api/getCRMList");
};

const create = (data) => {
  console.log(data);
  return httpClient.post("/api/addCRM", data);
};

const get = (applicationId) => {
  return httpClient.get(`/api/getCRM/${applicationId}`);
};

const update = (data) => {
  return httpClient.put("/api/editCRM", data);
};

const remove = (applicationId) => {
  console.log(applicationId);
  return httpClient.delete(`/api/deleteCRM/${applicationId}`);
};

const exportedObject = {
  getAll,
  create,
  get,
  update,
  remove,
};
export default exportedObject;
