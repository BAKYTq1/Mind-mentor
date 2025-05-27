import axios from 'axios';

// Подставь актуальный токен сюда
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDgzMzc5NjksImV4cCI6MTc0ODM1MjM2OX0.aBYSvG66tPy1Qt0gHzaAjr6oBGIwJx3zRiE-ctdR_-o";

const axiosInstance = axios.create({
  baseURL: 'http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com',
});

// Добавляем токен в заголовки каждого запроса
axiosInstance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    //   console.log('Токен добавлен в заголовок');
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
