import axios from "axios";
import { AppConst } from "../constants";

//question
export const getQuestions = (data) =>
  axios.get(`${AppConst.API_URL}/question/list`, { params: data });

export const searchQuestion = (data) =>
  axios.post(`${AppConst.API_URL}/question/search`, data);

export const getQuestionDetail = (data) =>
  axios.get(`${AppConst.API_URL}/question/detail/${data}`);

export const createQuestion = (data) =>
  axios.post(`${AppConst.API_URL}/question/create`, data);

export const updateQuestion = (data) =>
  axios.put(`${AppConst.API_URL}/question/update`, data);

export const deleteQuestion = (data) =>
  axios.delete(`${AppConst.API_URL}/question/delete`, data);

//test
export const getTestsList = (data) =>
  axios.delete(`${AppConst.API_URL}/test/list`, data);

export const searchTest = (data) =>
  axios.post(`${AppConst.API_URL}/test/search`, data);

export const getDetail = (data) =>
  axios.get(`${AppConst.API_URL}/test/detail${data}`);

export const getListPublic = (data) =>
  axios.get(`${AppConst.API_URL}/test/exams`, { params: data });

export const publishTest = (data) =>
  axios.put(`${AppConst.API_URL}/test/exams`, data);

export const createTest = (data) =>
  axios.post(`${AppConst.API_URL}/test/create`, data);

export const updateTest = (data) =>
  axios.put(`${AppConst.API_URL}/test/update`, data);

export const deleteTest = (data) =>
  axios.delete(`${AppConst.API_URL}/test/delete`, data);

//result
export const getListResult = (data) =>
  axios.get(`${AppConst.API_URL}/result/list`, data);

export const getResultDetail = (data) =>
  axios.get(`${AppConst.API_URL}/result/${data}`);

export const postResult = (data) => axios.post(`${AppConst.API_URL}`, data);

//user
export const getUser = (data) =>
  axios.get(`${AppConst.API_URL}/user/list`, { params: data });

export const searchUser = (data) =>
  axios.post(`${AppConst.API_URL}/user/search`, data);

export const createUser = (date) =>
  axios.post(`${AppConst.API_URL}/user/create`, data);

export const updateUser = (data) =>
  axios.put(`${AppConst.API_URL}/user/update`, data);

export const deleteUser = (data) =>
  axios.delete(`${AppConst.API_URL}/user/delete`, data);