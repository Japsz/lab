import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8081'
})

export const addProy = async obj => await API.post('/proy/addProy', obj);

export const addProyLike = async obj => await API.post('/proy/addLike', obj);

export const getProyById = async id => await API.get(`/proy/info/${id}`);