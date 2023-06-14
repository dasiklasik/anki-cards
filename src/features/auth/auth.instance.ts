import axios from "axios";

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL + "auth/",
  withCredentials: true,
});
