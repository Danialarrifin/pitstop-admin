import axios from 'axios';

import config from "constants/config";

// ----------------------------------------------------------------------

// Set config defaults when creating the instance
const axiosInstance = axios.create({
  // baseURL: 'https://api.rolexbarbershop.com/api/v1',
  baseURL:'http://localhost:3000/api/',
}); 

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;