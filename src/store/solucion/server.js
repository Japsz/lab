import axios from 'axios';
import {ip} from '../../gateway'

const API = axios.create({
  baseURL: ip
})

export const addSol = async obj => await API.post('sol/add', obj,{headers: {authorization: localStorage.getItem('session-token')}});
export const addSolLike = async obj => await API.post('sol/addLike', obj,{headers: {authorization: localStorage.getItem('session-token')}});
export const addSolUser = async obj => await API.post('sol/joinUser', obj,{headers: {authorization: localStorage.getItem('session-token')}});
export const delSolById = async id => await API.get(`sol/del/${id}`,{headers: {authorization: localStorage.getItem('session-token')}});