import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    authorization: localStorage.getItem('session-token'),
  },
  timeout: 6000,
})

export const addInternPost = async obj => await API.post('/internPost/add', obj);
export const addInternPostLike = async obj => await API.post('/internPost/postIntern', obj);
export const delInternPostById = async id => await API.get(`/internPost/del/${id}`);