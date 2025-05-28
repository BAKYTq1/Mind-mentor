import axios from 'axios';

// Подставь актуальный токен сюда
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDg0MTY0MDIsImV4cCI6MTc0ODQzMDgwMn0.jMmUsxpcelCOKKr4s0N5orgPKcIArWI3OtY6gatnn8o";
const axiosInstance = axios.create({
  baseURL: 'http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com/api',
});

// Добавляем токен в заголовки каждого запроса
axiosInstance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
