import axios from 'axios';
import {ip} from '../../gateway'

const API = axios.create({
  baseURL: ip,
  timeout: 6000,
})

export const addInternPost = async obj => await API.post('/internPost/add', obj,{headers: {authorization: localStorage.getItem('session-token')}});
export const addInternPostLike = async obj => await API.post('/internPost/postIntern', obj,{headers: {authorization: localStorage.getItem('session-token')}});
export const delInternPostById = async id => await API.get(`/internPost/del/${id}`,{headers: {authorization: localStorage.getItem('session-token')}});