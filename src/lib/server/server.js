import axios from "axios";
const SERVER = "http://localhost:8080/api/v1/admin";

export const loginRequest = async (user) => {
  const url = `${SERVER}/login`;
  const response = await axios.post(url, user);
  console.log(response);
  return response.data;
};
