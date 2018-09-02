import axios from "axios";
//TODO:Think about config placement
import AppConfig from "../config";

export const registerHttp = () => {
  axios.defaults.baseURL = AppConfig.apiUrl;
};
