import axios from "axios";

const api = axios.create({
  baseURL: "https://book-store-bkc3.onrender.com/api/",
});

export default api;
