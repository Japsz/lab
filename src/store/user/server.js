import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8081'
})

export const getLogin = async obj => await API.post('/user/login', obj);
export const checkToken = async obj => await API.post('/user/checkToken', obj);
export const getLogout = async obj => await API.post('/user/logout', obj);
