import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8081'
})

export const addAct = async obj => await API.post('/acts/add', obj);
export const addActLike = async obj => await API.post('/acts/addAct', obj);
export const delActById = async id => await API.get(`/acts/info/${id}`);