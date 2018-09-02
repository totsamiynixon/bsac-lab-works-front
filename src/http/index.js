import axios from "axios";
//TODO:Think about config placement
const config = require(`../config/config.${process.env.NODE_ENV}`).default;
export const registerHttp = () => {
  console.log(config);
  axios.defaults.baseURL = config.apiUrl;
};
