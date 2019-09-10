import axios from 'axios';
import {ip} from '../../gateway'

const API = axios.create({
  baseURL: ip
})

export const addSol = async obj => await API.post('/sol/add', obj);
export const addSolLike = async obj => await API.post('/sol/addLike', obj);
export const addSolUser = async obj => await API.post('/sol/joinUser', obj);
export const delSolById = async id => await API.get(`/sol/del/${id}`);