import axios from 'axios';
import {ip} from '../../gateway'

const API = axios.create({
  baseURL: ip
})

export const addProy = async obj => await API.post('/proy/addProy', obj);

export const addProyLike = async obj => await API.post('/proy/addLike', obj);

export const getProyById = async id => await API.get(`/proy/info/${id}`);