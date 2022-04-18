import axios from "axios";

export const axiosIpStack = axios.create({
  baseURL: "http://api.ipstack.com",
});

axiosIpStack.interceptors.request.use((config) => {
  config.params = {
    access_key: process.env.REACT_APP_IPSTACK_KEY,
  };
  return config;
});
