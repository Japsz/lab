import axios from 'axios';
import {ip} from '../../gateway'

const API = axios.create({
  baseURL: ip
})

export const addCommentInterno = async obj => await API.post('internComment/add', obj,{headers: {authorization: localStorage.getItem('session-token')}});

export const addCommentInternoLike = async obj => await API.post('internComment/like', obj,{headers: {authorization: localStorage.getItem('session-token')}});

export const delCommentInternoById = async id => await API.get(`internComment/del/${id}`,{headers: {authorization: localStorage.getItem('session-token')}});