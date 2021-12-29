import axios from "axios";
import { AppConst } from "../constants";

export const login = (data) =>
  axios.post(`${AppConst.API_URL}/auth/login`, data);

export const register = (data) =>
  axios.post(`${AppConst.API_URL}/auth/register`, data);
