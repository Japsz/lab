import axios from 'axios';
import {ip} from '../gateway'

export default axios.create({
  baseURL: ip,
  headers: {
    authorization: localStorage.getItem('session-token'),
  }
});