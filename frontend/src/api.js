import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // backend URL (backend listens on 5001)
  withCredentials: true,
});

export default api;
