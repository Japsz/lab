import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:8081`,
  headers: {
    authorization: localStorage.getItem('session-token'),
  }
});