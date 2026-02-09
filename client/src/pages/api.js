import axios from "axios";

const API = "http://localhost:5000";

export const getStudents = () => axios.get(API + "/students/all");

export const addStudent = (data) =>
  axios.post(API + "/students/add", data);

export const deleteStudent = (id) =>
  axios.delete(API + "/students/delete/" + id);

export const updateStudent = (id, data) =>
  axios.put(API + "/students/update/" + id, data);

export const getOneStudent = (id) =>
  axios.get(API + "/students/" + id);