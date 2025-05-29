import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Эгер логин API'сиң болсо, туура URLди жаз
    if (config.url?.endsWith("/authentication/sign-in")) {
      return config;
    }
    
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
