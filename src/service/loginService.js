import httpClient from "../http-common";

const login = (data) => {
    console.log(data);
    return httpClient.post("/authenticate", data);
  };

  const exportedObject = {
    login
  };
  export default exportedObject;