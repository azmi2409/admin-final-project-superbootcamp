import axios from "axios";
const SERVER = "https://backend-final-beeleaf.herokuapp.com/api/v1/admin";

const axiosConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const loginRequest = async (user) => {
  const url = `${SERVER}/login`;
  const response = await axios.post(url, user);
  return {
    status: response.status,
    data: response.data,
  };
};

export const getAllProducts = async () => {
  const url = `${SERVER}/product/`;
  const response = await axios.get(url);
  return {
    status: response.status,
    data: response.data,
  };
};

export const getProductById = async (id) => {
  const url = `${SERVER}/product/${id}`;
  const response = await axios.get(url);
  return {
    status: response.status,
    data: response.data,
  };
};

export const postProduct = async (token, product) => {
  const url = `${SERVER}/product/`;
  const response = await axios.post(url, product, axiosConfig(token));
  console.log(response);
  return {
    status: response.status,
    data: response.data,
  };
};
