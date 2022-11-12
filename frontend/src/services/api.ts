import axios from "axios";

const api = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: 'http://localhost:3030',
})

export default api;
