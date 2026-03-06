import axios from "axios";

const API_URL = "http://localhost:5050/api";

export const fetchCountProducts = async () => {
  const response = await axios.get(`${API_URL}/count-products`);
  return response.data;
};

export const fetchSumValueByProductType = async () => {
  const response = await axios.get(`${API_URL}/sum-value-by-productType`);
  return response.data;
};

export const fetchAvgValueByCategory = async () => {
  const response = await axios.get(`${API_URL}/avg-value-by-category`);
  return response.data;
};
