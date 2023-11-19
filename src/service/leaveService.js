import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/api/leave/getAll");
};

const create = (data) => {
  console.log(data);
  return httpClient.post("/api/leave", data);
};

const get = (leaveId) => {
  return httpClient.get(`/api/leave/${leaveId}`);
};

const update = (data) => {
  return httpClient.put("/api/leave", data);
};

const remove = (leaveId) => {
  console.log(leaveId);
  return httpClient.delete(`/api/leave/${leaveId}`);
};

const exportedObject = {
  getAll,
  create,
  get,
  update,
  remove,
};
export default exportedObject;
