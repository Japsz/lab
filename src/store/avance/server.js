import axios from 'axios';
import {ip} from '../../gateway'

const API = axios.create({
  baseURL: ip
})

export const addAvance = async obj => await API.post('avance/add', obj,{headers: {authorization: localStorage.getItem('session-token')}});
export const addAvanceLike = async obj => await API.post('avance/addLike', obj,{headers: {authorization: localStorage.getItem('session-token')}});
export const preAproveAvance = async obj => await API.post('avance/preAprove', obj,{headers: {authorization: localStorage.getItem('session-token')}});
export const postulateAvance = async obj => await API.post('avance/postulate', obj,{headers: {authorization: localStorage.getItem('session-token')}});
export const delAvanceById = async id => await API.get(`avance/del/${id}`,{headers: {authorization: localStorage.getItem('session-token')}});
export const getAvanceById = async id => await API.get(`avance/get/${id}`,{headers: {authorization: localStorage.getItem('session-token')}});