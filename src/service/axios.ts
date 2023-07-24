import axios from "axios";

const url = "http://localhost:8080";
export const axiosApi = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
