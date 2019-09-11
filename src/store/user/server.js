import axios from 'axios';
import {ip} from '../../gateway'

const API = axios.create({
  baseURL: ip
})

export const getLogin = async obj => await API.post('user/login', obj);
export const checkToken = async obj => await API.post('user/checkToken', obj);
export const getLogout = async obj => await API.post('user/logout', obj);
