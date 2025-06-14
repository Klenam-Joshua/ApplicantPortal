import axios from "axios";
// eslint-disable-next-line no-undef
const { VITE_API_BASEURL } = import.meta.env;

export const api = axios.create({
  baseURL: VITE_API_BASEURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*",
    Authorization: `Bearer`,
  },
});
