import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/api/getAllContact");
};

const create = (data) => {
  console.log(data);
  return httpClient.post("/api/contact", data);
};

const get = (contactId) => {
  return httpClient.get(`/getContact/${contactId}`);
};


const remove = (contactId) => {
  console.log(contactId);
  return httpClient.delete(`/api/deleteContact/${contactId}`);
};

const exportedObject = {
  getAll,
  create,
  get,
  remove,
};
export default exportedObject;
