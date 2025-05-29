import axios from 'axios';





const axiosInstance = axios.create({
  baseURL: "http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (config.url?.endsWith("/authentication/sign-ip")) {
    return config;
  }
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
