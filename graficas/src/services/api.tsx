import axios from "axios";

const API_URL = "http://localhost:5050/api";

export const fetchAvgValueByCategory = async () => {
  const response = await axios.get(`${API_URL}/avg-value-by-category`);
  return response.data;
};

export const fetchCountProductsByBrand = async () => {
  const response = await axios.get(`${API_URL}/count-products-by-brand`);
  return response.data;
};