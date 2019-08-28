import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8081'
})

export const addCommentInterno = async obj => await API.post('/internComment/add', obj);

export const addCommentInternoLike = async obj => await API.post('/internComment/like', obj);

export const delCommentInternoById = async id => await API.get(`/internComment/del/${id}`);