import axios from 'axios';
import {ip} from '../../gateway'

const API = axios.create({
  baseURL: ip
})

export const addProy = async obj => await API.post('/proy/addProy', obj,{headers: {authorization: localStorage.getItem('session-token')}});

export const addProyLike = async obj => await API.post('/proy/addLike', obj,{headers: {authorization: localStorage.getItem('session-token')}});

export const getProyById = async id => await API.get(`/proy/info/${id}`,{headers: {authorization: localStorage.getItem('session-token')}});