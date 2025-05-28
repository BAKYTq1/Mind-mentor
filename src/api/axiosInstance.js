import axios from 'axios';

// Создаём экземпляр axios
const axiosInstance = axios.create({
  baseURL: "http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

// Интерцептор: добавляем токен к каждому запросу, кроме sign-in
axiosInstance.interceptors.request.use((config) => {
  // Если это запрос на авторизацию — не добавляем токен
  if (config.url?.endsWith("/authentication/sign-in")) {
    return config;
  }

  // Берём токен из localStorage
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
