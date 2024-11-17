// services/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3010',
});

const userId = localStorage.getItem('userId');
if (userId) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${userId}`;
}

export default instance;
