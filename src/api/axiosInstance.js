import axios from 'axios';

// Подставь актуальный токен сюда
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDgzMzc5NjksImV4cCI6MTc0ODM1MjM2OX0.aBYSvG66tPy1Qt0gHzaAjr6oBGIwJx3zRiE-ctdR_-o";

const axiosInstance = axios.create({
  baseURL: 'http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com',
// src/api/axiosInstance.js
import axios from "axios";

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
