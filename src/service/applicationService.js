import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/api/application/getAll");
};

const getAllJobs = () => {
  return httpClient.get("/api/application/jobList");
};

const create = (data) => {
  console.log(data);
  return httpClient.post("/api/application", data);
};

const get = (applicationId) => {
  return httpClient.get(`/api/application/${applicationId}`);
};

const update = (data) => {
  return httpClient.put("/api/application", data);
};

const remove = (applicationId) => {
  console.log(applicationId);
  return httpClient.delete(`/api/application/${applicationId}`);
};

const exportedObject = {
  getAll,
  getAllJobs,
  create,
  get,
  update,
  remove,
};
export default exportedObject;
