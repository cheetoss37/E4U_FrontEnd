import axios from "axios";
import { AppConst } from "../constants";

//question
export const getQuestions = (data) =>
  axios.post(`${AppConst.API_URL}/question/list`, data);

export const searchQuestion = (data) =>
  axios.post(`${AppConst.API_URL}/question/search`, data);

export const getQuestionDetail = (data) =>
  axios.get(`${AppConst.API_URL}/question/detail/${data}`);

export const createQuestion = (data) =>
  axios.post(`${AppConst.API_URL}/question/create`, data);

export const updateQuestion = (data) =>
  axios.put(`${AppConst.API_URL}/question/update`, data);

export const deleteQuestion = (data) =>
  axios.post(`${AppConst.API_URL}/question/delete`, data);

//test
export const getTestsList = (
  data // admin
) => axios.post(`${AppConst.API_URL}/test/list`, data);

export const searchTest = (data) =>
  axios.post(`${AppConst.API_URL}/test/search`, data);

export const getDetail = (data) =>
  axios.get(`${AppConst.API_URL}/test/detail/${data}`);

export const getListTest = (
  data //user
) => axios.post(`${AppConst.API_URL}/test/exams`, data);

// export const publishTest = (data) =>
//   axios.put(`${AppConst.API_URL}/test/exams`, data);

export const createTest = (data) =>
  axios.post(`${AppConst.API_URL}/test/create`, data);

export const updateTest = (data) =>
  axios.put(`${AppConst.API_URL}/test/update`, data);

export const deleteTest = (data) =>
  axios.post(`${AppConst.API_URL}/test/delete`, data);

//result
export const getListResult = (data) =>
  axios.post(`${AppConst.API_URL}/result/list`, data);

export const getResultDetail = (data) =>
  axios.get(`${AppConst.API_URL}/result/${data}`);

export const postResult = (data) =>
  axios.post(`${AppConst.API_URL}/result/create`, data);

//user
export const getUser = (data) =>
  axios.post(`${AppConst.API_URL}/users/list`, data);

export const searchUser = (data) =>
  axios.post(`${AppConst.API_URL}/users/search`, data);

export const createUser = (data) =>
  axios.post(`${AppConst.API_URL}/users/create`, data);

export const updateUser = (data) =>
  axios.put(`${AppConst.API_URL}/users/update`, data);

export const deleteUser = (data) =>
  axios.post(`${AppConst.API_URL}/users/delete`, data);
