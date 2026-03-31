import axios from "axios";

const api = axios.create({
  baseURL: "/api", // tu backend
});

// Middleware: antes de cada request, agregar el token si existe
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
