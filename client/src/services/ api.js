import axios from "axios";

const API = "http://localhost:5000";

export const getStudents = () =>
  axios.get(API + "/students/all");

export const addStudent = (data) =>
  axios.post(API + "/students/add", data);