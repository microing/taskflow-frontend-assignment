import axios from "axios";

const api = axios.create({
  baseURL: "https://taskflow-backend-m09m.onrender.com/",
});

export default api;