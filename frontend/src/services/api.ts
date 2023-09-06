import axios from "axios";

export const api = axios.create({
  baseURL: "https://shop-cars-deploy-api.onrender.com",
  timeout: 5000,
});

export const fipeApi = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 5000,
});
