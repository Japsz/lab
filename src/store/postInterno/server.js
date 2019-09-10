import axios from 'axios';
import {ip} from '../../gateway'

const API = axios.create({
  baseURL: ip,
  headers: {
    authorization: localStorage.getItem('session-token'),
  },
  timeout: 6000,
})

export const addInternPost = async obj => await API.post('/internPost/add', obj);
export const addInternPostLike = async obj => await API.post('/internPost/postIntern', obj);
export const delInternPostById = async id => await API.get(`/internPost/del/${id}`);