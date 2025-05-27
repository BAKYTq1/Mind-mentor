// src/api/loginAdmin.js
import axiosInstance from "./axiosInstance";

export const loginAdmin = async ({ email, password }) => {
  try {
    const response = await axiosInstance.post("/api/authentication/sign-ip", {
      email,
      password,
    });

    // Ответ: { id, token, email, role }
    const { token, id, role } = response.data;
    localStorage.setItem("token", token);
    // При необходимости можно сохранить и другие поля:
    // localStorage.setItem("userId", id);
    // localStorage.setItem("role", role);

    return response.data;
  } catch (error) {
    // Выведем тело ответа, чтобы было понятнее, почему 401/другая ошибка
    console.error(
      "Ошибка авторизации:",
      error.response?.status,
      error.response?.data || error.message
    );
    throw error;
  }
};
