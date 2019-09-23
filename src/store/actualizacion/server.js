import {ip} from '../../gateway'
import axios from 'axios';

const API = axios.create({
  baseURL: ip
})

export const addAct = async obj => await API.post('acts/add', obj,{headers: {authorization: localStorage.getItem('session-token')}});
export const addActLike = async obj => await API.post('acts/addAct', obj,{headers: {authorization: localStorage.getItem('session-token')}});
export const delActById = async id => await API.get(`acts/info/${id}`,{headers: {authorization: localStorage.getItem('session-token')}});