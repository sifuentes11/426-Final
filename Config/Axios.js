import axios from "axios";
import {getToken} from "./Token";

export const baseURL = 'http://mrwalters.com:31000';  //localhost:3000

export const getAxiosInstance = function (middlePath = '') {
  return axios.create({
    headers: {Authorization: `Bearer ${getToken()}`},
    baseURL: `${baseURL}${middlePath}`
  });
};
