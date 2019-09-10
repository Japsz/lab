import axios from 'axios';
import {ip} from '../../gateway'

const API = axios.create({
  baseURL: ip,
  headers: {
    authorization: localStorage.getItem('session-token'),
  }
})

export const addCommentInterno = async obj => await API.post('/internComment/add', obj);

export const addCommentInternoLike = async obj => await API.post('/internComment/like', obj);

export const delCommentInternoById = async id => await API.get(`/internComment/del/${id}`);