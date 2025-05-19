import axios from 'axios';

// Подставь актуальный токен сюда
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDc2NTM1NTYsImV4cCI6MTc0NzY2Nzk1Nn0.2W_6hFr1p2h-f6IjZiQYqGt4vh4nSGrZnH88VtgNQwE";

const axiosInstance = axios.create({
  baseURL: 'http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com/api',
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
