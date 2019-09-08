import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    authorization: localStorage.getItem('session-token'),
  },
})

export const addAvance = async obj => await API.post('/avance/add', obj);
export const addAvanceLike = async obj => await API.post('/avance/addLike', obj);
export const preAproveAvance = async obj => await API.post('/avance/preAprove', obj);
export const postulateAvance = async obj => await API.post('/avance/postulate', obj);
export const delAvanceById = async id => await API.get(`/avance/del/${id}`);
export const getAvanceById = async id => await API.get(`/avance/get/${id}`);