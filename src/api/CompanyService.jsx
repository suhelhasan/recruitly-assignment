import axios from "axios";

const API_URL = "https://api.recruitly.io/api/company";
const API_KEY = "HIRE840770DDB2F381CA41BA84AA6A9ABE68B0EE";

export const getCompanies = async () => {
  return axios.get(`${API_URL}/list/?apiKey=${API_KEY}`);
};

export const getCompany = async (id) => {
  return axios.get(`${API_URL}/${id}/?apiKey=${API_KEY}`);
};

export const addCompany = async (data) => {
  return axios.post(`${API_URL}/?apiKey=${API_KEY}`, data);
};

export const updateCompany = async (data) => {
  return axios.post(`${API_URL}/?apiKey=${API_KEY}`, data);
};
