import axios from "axios";
export const SERVER =
  "https://backend-final-beeleaf.herokuapp.com/api/v1/admin";

const axiosConfig = (token, cb = () => {}) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    onUploadProgress: cb,
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

export const uploadImage = async (token, image, cb) => {
  const url = `${SERVER}/upload`;
  const response = await axios.post(url, image, axiosConfig(token, cb));
  return {
    status: response.status,
    data: response.data,
  };
};
